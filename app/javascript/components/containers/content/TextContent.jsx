import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import ContentApi from '../../../api/content-api';

class TextContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isReady: false, content: {} };
    }

    componentWillMount() {
        this.setState({
            isReady: true
        });

        ContentApi.get(this.props.identifier).then((response) => {
            this.setState({
                content: response
            });
        });
    }

    render() {
        let { identifier, dispatch, props } =  this.props;
        
        if (!this.state.isReady) return null;

        return (
            <div {...props}>
                {this.state.content.content}
            </div>
        );
    }
}

TextContent.propTypes = {
    identifier: PropTypes.string.isRequired
};

export default TextContent;
