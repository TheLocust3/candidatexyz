class ContactMailer < ApplicationMailer

    def to_contacts(subject, body)
        emails = Contact.all.map({ |contact| contact.email })
        @logo = Content.where( identifier: 'logo' ).first
        @body = body
        
        mail(to: emails, subject: subject)
    end
end