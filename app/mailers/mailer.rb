class Mailer < ApplicationMailer

    def to_contacts(subject, body)
        @logo = Content.where( identifier: 'logo' ).first.content['image']
        @approved_by = Content.where( identifier: 'approvedByBlurb' ).first.content['text']
        @body = body
        
        Contact.all.map { |contact|
            @token = Rails.application.message_verifier(:email).generate(contact.id)
            mail(to: contact.email, subject: subject, template_path: 'mail', template_name: 'campaign')
        }
    end
end