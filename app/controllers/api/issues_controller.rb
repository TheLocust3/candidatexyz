class Api::IssuesController < Api::ApiController

    def index
        render :json => Issue.all
    end

    def show
        render :json => Issue.find(params[:id])
    end

    def create
        issue = Issue.new(create_params(params))

        if issue.save
            render :json => Issue.find(issue.id)
        else
            render_errors(issue)
        end
    end

    def update
        issue = Issue.find(params[:id])

        if issue.update(update_params(params))
            render :json => Issue.find(issue.id)
        else
            render_errors(issue)
        end
    end

    def destroy
        issue = Contact.find(params[:id])
        issue.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:title, :url, :body)
    end

    def update_params(params)
        params.permit(:title, :url, :body)
    end
  end
  