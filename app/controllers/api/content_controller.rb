class Api::ContentController < Api::ApiController

    def index
        render :json => Content.all
    end

    def show
        render :json => Content.where( :identifier => params[:identifier] ).first
    end

    def create
        content = Content.new(create_params(params))

        if content.save
            render :json => Content.where( :identifier => params[:identifier] ).first
        else
            render_errors(content)
        end
    end

    def update
        content = Content.where( :identifier => params[:identifier] ).first
        content.content = params[:content]

        if content.save
            render :json => Content.where( :identifier => params[:identifier] ).first
        else
            render_errors(content)
        end
    end

    def destroy
        content = Content.where( :identifier => params[:identifier] ).first
        content.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:content_type, :identifier, :content)
    end
end
  