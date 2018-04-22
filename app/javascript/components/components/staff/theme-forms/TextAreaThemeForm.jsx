import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import TextAreaStyler from '../element-stylers/TextAreaStyler';
import TextArea from '../../base/TextArea';

class TextAreaThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { textArea: _.isEmpty(this.props.theme.styling.textArea) ? { color: this.props.colors[0] } : this.props.theme.styling.textArea };
    }

    updateTheme(theme) {
        this.setState({
            textArea: theme
        });

        this.props.updateTheme(theme);
    }

    render() {
        return (
            <div>
                <TextArea label='Sample Textarea' onChange={() => {}} themeOverride={this.props.theme} />
                <br /><br />

                <TextAreaStyler theme={this.state.theme} colors={this.props.colors} updateTheme={(theme) => this.updateTheme(theme)} />
            </div>
        );
    }
}

TextAreaThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default TextAreaThemeForm;
