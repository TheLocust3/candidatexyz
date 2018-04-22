import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import CheckboxStyler from '../element-stylers/CheckboxStyler';
import Checkbox from '../../base/Checkbox';

class CheckboxThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { checkbox: _.isEmpty(this.props.theme.styling.checkbox) ? { backgroundColor: this.props.colors[0], borderColor: this.props.colors[0], fontSize: '16px' } : this.props.theme.styling.checkbox };
    }

    updateTheme(theme) {
        let checkbox = this.state.checkbox;
        checkbox = theme;

        this.setState({
            checkbox: checkbox
        });

        this.props.updateTheme(checkbox);
    }

    render() {
        return (
            <div>
                <Checkbox label='Sample Checkbox' onChange={() => {}} themeOverride={this.props.theme} /><br />

                <CheckboxStyler theme={this.state.checkbox} colors={this.props.colors} updateTheme={(theme) => this.updateTheme(theme)} />
            </div>
        );
    }
}

CheckboxThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default CheckboxThemeForm;
