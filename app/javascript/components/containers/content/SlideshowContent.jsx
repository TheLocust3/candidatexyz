import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import ContentApi from '../../../api/content-api';
import Slideshow from '../../components/common/Slideshow';

class SlideshowContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: { content: [] } };
    }

    componentWillMount() {
        ContentApi.get(this.props.identifier).then((response) => {
            this.setState({
                content: response
            });
        });
    }

    render() {
        let { identifier, dispatch, ...props } = this.props;
        let content = this.state.content;

        return (
            <Slideshow images={content.content}>
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
