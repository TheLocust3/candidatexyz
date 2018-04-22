import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import Select from '../../../base/Select';
import SelectItem from '../../../base/SelectItem';

class PanelSelect extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `select-${uuid()}`, type: 'select', text: 'Select', elements: [ PanelSelect.itemStructure(0) ], theme: {} };
    }

    static itemStructure(index) {
        return { index: index, uuid: `select-item-${uuid()}`, text: 'Sample Item' }
    }

    renderItems() {
        return (
            this.props.element.elements.map((element) => {
                return (
                    <div key={element.uuid}>
                        <SelectItem customPanelTheme={this.props.element.theme}>
                            {element.text}
                        </SelectItem>
                    </div>
                )
            })
        );
    }

    render() {
        return (
            <div id={this.props.element.uuid} className='panel-select-wrapper'>
                <Select label={this.props.element.text} onChange={() => {}} customPanelTheme={this.props.element.theme}>
                    {this.renderItems()}
                </Select>
            </div>
        );
    }
}

PanelSelect.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    updateElement: PropTypes.func,
    show: PropTypes.bool
};

export default PanelSelect;
