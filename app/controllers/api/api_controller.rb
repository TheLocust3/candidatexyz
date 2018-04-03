class Api::ApiController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def authenticate_admin!
        unless current_user.admin
            render :json => { 'errors': { 'user': [ 'not admin' ] } }, :status => 401
        end
    end

    def render_success
        render :json => { 'status': 'ok' }
    end

    def render_errors(model)
        render :json => { 'errors': model.errors.messages }, :status => 400
    end

    def render_unauthorized
        render :json => {}, :status => 401
    end

    private
    def not_found
        render :json => {}, :status => 404
    end
end