import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import TextField from '../../../base/TextField';

class PanelTextField extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `textField-${uuid()}`, type: 'textField', text: 'TextField', theme: {} };
    }

    render() {
        return (
            <span id={this.props.element.uuid}>
                <TextField label={this.props.element.text} onChange={(event) => event.preventDefault()} customPanelTheme={this.props.element.theme} />
            </span>
        );
    }
}

PanelTextField.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    show: PropTypes.bool
};

export default PanelTextField;
