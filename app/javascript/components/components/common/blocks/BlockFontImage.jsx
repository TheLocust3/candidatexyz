import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

let IMAGE_PROPORTION = 20.0 / 33.0; // font should be this size

export default class BlockFontImage extends React.Component {

    render() {
        let { className, type, totalBlocks, children, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        let sidePercent = (100.0 / totalBlocks - 1) * IMAGE_PROPORTION / 100.0;
        let maxSide = sidePercent * 100 * 10;
        let minSide = sidePercent * 100 * 5;

        let side = '';
        if (sidePercent * $(window).width() > maxSide) {
            side = `${maxSide}px`;
        } else if (sidePercent * $(window).width() < minSide) {
            side = `${minSide}px`;
        } else {
            side = `${sidePercent * 100}vw`;
        }

        return (
            <i className={`material-icons highlight-block-image ${className}`} aria-hidden='true' style={{ fontSize: side }}>
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
