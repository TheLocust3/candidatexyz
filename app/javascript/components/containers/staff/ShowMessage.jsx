import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { fetchMessage } from '../../actions/message-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import MessageList from '../../components/staff/MessageList';

class ShowMessage extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Show Message'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchMessage(this.props.match.params.id));
    }

    render() {
        return (
            <div className='staff-overview'>
                <div className='mdc-typography--display3'>Show Message</div><br />

                <div className='mdc-typography--headline'>Name</div>
                {this.props.message.firstName} {this.props.message.lastName}<br /><br />

                <div className='mdc-typography--headline'>Email</div>
                {this.props.message.email}<br /><br />

                <div className='mdc-typography--headline'>Message</div>
                Subject: {this.props.message.subject}<br /><br />
                {this.props.message.message}<br /><br />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.messages.message
    };
}

export default connect(mapStateToProps)(ShowMessage);
