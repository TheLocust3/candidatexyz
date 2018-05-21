import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/base/Header';
import Button from '../../components/base/Button';
import { history } from '../../../constants';
import { home } from '../../../features';
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
            history.push(home);
        });
    }

    render() {
        return (
            <div className='content content-15'>
                <Header type='headline2'><b>Header</b></Header><br />

                <Button onClick={this.onUnsubscribeClick.bind(this)}>Unsubscribe</Button>
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Unsubscribe);
