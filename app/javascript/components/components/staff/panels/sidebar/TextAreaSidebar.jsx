import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../base/Header';
import MDCAutoInit from '../../../global/MDCAutoInit';
import DeleteElementButton from './DeleteElementButton';
import TextAreaStyler from '../../element-stylers/TextAreaStyler';
import TextField from '../../../base/TextField';

class TextAreaSidebar extends React.Component {

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

                <TextField dense={true} label='Text' name='text' onChange={(event) => this.handleChange(event)} defaultValue={this.props.element.text} /><br />

                <TextField dense={true} type='number' name='rows' label='Rows' onChange={(event) => { this.handleChange(event) }} defaultValue={String(element.rows)} style={{ width: '45%', marginRight: '5%' }} />
                <TextField dense={true} type='number' name='cols' label='Cols' onChange={(event) => { this.handleChange(event) }} defaultValue={String(element.cols)} style={{ width: '45%' }} />

                <TextAreaStyler theme={element.theme} updateTheme={(theme) => this.updateTheme(theme)} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

TextAreaSidebar.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    updateInnerElements: PropTypes.func
};

export default TextAreaSidebar;
