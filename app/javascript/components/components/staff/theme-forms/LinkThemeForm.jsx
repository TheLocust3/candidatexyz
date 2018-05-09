import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../base/Link';
import LinkStyler from '../element-stylers/LinkStyler';

class LinkThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { link: _.isEmpty(this.props.theme.styling.link) ? {} : this.props.theme.styling.link };
    }

    updateTheme(theme) {
        this.setState({
            link: theme
        });

        this.props.updateTheme(theme);
    }

    render() {
        return (
            <div>
                <Link to='#' themeOverride={this.props.theme}>Sample Link</Link><br /><br />

                <LinkStyler theme={this.state.link} colors={this.props.colors} updateTheme={(theme) => this.updateTheme(theme)} />
            </div>
        );
    }
}

LinkThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default LinkThemeForm;
