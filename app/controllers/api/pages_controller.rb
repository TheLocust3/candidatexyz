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
        page.page_sections = panel_ids.map { |panel_id, index|
            PageSection.create(page: page, panel: Panel.find(panel_id), index: index)
        }

        if page.save
            render :json => Page.find(page.id)
        else
            render_errors(page)
        end
    end

    def update
        page = Page.find(params[:id])

        unless page.page_sections.length == 0
            panel_ids = params[:panels].nil? ? [] : params[:panels]
            page.page_sections = page.page_sections.map { |page_section|
                page_section.index = panel_id.index(page_section.panel.id)

                page_section
            }
        end

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
  