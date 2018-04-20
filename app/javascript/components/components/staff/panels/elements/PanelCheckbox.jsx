import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import Checkbox from '../../../base/Checkbox';

class PanelCheckbox extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `checkbox-${uuid()}`, type: 'checkbox', text: 'Checkbox', theme: {} };
    }

    render() {
        return (
            <div id={this.props.element.uuid} className='middle-center'>
                <Checkbox label={this.props.element.text} onChange={() => {}} customPanelTheme={this.props.element.theme} />
            </div>
        );
    }
}

PanelCheckbox.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    show: PropTypes.bool
};

export default PanelCheckbox;
