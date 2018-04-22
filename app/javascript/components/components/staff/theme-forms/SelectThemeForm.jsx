import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import SelectStyler from '../element-stylers/SelectStyler';
import Select from '../../base/Select';
import SelectItem from '../../base/SelectItem';

class FabThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { select: _.isEmpty(this.props.theme.styling.select) ? { color: this.props.colors[0] } : this.props.theme.styling.select };
    }

    updateTheme(theme) {
        this.setState({
            fab: theme
        });

        this.props.updateTheme(theme);
    }

    render() {
        return (
            <div>
                <Select label='Sample Select' onChange={() => {}} themeOverride={this.props.theme}>
                    <SelectItem themeOverride={this.props.theme}>
                        A sample item
                    </SelectItem>

                    <SelectItem themeOverride={this.props.theme}>
                        A second sample item
                    </SelectItem>
                </Select>
                <br /><br />

                <SelectStyler theme={this.state.select} colors={this.props.colors} updateTheme={(theme) => this.updateTheme(theme)} />
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
