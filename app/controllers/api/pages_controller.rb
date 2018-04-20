class Api::PagesController < Api::ApiController

    before_action :authenticate_user!, only: [ :index, :create, :update, :destroy ]

    def index
        render :json => Page.all
    end

    def show
        render :json => Page.where(url: params[:url]).first
    end

    def create
        page = Page.new(create_params(params))
        panel_ids = params[:panels].nil? ? [] : params[:panels]
        page.panels = panel_ids.map { |panel_id|
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
        panel_ids = params[:panels].nil? ? [] : params[:panels]
        page.panels = panel_ids.map { |panel_id|
            Panel.find(panel_id)
        }

        if page.update(update_params(params))
            render :json => Page.find(page.id)
        else
            render_errors(page)
        end
    end

    def destroy
        page = Page.where( url: params[:url]).first
        page.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:name, :description, :url)
    end

    def update_params(params)
        params.permit(:name, :description, :url)
    end
end
  