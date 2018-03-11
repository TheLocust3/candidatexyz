import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import ContentApi from '../../../api/content-api';

class ImageContent extends React.Component {

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

    render() {
        let { identifier, dispatch, ...props } = this.props;
        
        if (!this.state.isReady) return null;

        return (
            <img src={this.state.content.content} {...props} />
        );
    }
}

ImageContent.propTypes = {
    identifier: PropTypes.string.isRequired
};

export default ImageContent;
