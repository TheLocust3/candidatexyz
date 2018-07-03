class Api::PostsController < Api::ApiController

    include CandidateXYZ::Concerns::Authenticatable
    before_action :authenticate, only: [ :create, :update, :destroy ]
    before_action :authenticate_campaign_id, only: [ :create, :update, :destroy ]
    before_action :authenticate_user_campaign_id, only: [ :create, :update, :destroy ]

    def index
        render :json => Post.where( :post_type => params[:post_type] )
    end

    def show
        render :json => Post.where( :post_type => params[:post_type], :url => params[:url] ).first
    end

    def create
        post = Post.new(create_params(params))

        if post.save
            render :json => post
        else
            render_errors(post)
        end
    end

    def update
        post = Post.find(params[:id])

        if post.update(update_params(params))
            render :json => post
        else
            render_errors(post)
        end
    end

    def destroy
        post = Post.where( :post_type => params[:post_type], :url => params[:url] ).first
        post.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:title, :post_type, :url, :body, :image)
    end

    def update_params(params)
        params.permit(:title, :post_type, :url, :body, :image)
    end
  end
  