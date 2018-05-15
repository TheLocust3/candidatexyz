import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { fetchMessage } from '../../actions/message-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import Header from '../../components/base/Header';

import MessageList from '../../components/staff/MessageList';

class ShowMessage extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Show Message'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchMessage(this.props.match.params.id));
    }

    render() {
        return (
            <div className='content-15'>
                <Header type='headline3'>Show Message</Header><br />

                <Header type='headline5'>Name</Header><br />
                {this.props.message.firstName} {this.props.message.lastName}<br /><br />

                <Header type='headline5'>Email</Header><br />
                {this.props.message.email}<br /><br />

                <Header type='headline5'>Message</Header><br />
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
