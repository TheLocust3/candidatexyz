import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setBlankNavbar, setDocumentTitle } from '../../../actions/global-actions';
import { fetchPanel } from '../../../actions/panel-actions';
import MDCAutoInit from '../../../components/global/MDCAutoInit';

import PanelForm from '../../../components/staff/panels/PanelForm';

class PanelEditor extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Panel Editor'));
        this.props.dispatch(setBlankNavbar(true));

        if (!_.isEmpty(this.props.match.params.name)) {
            this.props.dispatch(fetchPanel(this.props.match.params.name));
        }
    }

    render() {
        if (!_.isEmpty(this.props.match.params.name) && !this.props.isReady) return null;
        let panel = _.isEmpty(this.props.match.params.name) ? {} : this.props.panel;

        return (
            <div className='content-bottom content-5'>
                <div className='mdc-typography--display2'>Panel Editor</div><br />
                <Link className='link' to={`/staff/panels/${this.props.panel.name}/show`}>Preview Panel</Link>
                
                <PanelForm panel={panel} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.panels.isReady,
        panel: state.panels.panel
    };
}

export default connect(mapStateToProps)(PanelEditor);
