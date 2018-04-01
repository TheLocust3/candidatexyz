class Api::MessagesController < Api::ApiController

    before_action :authenticate_user!, only: [ :index, :show, :update, :destroy ]

    def index
        render :json => Message.all
    end

    def show
        render :json => Message.find(params[:id])
    end

    def create
        message = Message.new(create_params(params))

        if message.save
            render :json => Message.find(message.id)
        else
            render_errors(message)
        end
    end

    def destroy
        message = Message.find(params[:id])
        message.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:first_name, :last_name, :email, :subject, :message)
    end
  end
  