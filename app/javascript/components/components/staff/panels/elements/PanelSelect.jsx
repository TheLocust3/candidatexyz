import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import Select from '../../../base/Select';
import SelectItem from '../../../base/SelectItem';

class PanelSelect extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `select-${uuid()}`, type: 'select', text: 'Select' };
    }

    render() {
        return (
            <div id={this.props.element.uuid} className='middle-center'>
                <Select label={this.props.element.text} onChange={() => {}}>
                    <SelectItem>
                        Sample Item 1
                    </SelectItem>

                    <SelectItem>
                        Sample Item 2
                    </SelectItem>
                </Select>
            </div>
        );
    }
}

PanelSelect.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object
};

export default PanelSelect;
