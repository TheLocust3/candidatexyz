class Api::MailController < Api::ApiController

    before_action :authenticate_user!, only: [ :send_to_contacts ]

    def send_to_contacts
        Mailer.to_contacts(params[:subject], params[:body]).deliver_later

        render_success
    end
end
  