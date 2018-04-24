import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import Fab from '../../../base/Fab';

class PanelFab extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `fab-${uuid()}`, type: 'fab', icon: 'settings', theme: {} };
    }

    render() {
        return (
            <span id={this.props.element.uuid}>
                <Fab className='material-icons' onClick={(event) => event.preventDefault()} customPanelTheme={this.props.element.theme}>
                    <span className='mdc-fab__icon'>
                        {this.props.element.icon}
                    </span>
                </Fab>
            </span>
        );
    }
}

PanelFab.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    show: PropTypes.bool
};

export default PanelFab;
