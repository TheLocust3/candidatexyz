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
        panel_ids.each_with_index { |panel_id, i|
            PageSection.create(page: page, panel: Panel.find(panel_id), index: i)
        }

        if page.save
            render :json => page
        else
            render_errors(page)
        end
    end

    def update
        page = Page.find(params[:id])
        panel_ids = params[:panels].nil? ? [] : params[:panels]
        
        PageSection.where( page_id: page.id ).delete_all
        panel_ids.each_with_index { | panel_id, i |
            PageSection.create(page: page, panel: Panel.find(panel_id), index: i)
        }

        if page.update(update_params(params))
            render :json => page
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
  