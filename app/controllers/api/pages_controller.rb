class Api::PagesController < Api::ApiController

    before_action :authenticate_user!, only: [ :index, :create, :update, :destroy ]

    def index
        render :json => Page.all
    end

    def show
        render :json => Page.where(name: params[:name]).first
    end

    def create
        page = Page.new(create_params(params))
        page.panels = params[:panels].map { |panel_id|
            Panel.find(panel_id)
        }

        if page.save
            render :json => Page.find(page.id)
        else
            render_errors(page)
        end
    end

    def update
        page = Page.find(params[:id])
        page.panels = params[:panels].map { |panel_id|
            Panel.find(panel_id)
        }

        if page.update(update_params(params))
            render :json => Page.find(page.id)
        else
            render_errors(page)
        end
    end

    def destroy
        page = Page.where( name: params[:name]).first
        page.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:name, :description)
    end

    def update_params(params)
        params.permit(:name, :description)
    end
end
  