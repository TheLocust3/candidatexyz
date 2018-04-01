class Api::Users::UsersController < ApplicationController

    before_action :authenticate_user!, only: [ :index, :show, :destroy ]

    def index
        render :json => User.all
    end

    def show
        render :json => User.find(params[:id])
    end

    def get_current_user
      render :json => current_user
    end

    def update
        user = User.find(params[:id])

        if user.update(update_params(params))
            render :json => User.find(user.id)
        else
            render_errors(user)
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy

        render_success
    end

    private
    def update_params(params)
        params.permit(:email, :first_name, :last_name)
    end
end
