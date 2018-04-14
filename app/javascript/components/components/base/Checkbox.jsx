import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Checkbox extends React.Component {

    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.themeOverride)) {
            this.state = { theme: this.props.theme };
        } else {
            this.state = { theme: this.props.themeOverride };
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEmpty(nextProps.themeOverride)) {
            this.setState({
                theme: nextProps.themeOverride
            });
        }
    }

    themedClassName(className) {
        return `${this.props.theme.classNamePrefix}${className}`
    }

    themedStyle() {
        if (_.isEmpty(this.state.theme.styling)) return {};

        if (_.isEmpty(this.state.theme.styling.checkbox)) {
            return { backgroundColor: this.state.theme.styling.global.backgroundColor };
        } else {
            return this.state.theme.styling.checkbox;
        }
    }

    render() {
        let { className, label, onChange, defaultChecked, theme, dispatch, themeOverride, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        let themedStyle = this.themedStyle();
        
        return (
            <div>
                <div className={`mdc-checkbox ${className}`} {...props}>
                    <input type='checkbox' className='mdc-checkbox__native-control' onChange={onChange} defaultChecked={defaultChecked} />
                    <div className='mdc-checkbox__background' style={{ borderColor: themedStyle.borderColor }}>
                        <svg className='mdc-checkbox__checkmark' viewBox='0 0 24 24' style={{ backgroundColor: themedStyle.backgroundColor }}>
                            <path className='mdc-checkbox__checkmark-path' fill='none' stroke='white' d='M1.73,12.91 8.1,19.28 22.79,4.59' />
                        </svg>

                        <div className='mdc-checkbox__mixedmark' />
                    </div>
                </div>

                <label className='checkbox-label' >{label}</label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultChecked: PropTypes.bool,
    themeOverride: PropTypes.object
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(Checkbox);

