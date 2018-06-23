import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { history } from '../../../../constants';

export default class Block extends React.Component {

    onClick(event) {
        if (this.props.edit) return;

        history.push(this.props.to);
    }

    render() {
        let { className, totalBlocks, color, to, children, edit, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        let side = `${100.0 / totalBlocks - 1}%`;

        return (
            <div className={`highlight-block highlight-block--color${color} relative ${className}`} style={{ width: side, paddingBottom: side }} onClick={this.onClick.bind(this)} {...props}>
                <div className='highlight-block-inner middle'>
                    {children}
                </div>
            </div>
        );
    }
}

Block.propTypes = {
    className: PropTypes.string,
    totalBlocks: PropTypes.number.isRequired,
    color: PropTypes.number.isRequired,
    to: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    edit: PropTypes.bool
};
