import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../base/Header';
import MDCAutoInit from '../../../global/MDCAutoInit';
import DeleteElementButton from './DeleteElementButton';
import FabStyler from '../../element-stylers/FabStyler';
import TextField from '../../../base/TextField';

class FabSidebar extends React.Component {

    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.element.theme)) {
            let element = this.props.element;
            element.theme = {};

            this.updateElement(element);
        }
    }

    updateElement(element) {
        let elements = this.props.elements;
        elements[element.index] = element;

        this.props.updateInnerElements(elements);
    }

    updateTheme(theme) {
        let element = this.props.element;
        element.theme = theme;

        this.updateElement(element);
    }

    handleChange(event) {
        let element = this.props.element;
        element[event.target.name] = event.target.value;

        this.updateElement(element);
    }

    render() {
        let element = this.props.element;

        return (
            <div>
                <DeleteElementButton elements={this.props.elements} element={element} updateElements={this.props.updateInnerElements} />
                <br />

                <Header type='body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </Header>

                <TextField dense={true} label='Icon' name='icon' onChange={(event) => this.handleChange(event)} defaultValue={this.props.element.icon} />
                <br />

                <FabStyler theme={element.theme} updateTheme={(theme) => this.updateTheme(theme)} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

FabSidebar.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    updateInnerElements: PropTypes.func
};

export default FabSidebar;
