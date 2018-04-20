import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setBlankNavbar, setDocumentTitle } from '../../../actions/global-actions';
import { fetchPanel } from '../../../actions/panel-actions';
import MDCAutoInit from '../../../components/global/MDCAutoInit';

import PanelRenderer from '../../../components/staff/panels/PanelRenderer';

class ShowPanel extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.isReady) {
            this.state = { panel: this.flattenPanel(this.props.panel) };
        }
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Panel Editor'));
        this.props.dispatch(setBlankNavbar(true));

        this.props.dispatch(fetchPanel(this.props.match.params.name));
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isReady) return;

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
        if (!this.props.isReady) return null;

        return (
            <div className='content-bottom content-5'>
                <div className='mdc-typography--display2'>Panel Preview</div><br />
                
                <PanelRenderer panel={this.state.panel} />

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

export default connect(mapStateToProps)(ShowPanel);
