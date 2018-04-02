import $ from 'jquery';

let MailApi = {

    sendToContacts(subject, body) {
        return new Promise((resolve, reject) => {
            $.ajax('/api/mail/send_to_contacts', {
                type: 'post',
                data: { subject: subject, body: body },
                success: resolve,
                error: reject
            });
        });
    }
};

export default MailApi;
