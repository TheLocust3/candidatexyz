class Mailer < ApplicationMailer

    def to_contacts(subject, body)
        mail_template

        @body = body
        
        Contact.all.map { |contact|
            @token = Rails.application.message_verifier(:unsubscribe).generate(contact.id)
            mail(to: contact.email, subject: subject, template_path: 'mail', template_name: 'campaign')
        }
    end

    def staff_invite(to, token)
        mail_template

        @body = "
            <a href='#{root_url}staff/sign-up/#{token}'>Join.</a>
        "

        mail(to: to, subject: 'Join Staff', template_path: 'mail', template_name: 'campaign')
    end

    private
    def mail_template
        @header_image = Content.where( identifier: 'emailHeaderImage' ).first.content['image']
        @footer = Content.where( identifier: 'emailFooterBlurb' ).first.content['text']
    end
end