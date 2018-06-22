import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

let IMAGE_PROPORTION = 20.0 / 33.0; // font should be this size

export default class BlockFontImage extends React.Component {

    render() {
        let { className, type, totalBlocks, children, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        let side = 100.0 / totalBlocks - 1;

        return (
            <i className={`material-icons highlight-block-image ${className}`} aria-hidden='true' style={{ fontSize: `${side * IMAGE_PROPORTION}vw` }}>
                {type}
            </i>
        );
    }
}

BlockFontImage.propTypes = {
    className: PropTypes.string,
    totalBlocks: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
};
