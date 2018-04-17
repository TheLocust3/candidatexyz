import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import TextField from '../../../base/TextField';

class PanelTextField extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `textField-${uuid()}`, type: 'textField', text: 'TextField' };
    }

    render() {
        return (
            <div id={this.props.element.uuid} className='middle-center'>
                <TextField label={this.props.element.text} onChange={(event) => event.preventDefault()} />
            </div>
        );
    }
}

PanelTextField.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object
};

export default PanelTextField;
