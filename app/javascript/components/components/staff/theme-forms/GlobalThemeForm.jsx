import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../../global/ColorPicker';

class GlobalThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { global: _.isEmpty(this.props.theme.styling.global) ? {} : this.props.theme.styling.global };
    }

    handleColorChange(color, style) {
        let global = { ...this.state.global, [style]: color.hex };
        this.setState({
            global: global
        });

        this.props.updateTheme(global);
    }

    render() {
        let displayPicker = this.state.colorPickerOpen ? 'visible' : 'hidden';

        return (
            <div>
                <div className='mdc-typography--title'>Primary Color</div>
                <i>Global default fallback color</i><br />

                <ColorPicker label='Pick Color' color={this.state.global.backgroundColor} colors={this.props.colors} onChange={(color) => this.handleColorChange(color, 'backgroundColor')}  />
            </div>
        );
    }
}

GlobalThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default GlobalThemeForm;
