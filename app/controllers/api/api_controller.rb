class Api::ApiController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def render_success
        render :json => { 'status': 'ok' }
    end

    def render_errors(model)
        render :json => { 'errors': model.errors.messages }, :status => 400
    end

    def render_unauthorized
        render :json => {}, :status => 401
    end

    def authenticate_user_campaign_id
        if @campaign_id != Content.where( :identifier => 'campaignId' ).first.content
            render_unauthorized
        end
    end

    private
    def not_found
        render :json => {}, :status => 404
    end
end