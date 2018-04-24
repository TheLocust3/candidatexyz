import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';

class PanelImage extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `image-${uuid()}`, type: 'image', url: 'url', theme: { height: '100px' } };
    }

    render() {
        return (
            <span id={this.props.element.uuid}>
                <img src={this.props.element.url} style={{ ...this.props.element.theme, ...this.props.element.theme.custom }} />
            </span>
        );
    }
}

PanelImage.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    show: PropTypes.bool
};

export default PanelImage;
