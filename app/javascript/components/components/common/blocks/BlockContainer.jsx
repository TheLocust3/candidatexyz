import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

export default class BlockContainer extends React.Component {

    render() {
        let { className, totalBlocks, children, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;

        const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { totalBlocks: totalBlocks }));

        return (
            <div className={`highlight-block-container ${className}`} {...props}>
                {childrenWithProps}
            </div>
        );
    }
}

BlockContainer.propTypes = {
    className: PropTypes.string,
    totalBlocks: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired
};
