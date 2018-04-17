import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import Fab from '../../../base/Fab';

class PanelFab extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `button-${uuid()}`, type: 'fab', icon: 'settings' };
    }

    render() {
        return (
            <div id={this.props.element.uuid} className='middle-center'>
                <Fab className='material-icons middle-center' onClick={(event) => event.preventDefault()}>
                    <span className='mdc-fab__icon'>
                        {this.props.element.icon}
                    </span>
                </Fab>
            </div>
        );
    }
}

PanelFab.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object
};

export default PanelFab;
