import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { history } from '../../../constants';
import ContactApi from '../../../api/contact-api';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

class Unsubscribe extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Mail'));
        this.props.dispatch(setBlankNavbar(true));
    }

    onUnsubscribeClick() {
        ContactApi.unsubscribe(this.props.match.params.token).then(() => {
            history.push('/home');
        });
    }

    render() {
        return (
            <div className='mail-form'>
                <div className='mdc-typography--display2'><b>Unsubscribe</b></div><br />

                <button className='mdc-button mdc-button--raised' data-mdc-auto-init='MDCRipple' onClick={this.onUnsubscribeClick.bind(this)}>Unsubscribe</button>
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Unsubscribe);
