import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import ContentApi from '../../../api/content-api';

class TextContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: {} };
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

        return (
            <span dangerouslySetInnerHTML={{__html: this.state.content.content }} {...props} />
        );
    }
}

TextContent.propTypes = {
    identifier: PropTypes.string.isRequired
};

export default TextContent;
