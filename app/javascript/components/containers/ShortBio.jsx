import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setBlankNavbar } from '../actions/global-actions';
import MDCAutoInit from '../components/common/MDCAutoInit';
import TextContent from '../containers/content/TextContent';

class Meet extends React.Component {

    componentDidMount() {
        this.props.dispatch(setBlankNavbar(true));
    }

    componentWillUnmount() {
        this.props.dispatch(setBlankNavbar(false));
    }

    render() {
        return (
            <div className='content short-bio'>
                <div className='mdc-typography--display3'><b><TextContent identifier='shortBioHeader' /></b></div><br />
                <TextContent identifier='shortBioBlurb' /><br /><br />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Meet);
