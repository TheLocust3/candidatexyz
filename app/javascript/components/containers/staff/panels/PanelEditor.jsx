import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import Header from '../../../components/base/Header';
import Link from '../../../components/base/Link';
import { setBlankNavbar, setDocumentTitle } from '../../../actions/global-actions';
import { fetchPanel } from '../../../actions/panel-actions';
import MDCAutoInit from '../../../components/global/MDCAutoInit';

import PanelForm from '../../../components/staff/panels/PanelForm';

class PanelEditor extends React.Component {

    constructor(props) {
        super(props);

        if (!_.isEmpty(this.props.panel)) {
            this.state = { panel: this.flattenPanel(this.props.panel) };
        }
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Panel Editor'));
        this.props.dispatch(setBlankNavbar(true));

        if (!_.isEmpty(this.props.match.params.name)) {
            this.props.dispatch(fetchPanel(this.props.match.params.name));
        }
    }

    componentWillReceiveProps(nextProps) {
        if (_.isEmpty(nextProps.panel)) return;

        this.setState({
            panel: this.flattenPanel(nextProps.panel)
        });
    }

    flattenPanel(panel) {
        let elements = panel.elements;
        elements = this.flattenElements(elements);

        panel.elements = elements
        return panel;
    }

    flattenElements(elements) {
        if (_.isEmpty(elements)) return {};

        let flattenedElements = _.range(0, Object.keys(elements).length).map((index) => {
            return elements[index];
        });

        return flattenedElements.map((element) => {
            element.elements = this.flattenElements(element.elements);
            return element;
        });
    }

    render() {
        if (!_.isEmpty(this.props.match.params.name) && _.isEmpty(this.props.panel)) return null;
        let panel = _.isEmpty(this.props.match.params.name) ? {} : this.state.panel;

        return (
            <div className='content-bottom content-5'>
                <Header type='display2'>Page Editor</Header><br />
                <Link className='link' to={`/staff/panels/${panel.name}/show`}>Preview Panel</Link>
                
                <PanelForm panel={panel} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        panel: state.panels.panel
    };
}

export default connect(mapStateToProps)(PanelEditor);
