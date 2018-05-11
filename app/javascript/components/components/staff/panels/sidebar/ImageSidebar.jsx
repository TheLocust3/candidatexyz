import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../base/Header';
import MDCAutoInit from '../../../global/MDCAutoInit';
import DeleteElementButton from './DeleteElementButton';
import ColorPicker from '../../../global/ColorPicker';
import CustomStyler from '../../../global/CustomStyler';
import TextField from '../../../base/TextField';
import Button from '../../../base/Button';

class ImageSidebar extends React.Component {

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

    handleChange(event) {
        let element = this.props.element;
        element[event.target.name] = event.target.value;

        this.updateElement(element);
    }

    handleThemeChange(value, attribute, suffix) {
        let element = this.props.element;

        if (_.isUndefined(suffix)) {
            element.theme[attribute] = value;
        } else {
            element.theme[attribute] = value + suffix;
        }

        this.updateElement(element);
    }

    renderThemeEditor() {
        let theme = this.props.element.theme;

        return (
            <div>
                <TextField dense={true} type='number' label='Height' onChange={(event) => { this.handleThemeChange(event.target.value, 'height', 'px') }} defaultValue={_.replace(theme.height, 'px', '')} style={{ width: '45%', marginRight: '5%' }} />
                <TextField dense={true} type='number' label='Width' onChange={(event) => { this.handleThemeChange(event.target.value, 'width', 'px') }} defaultValue={_.replace(theme.width, 'px', '')} style={{ width: '45%' }} />

                <CustomStyler small={true} custom={theme.custom} onChange={(custom) => { this.handleThemeChange(custom, 'custom') }} />
            </div>
        )
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

                <TextField dense={true} label='URL' name='url' onChange={(event) => this.handleChange(event)} defaultValue={this.props.element.url} />
                <br />

                {this.renderThemeEditor()}
                
                <MDCAutoInit />
            </div>
        );
    }
}

ImageSidebar.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    updateInnerElements: PropTypes.func
};

export default ImageSidebar;
