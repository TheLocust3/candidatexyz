import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import Button from '../../base/Button';

class ThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { button: _.isEmpty(this.props.theme.styling.button) ? {} : this.props.theme.styling.button };
    }

    componentDidMount() {
        $(document).click((event) => { // TODO: find a better way to do this
            let target = event.target;

            if (!$(event.target).parents().is('.color-picker-wrapper')) {
                this.setState({
                    colorPickerOpen: false
                });
            }
        });
    }

    handleColorChange(color, event, style) {
        let button = { ...this.state.button, [style]: color.hex };
        this.setState({
            button: button
        });

        this.props.updateTheme(button);
    }

    onColorPickerOpen(event) {
        event.preventDefault();

        this.setState({
            colorPickerOpen: !this.state.colorPickerOpen
        });
    }

    onSampleClick(event) {
        event.preventDefault();
    }

    renderRaisedButtonPanel() {
        let displayPicker = this.state.colorPickerOpen ? 'visible' : 'hidden';

        return (
            <div>
                <center>
                    <Button onClick={this.onSampleClick.bind(this)} themeOverride={this.props.theme}>Sample Raised Button</Button>
                </center><br /><br />

                <div className='color-picker-wrapper'>
                    <Button condensed={true} onClick={this.onColorPickerOpen.bind(this)}>Pick Color</Button><br /><br />
                    
                    <div className='color-picker' style={{ visibility: displayPicker }}>
                        <BlockPicker color={this.state.button.backgroundColor} onChangeComplete={(color, event) => this.handleColorChange(color, event, 'backgroundColor')} colors={this.props.colors} />
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let panel = this.state.panel == null ? 0 : this.state.panel;

        return (
            <div>
                <nav className='mdc-tab-bar' role='tablist' data-mdc-auto-init='MDCTabBar'>
                    <span role='tab' className='mdc-tab mdc-tab--active' onClick={() => { this.setState({ panel: 0 }); }}>Raised</span>
                    <span role='tab' className='mdc-tab' onClick={() => { this.setState({ panel: 1 }); }}>Flat</span>

                    <span className='mdc-tab-bar__indicator'></span>
                </nav><br />

                <div>
                    <div className='panel active' role='tabpanel' style={{ display: panel == 0 ? 'initial' : 'none' }}>                    
                        {this.renderRaisedButtonPanel()}
                    </div>

                    <div className='panel' role='tabpanel' style={{ display: panel == 1 ? 'initial' : 'none' }}>Flat</div>
                </div>
            </div>
        );
    }
}

ThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default ThemeForm;
