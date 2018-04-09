import React from 'react';
import PropTypes from 'prop-types';
import { MDCSelect } from '@material/select';

class Select extends React.Component {

    constructor(props) {
        super(props);

        this.state = { uuid: `select-${Math.round(Math.random() * 1000000)}` }; // TODO: find better way to do this
    }

    componentDidMount() {
        const select = new MDCSelect(document.querySelector(`#${this.state.uuid}`));
        select.listen('MDCSelect:change', () => {
            this.props.onChange(select);
        });
    }

    render() {
        let { className, label, onChange, children, ...props } = this.props;

        return (
            <div className={`mdc-select ${className}`} id={this.state.uuid} role='listbox' data-mdc-auto-init='MDCSelect' {...props}>
                <div className='mdc-select__surface' tabIndex='0'>
                    <div className='mdc-select__label'>{label}</div>
                    <div className='mdc-select__selected-text' />
                    <div className='mdc-select__bottom-line' />
                </div>

                <div className='mdc-menu mdc-select__menu'>
                    <ul className='mdc-list mdc-menu__items'>
                        {children}
                    </ul>
                </div>
            </div>
        );
    }
}

Select.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired
};

export default Select;
