class Api::ThemesController < Api::ApiController

    before_action :authenticate_user!, only: [ :index, :create, :update, :destroy ]

    def index
        render :json => Theme.all
    end

    def show
        render :json => Theme.where( name: params[:name]).first
    end

    def create
        theme = Theme.new(create_params(params))

        if theme.save
            render :json => Theme.find(theme.id)
        else
            render_errors(theme)
        end
    end

    def update
        theme = Theme.where( name: params[:name]).first

        if theme.save
            render :json => Theme.find(theme.id)
        else
            render_errors(theme)
        end
    end

    def destroy
        theme = Theme.where( name: params[:name]).first
        theme.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:name, :description, :styling)
    end

    def update_params(params)
        params.permit(:name, :description, :styling)
    end
end
  