import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ContentApi from '../../../api/content-api';

class LinkContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: { content: { url: '' } } };
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

        if (!_.isEmpty(content) && content.content_type != 'link') return null;

        return (
            <Link to={content.content.url} {...props}>
                {content.content.text}
            </Link>
        );
    }
}

LinkContent.propTypes = {
    identifier: PropTypes.string.isRequired
};

export default LinkContent;
