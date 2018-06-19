import { DOMAIN } from '../constants';
import { volunteerApi } from '../helpers';

let MailApi = {

    sendToContacts(subject, body) {
        let fullBody = `
            ${body}

            <div class='footer'>
                <center>
                    Reading Democratic Committee<br /><br />

                    If you believe you received this message in error or wish to no longer receive email from us, please <a href='${DOMAIN}/unsubscribe/[TOKEN]'>unsubscribe</a>.
                </center>
            </div>
        `;

        return new Promise((resolve, reject) => {
            volunteerApi('/contacts/send_email', {
                type: 'post',
                data: { subject: subject, body: fullBody },
                success: resolve,
                error: reject
            });
        });
    }
};

export default MailApi;
