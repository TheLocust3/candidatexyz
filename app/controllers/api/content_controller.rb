require 'uri'

class Api::ContentController < Api::ApiController

    include CandidateXYZ::Concerns::Authenticatable
    include CandidateXYZ::Concerns::Request
    before_action :authenticate, only: [ :create, :update, :destroy, :refreshCampaignId ]
    before_action :authenticate_campaign_id, only: [ :create, :update, :destroy ]
    before_action :authenticate_user_campaign_id, only: [ :create, :update, :destroy ]

    def index
        render :json => Content.all
    end

    def show
        render :json => Content.where( :identifier => params[:identifier] ).first
    end

    def create
        content = Content.new(create_params(params))

        if content.save
            render :json => content
        else
            render_errors(content)
        end
    end

    def refreshCampaignId
        content = Content.where( :identifier => 'campaignId' ).first

        data = get("#{Rails.application.secrets.auth_api}/campaigns/name/#{URI.encode(Rails.application.secrets.campaign_name)}")
        content.content = data['id']

        if content.save
            render :json => content
        else
            render_errors(content)
        end
    end

    def update
        content = Content.where( :identifier => params[:identifier] ).first
        content.content = params[:content]

        if content.save
            render :json => content
        else
            render_errors(content)
        end
    end

    def destroy
        content = Content.where( :identifier => params[:identifier] ).first
        content.destroy

        render_success
    end

    private
    def create_params(params)
        params.permit(:content_type, :identifier, :content)
    end
end
  