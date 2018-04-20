import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../helpers';
import PanelRow from './elements/PanelRow';

class PanelRenderer extends React.Component {

    render() {
        return (
            <div>
                {this.props.panel.elements.map((element, index) => {
                    return (
                        <div key={uuid()}>
                            <PanelRow show={true} elements={this.props.panel.elements} settings={this.props.panel.settings} element={element} />
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
