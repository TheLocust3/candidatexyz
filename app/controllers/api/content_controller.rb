class Api::ContentController < Api::ApiController

    def index
        render :json => Content.all
    end

    def show
        render :json => Content.find(params[:id])
    end

    def create
        content = Content.new(create_params(params))

        if content.save
            render :json => Content.find(content.id)
        else
            render_errors(content)
        end
    end

    def update
        content = Content.find(params[:id])

        if content.update(update_params(params))
            render :json => Content.find(content.id)
        else
            render_errors(content)
        end
    end

    def destroy
        content = Content.find(params[:id])
        content.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:type, :identifier, :content)
    end

    def update_params(params)
        params.permit(:content)
    end
end
  