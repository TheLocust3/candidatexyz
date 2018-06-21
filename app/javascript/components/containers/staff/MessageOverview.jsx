import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { MessageActions } from 'candidatexyz-common-js';
import Header from '../../components/base/Header';

import MessageList from '../../components/staff/MessageList';

class MessageOverview extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Message Overview'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(MessageActions.fetchAllMessages());
    }

    render() {
        return (
            <div className='content content-15'>
                <Header type='headline3'>Message Overview</Header><br />

                <MessageList messages={this.props.messages.messages} />
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
