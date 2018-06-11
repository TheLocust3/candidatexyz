import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import WebFont from 'webfontloader';
import PropTypes from 'prop-types';

const DEFAULT_FONTS = ['Saira Condensed:700', 'Noto Sans'];

class FontLoader extends React.Component {

    theme() {
        return _.isEmpty(this.props.themeOverride) ? this.props.theme : this.props.themeOverride;
    }

    render() {
        let fonts = [];
        _.map(this.theme().styling, (subTheme) => {
            if (!_.isEmpty(subTheme.loadedFont)) {
                fonts.push(subTheme.loadedFont);
            }

            _.map(subTheme, (subSubTheme) => { // Catch raised/flat buttons, etc
                if (!_.isEmpty(subSubTheme.loadedFont)) {
                    fonts.push(subSubTheme.loadedFont);
                }
            });
        });

        WebFont.load({
            google: {
              families: DEFAULT_FONTS
            }
        });

        if (!_.isEmpty(fonts)) {
            WebFont.load({
                google: {
                    families: fonts
                }
            });
        }
        
        return null;
    }
}

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

FontLoader.propTypes = {
    themeOverride: PropTypes.object
};

export default connect(mapStateToProps)(FontLoader);
