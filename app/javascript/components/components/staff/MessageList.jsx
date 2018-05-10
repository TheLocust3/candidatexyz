import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Link from '../base/Link';

class MessageList extends React.Component {

    renderMessageList() {
        return (
            <ul className='mdc-list mdc-list--two-line'>
                {this.props.messages.map((message) => {
                    return (
                        <Link className='unstyled-link' key={message.id} to={`/staff/messages/${message.id}`}>
                            <li className='mdc-list-item'>
                                <span className='mdc-list-item__text'>
                                    {message.firstName} {message.lastName}

                                    <span className='mdc-list-item__secondary-text'>
                                        {message.email}
                                    </span>
                                </span>
                            </li>
                        </Link>
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

MessageList.propTypes = {
    messages: PropTypes.array
};

export default MessageList;
