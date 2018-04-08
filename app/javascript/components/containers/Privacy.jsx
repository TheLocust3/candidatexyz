import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../actions/global-actions';
import MDCAutoInit from '../components/global/MDCAutoInit';
import TextContent from '../containers/content/TextContent';
import JoinTeamPanel from '../components/panels/JoinTeamPanel';

class Privacy extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Privacy Policy'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='content content-15'>
                <div className='mdc-typography--display3'><b><TextContent identifier='privacyHeader' /></b></div><br />

                <TextContent identifier='privacyPolicy' />
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Privacy);
