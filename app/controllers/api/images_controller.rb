class Api::ImagesController < Api::ApiController

    before_action :authenticate_user!, only: [ :index, :create, :update, :destroy ]

    def index
        render :json => Image.all
    end

    def show
        render :json => Image.where( :identifier => params[:identifier] ).first
    end

    def create
        image = Image.new(create_params(params))

        # TODO: Image upload code

        if image.save
            render :json => Image.find(image.id)
        else
            render_errors(image)
        end
    end

    def update
        image = Image.where( :identifier => params[:identifier] ).first

        # TODO: Image upload code

        if image.update(update_params(params))
            render :json => Image.find(image.id)
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

    def update_params(params)
        params.permit()
    end
  end
  