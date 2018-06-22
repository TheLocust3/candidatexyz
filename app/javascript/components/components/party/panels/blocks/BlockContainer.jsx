import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

export default class BlockContainer extends React.Component {

    render() {
        let { className, children, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;

        return (
            <div className={`highlight-block-container ${className}`}>
                {children}
            </div>
        );
    }
}

BlockContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired
};
