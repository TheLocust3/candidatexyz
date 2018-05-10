import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import Link from '../../../components/base/Link';
import { setBlankNavbar, setDocumentTitle } from '../../../actions/global-actions';
import { fetchAllPanels } from '../../../actions/panel-actions';
import MDCAutoInit from '../../../components/global/MDCAutoInit';

import PanelList from '../../../components/staff/panels/PanelList';

class Panels extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Panels'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchAllPanels());
    }

    render() {
        return (
            <div className='content-bottom content-10'>
                <div className='mdc-typography--display2'>Panel List</div><br />
                <Link className='link' to='/staff/panels/new'>New panel</Link><br />
                
                <PanelList panels={this.props.panels} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        panels: state.panels.panels
    };
}

export default connect(mapStateToProps)(Panels);
