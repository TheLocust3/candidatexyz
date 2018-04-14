import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import Button from '../../base/Button';

class GlobalThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { global: _.isEmpty(this.props.theme.styling.global) ? {} : this.props.theme.styling.global };
    }

    componentDidMount() {
        $(document).click((event) => { // TODO: find a better way to do this
            let target = event.target;

            if (!$(event.target).parents().is('.color-picker-wrapper')) {
                this.setState({
                    colorPickerOpen: false,
                });
            }
        });
    }

    handleColorChange(color, event, style) {
        let global = { ...this.state.global, [style]: color.hex };
        this.setState({
            global: global
        });

        this.props.updateTheme(global);
    }

    onColorPickerOpen(event) {
        event.preventDefault();

        this.setState({
            colorPickerOpen: !this.state.colorPickerOpen
        });
    }

    render() {
        let displayPicker = this.state.colorPickerOpen ? 'visible' : 'hidden';

        return (
            <div>
                <div className='mdc-typography--title'>Primary Color</div>
                <i>Global default fallback color</i><br />

                <div className='color-picker-wrapper'>
                    <Button condensed={true} onClick={this.onColorPickerOpen.bind(this)} style={this.state.global}>Pick Color</Button><br /><br />
                    
                    <div className='color-picker' style={{ visibility: displayPicker }}>
                        <BlockPicker color={this.state.global.backgroundColor} onChangeComplete={(color, event) => this.handleColorChange(color, event, 'backgroundColor')} colors={this.props.colors} />
                    </div>
                </div>
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
