class Api::ThemesController < Api::ApiController

    include CandidateXYZ::Concerns::Authenticatable
    before_action :authenticate, only: [ :index, :create, :update, :destroy ]
    before_action :authenticate_campaign_id, only: [ :index, :create, :update, :destroy ]
    before_action :authenticate_user_campaign_id, only: [ :index, :create, :update, :destroy ]

    def index
        render :json => Theme.all
    end

    def show
        render :json => Theme.where(name: params[:name]).first
    end

    def create
        theme = Theme.new(create_params(params))
        theme.styling = params[:styling]

        if theme.save
            render :json => theme
        else
            render_errors(theme)
        end
    end

    def update
        theme = Theme.find(params[:id])
        theme.styling = params[:styling]

        if theme.update(update_params(params))
            render :json => theme
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
        params.permit(:name, :description, :class_name_prefix)
    end

    def update_params(params)
        params.permit(:name, :description, :class_name_prefix)
    end
end
  