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
            <div id={this.props.element.uuid} className='middle-center'>
                <img src={this.props.element.url} style={{ ...this.props.element.theme, ...this.props.element.theme.custom }} />
            </div>
        );
    }
}

PanelImage.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    show: PropTypes.bool
};

export default PanelImage;
