import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../helpers';
import PanelRow from './elements/PanelRow';

class PanelRenderer extends React.Component {

    constructor(props) {
        super(props);

        this.state = { panel: this.flattenPanel(this.props.panel) };
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
        let theme = _.isEmpty(this.props.panel.settings.theme) ? {} : this.props.panel.settings.theme;

        return (
            <div style={{ ...theme, ...theme.custom }}>
                {this.state.panel.elements.map((element, index) => {
                    return (
                        <div key={uuid()}>
                            <PanelRow show={true} elements={this.state.panel.elements} settings={this.state.panel.settings} element={element} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

PanelRenderer.propTypes = {
    panel: PropTypes.object
};

export default PanelRenderer;
