import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { MDCSelect } from '@material/select';
import { connect } from 'react-redux';

import { uuid } from '../../../helpers';

class Select extends React.Component {

    constructor(props) {
        super(props);

        this.state = { uuid: `select-${uuid()}` };
    }

    componentDidMount() {
        if (this.theme().classNamePrefix == 'mdc-') {
            const select = new MDCSelect(document.querySelector(`#${this.state.uuid}`));
            select.listen('MDCSelect:change', () => {
                this.props.onChange(select);
            });

            if (this.props.selectedIndex != null) {
                select.selectedIndex = this.props.selectedIndex;
            }
        }
    }

    theme() {
        return _.isEmpty(this.props.themeOverride) ? this.props.theme : this.props.themeOverride;
    }

    themedClassName(className) {
        return `${this.theme().classNamePrefix}${className}`
    }

    themedStyle() {
        let theme = this.theme();

        if (_.isEmpty(theme.styling) || _.isEmpty(theme.styling.select)) {
            theme.styling = { select: {} };
        }

        let styles = theme.styling.select;
        let customPanelTheme = _.isEmpty(this.props.customPanelTheme) ? {} : this.props.customPanelTheme;
        styles = { ...styles, ...styles.custom, ...customPanelTheme, ...customPanelTheme.custom };

        return styles;
    }

    renderNone() {
        let { label, onChange, selectedIndex, children, theme, themeOverride, dispatch, ...props } = this.props;

        return (
            <div>
                <div style={{ ...this.themedStyle() }}>
                    {label}
                </div>

                <select onChange={(event) => { this.props.onChange(event.target.value) }} {...props}>
                    {children}
                </select>
            </div>
        )
    }

    renderLabel() {
        let floatClassName = this.props.selectedIndex == null ? '' : this.themedClassName('select__label--float-above');

        return (
            <div className={`${this.themedClassName('select__label')} ${floatClassName}`} style={{ ...this.themedStyle() }}>
                {this.props.label}
            </div>
        )
    }

    renderMdc() {
        let { className, label, onChange, selectedIndex, children, theme, themeOverride, customPanelTheme, dispatch, ...props } = this.props;
        className = _.isEmpty(className) ? '' : className;

        return (
            <div className={`${this.themedClassName('select')} ${className}`} id={this.state.uuid} role='listbox' data-mdc-auto-init='MDCSelect' {...props}>
                <div className={this.themedClassName('select__surface')} tabIndex='0'>
                    {this.renderLabel()}
                    <div className={this.themedClassName('select__selected-text')} />
                    <div className={this.themedClassName('select__bottom-line')} />
                </div>

                <div className={`${this.themedClassName('menu')} ${this.themedClassName('select__menu')}`}>
                    <ul className={`${this.themedClassName('list')} ${this.themedClassName('menu__items')}`}>
                        {children}
                    </ul>
                </div>
            </div>
        );
    }

    render() {
        if (this.theme().classNamePrefix == 'mdc-') {
            return this.renderMdc();
        } else {
            return this.renderNone();
        }
    }
}

Select.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
    themeOverride: PropTypes.object,
    customPanelTheme: PropTypes.object
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(Select);
