import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Checkbox extends React.Component {

    themedClassName(className) {
        return `${this.props.theme.classNamePrefix}${className}`
    }

    render() {
        let { className, label, onChange, defaultChecked, theme, dispatch, ...props } = this.props;

        return (
            <div>
                <div className={`mdc-checkbox ${className}`} {...props}>
                    <input type='checkbox' className='mdc-checkbox__native-control' onChange={onChange} defaultChecked={defaultChecked} />
                    <div className='mdc-checkbox__background'>
                        <svg className='mdc-checkbox__checkmark' viewBox='0 0 24 24'>
                            <path className='mdc-checkbox__checkmark-path' fill='none' stroke='white' d='M1.73,12.91 8.1,19.28 22.79,4.59' />
                        </svg>

                        <div className='mdc-checkbox__mixedmark' />
                    </div>
                </div>

                <label className='checkbox-label'>{label}</label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultChecked: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(Checkbox);

