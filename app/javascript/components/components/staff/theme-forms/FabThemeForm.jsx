import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import FabStyler from '../element-stylers/FabStyler';
import Fab from '../../base/Fab';

class FabThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { fab: _.isEmpty(this.props.theme.styling.fab) ? { backgroundColor: this.props.colors[0] } : this.props.theme.styling.fab };
    }

    updateTheme(theme) {
        let fab = this.state.fab;
        fab = theme;

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

                <FabStyler theme={this.state.fab} colors={this.props.colors} updateTheme={(theme) => this.updateTheme(theme)} />
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
