import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Link from '../base/Link';

class SignUpList extends React.Component {

    renderMessageList() {
        return (
            <ul className='mdc-list mdc-list--two-line'>
                {this.props.contacts.map((contact, index) => {
                    return (
                        <li key={index} className='mdc-list-item'>
                            <span className='mdc-list-item__text'>
                                {contact.firstName} {contact.lastName} ({contact.zipcode})

                                <span className='mdc-list-item__secondary-text'>
                                    Email: {contact.email}<br />
                                    Phone Number: {contact.phoneNumber}
                                </span>
                            </span>
                        </li>
                    )
                })}
            </ul>
        );
    }

    render() {
        return (
            <div>
                {this.renderMessageList()}
            </div>
        );
    }
}

SignUpList.propTypes = {
    contacts: PropTypes.array
};

export default SignUpList;
