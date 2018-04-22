import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import TextFieldStyler from '../element-stylers/TextFieldStyler';
import TextField from '../../base/TextField';

class TextFieldThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { textField: _.isEmpty(this.props.theme.styling.textField) ? { color: this.props.colors[0] } : this.props.theme.styling.textField };
    }

    updateTheme(theme) {
        this.setState({
            textField: theme
        });

        this.props.updateTheme(theme);
    }

    render() {
        return (
            <div>
                <TextField label='Sample Textfield' onChange={(event) => { event.preventDefault(); }} themeOverride={this.props.theme} />
                <br /><br />

                <TextFieldStyler theme={this.state.textField} colors={this.props.colors} updateTheme={(theme) => this.updateTheme(theme)} />
            </div>
        );
    }
}

TextFieldThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default TextFieldThemeForm;
