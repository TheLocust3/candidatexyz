import _ from 'lodash'
import React from 'react';
import PropTypes from 'prop-types';

export default class FormWrapper extends React.Component {

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleSubmit(event);
    }

    renderErrors() {
        if (_.isEmpty(this.props.errors)) return;

        return (
            <div className='mdc-typography--caption'>
                {_.map(this.props.errors, (errorMessage, errorName) => {
                    return (
                        <div key={errorName}>
                            {_.capitalize(errorName)} {_.join(errorMessage, ', ')}
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        let { handleSubmit, errors, children, ...props } = this.props;

        return (
            <form onSubmit={this.handleSubmit.bind(this)} {...props}>
                {this.renderErrors()}

                {children}
            </form>
        );
    }
}

FormWrapper.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};
