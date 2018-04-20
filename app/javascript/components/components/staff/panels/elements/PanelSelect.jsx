import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import Select from '../../../base/Select';
import SelectItem from '../../../base/SelectItem';

class PanelSelect extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `select-${uuid()}`, type: 'select', text: 'Select', elements: [ PanelSelect.itemStructure(0) ] };
    }

    static itemStructure(index) {
        return { index: index, uuid: `select-item-${uuid()}`, text: 'Sample Item' }
    }

    constructor(props) {
        super(props);

        if (this.props.show) return;

        if (!_.isEmpty(this.props.element.elements)) {
            let element = this.props.element;
            element.elements = _.range(0, Object.keys(element.elements).length).map((index) => {
                return element.elements[index];
            });

            this.props.updateElement(element);
        }
    }

    renderItems() {
        return (
            this.props.element.elements.map((element) => {
                return (
                    <div key={element.uuid}>
                        <SelectItem>
                            {element.text}
                        </SelectItem>
                    </div>
                )
            })
        );
    }

    render() {
        return (
            <div id={this.props.element.uuid} className='middle-center'>
                <Select label={this.props.element.text} onChange={() => {}}>
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
