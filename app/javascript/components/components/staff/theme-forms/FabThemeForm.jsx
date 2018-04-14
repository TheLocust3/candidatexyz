import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import ColorPicker from '../../global/ColorPicker';
import Fab from '../../base/Fab';

class FabThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { fab: _.isEmpty(this.props.theme.styling.fab) ? { backgroundColor: this.props.colors[0] } : this.props.theme.styling.fab };
    }

    handleColorChange(color, style) {
        let fab = { ...this.state.fab, [style]: color.hex };
        this.setState({
            fab: fab
        });

        this.props.updateTheme(fab);
    }

    render() {
        return (
            <div>
                <Fab className='material-icons' onClick={(event) => { event.preventDefault(); }} themeOverride={this.props.theme}>
                    <span className='mdc-fab__icon'>
                        settings
                    </span>
                </Fab><br /><br />

                <ColorPicker label='Pick Color' color={this.state.fab.backgroundColor} colors={this.props.colors} onChange={(color) => this.handleColorChange(color, 'backgroundColor')}  />

                <ColorPicker label='Pick Icon Color' color={this.state.fab.color} colors={this.props.colors} onChange={(color) => this.handleColorChange(color, 'color')}  />
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
