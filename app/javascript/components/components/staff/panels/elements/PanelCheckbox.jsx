import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import Checkbox from '../../../base/Checkbox';

class PanelCheckbox extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `checkbox-${uuid()}`, type: 'checkbox', text: 'Checkbox' };
    }

    render() {
        return (
            <div id={this.props.element.uuid} className='middle-center'>
                <Checkbox label={this.props.element.text} onChange={() => {}} />
            </div>
        );
    }
}

PanelCheckbox.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object
};

export default PanelCheckbox;
