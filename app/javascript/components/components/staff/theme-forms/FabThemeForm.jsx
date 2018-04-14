import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import Button from '../../base/Button';
import Fab from '../../base/Fab';

class FabThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { fab: _.isEmpty(this.props.theme.styling.fab) ? { backgroundColor: this.props.colors[0] } : this.props.theme.styling.fab };
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
        let fab = { ...this.state.fab, [style]: color.hex };
        this.setState({
            fab: fab
        });

        this.props.updateTheme(fab);
    }

    onColorPickerOpen(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: !this.state[event.target.name]
        });
    }

    render() {
        let displayColorPicker = this.state.colorPickerOpen ? 'visible' : 'hidden';

        return (
            <div>
                <Fab className='material-icons' onClick={(event) => { event.preventDefault(); }} themeOverride={this.props.theme}>
                    <span className='mdc-fab__icon'>
                        settings
                    </span>
                </Fab><br /><br />

                <div className='color-picker-wrapper'>
                    <Button condensed={true} name='colorPickerOpen' onClick={this.onColorPickerOpen.bind(this)}>Pick Color</Button><br /><br />
                    
                    <div className='color-picker' style={{ visibility: displayColorPicker }}>
                        <BlockPicker color={this.state.fab.backgroundColor} onChangeComplete={(color, event) => this.handleColorChange(color, event, 'backgroundColor')} colors={this.props.colors} />
                    </div>
                </div>
            </div>
        );
    }
}

FabThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default FabThemeForm;
