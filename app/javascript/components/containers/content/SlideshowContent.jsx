import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import ContentApi from '../../../api/content-api';
import Slideshow from '../../components/common/Slideshow';

class SlideshowContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isReady: false, content: {} };
    }

    componentWillMount() {
        ContentApi.get(this.props.identifier).then((response) => {
            this.setState({
                isReady: true,
                content: response
            });
        });
    }

    prepareImages(content) {
        return $.parseJSON(content);
    }

    render() {
        let { identifier, dispatch, ...props } = this.props;
        
        if (!this.state.isReady) return null;

        return (
            <Slideshow images={this.prepareImages(this.state.content.content)}>
                {this.props.children}
            </Slideshow>
        );
    }
}

SlideshowContent.propTypes = {
    identifier: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element)
};

export default SlideshowContent;
