import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyler from '../element-stylers/ButtonStyler';
import ColorPicker from '../../global/ColorPicker';
import FontPicker from '../../global/FontPicker';
import CustomStyler from '../../global/CustomStyler';
import Button from '../../base/Button';
import TextField from '../../base/TextField';

class ThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { button: _.isEmpty(this.props.theme.styling.button) ? { raised: { fontSize: '24px' }, flat: { fontSize: '24px' } } : this.props.theme.styling.button };

        this.state.button.raised = _.isEmpty(this.state.button.raised) ? {} : this.state.button.raised;
        this.state.button.flat = _.isEmpty(this.state.button.flat) ? {} : this.state.button.flat;
    }

    updateTheme(theme, type) {
        let button = this.state.button;
        button[type] = theme;

        this.setState({
            button: button
        });

        this.props.updateTheme(button);
    }

    renderRaisedButtonPanel() {
        return (
            <div>
                <center>
                    <Button onClick={(event) => event.preventDefault()} themeOverride={this.props.theme}>Sample Raised Button</Button>
                </center><br /><br />

                <ButtonStyler theme={this.state.button.raised} updateTheme={(theme) => this.updateTheme(theme, 'raised')} />
            </div>
        )
    }

    renderFlatButtonPanel() {
        let displayPicker = this.state.colorPickerOpen ? 'visible' : 'hidden';

        return (
            <div>
                <center>
                    <Button flat={true} onClick={(event) => event.preventDefault()} themeOverride={this.props.theme}>Sample Flat Button</Button>
                </center><br /><br />

                <ButtonStyler theme={this.state.button.flat} updateTheme={(theme) => this.updateTheme(theme, 'flat')} />
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

                    <div className='panel' role='tabpanel' style={{ display: panel == 1 ? 'initial' : 'none' }}>
                        {this.renderFlatButtonPanel()}
                    </div>
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
