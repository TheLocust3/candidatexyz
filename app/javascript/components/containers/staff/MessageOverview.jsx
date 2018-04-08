import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { fetchAllMessages } from '../../actions/message-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import MessageList from '../../components/staff/MessageList';

class MessageOverview extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Message Overview'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchAllMessages());
    }

    render() {
        return (
            <div className='content-15'>
                <div className='mdc-typography--display3'>Message Overview</div><br />

                <MessageList messages={this.props.messages} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages.messages
    };
}

export default connect(mapStateToProps)(MessageOverview);
