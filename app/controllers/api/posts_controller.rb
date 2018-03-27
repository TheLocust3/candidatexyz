class Api::PostsController < Api::ApiController

    def index
        render :json => Posts.where( :post_type => params[:post_type] )
    end

    def show
        render :json => Posts.where( :post_type => params[:post_type], :url => params[:url] ).first
    end

    def create
        post = Posts.new(create_params(params))

        if post.save
            render :json => Posts.find(post.id)
        else
            render_errors(post)
        end
    end

    def update
        post = Posts.where( :post_type => params[:post_type], :url => params[:url] ).first

        if issue.update(update_params(params))
            render :json => Posts.where( :post_type => params[:post_type], :url => params[:url] ).first
        else
            render_errors(post)
        end
    end

    def destroy
        post = Posts.where( :post_type => params[:post_type], :url => params[:url] ).first
        post.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:title, :post_type, :url, :body)
    end

    def update_params(params)
        params.permit(:title, :url, :body)
    end
  end
  