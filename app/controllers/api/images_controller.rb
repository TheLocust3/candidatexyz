class Api::ImagesController < Api::ApiController

    include CandidateXYZ::Concerns::Authenticatable
    before_action :authenticate, only: [ :index, :create, :update, :destroy ]

    def index
        render :json => Image.all
    end

    def show
        render :json => Image.where( :identifier => params[:identifier] ).first
    end

    def create
        image = Image.new(create_params(params))

        bucket = "#{Rails.application.secrets.project_name}-images"
        key = "#{Rails.application.secrets.username}/#{image.identifier}"

        S3.put_object(bucket: bucket, key: key, body: Base64.decode64(params[:image]), acl: 'public-read')
        image.url = "https://s3.amazonaws.com/#{bucket}/#{key}"

        if image.save
            render :json => image
        else
            render_errors(image)
        end
    end

    def destroy
        image = Image.find(params[:id])
        image.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:identifier)
    end
  end
  