class Api::MailController < Api::ApiController

    before_action :authenticate_user!, only: [ :send_to_contacts ]

    def send_to_contacts
        Mailer.to_contacts(params[:subject], params[:body])
    end

    private
    def mail(params)
        params.permit(:subject, :body)
    end
end
  