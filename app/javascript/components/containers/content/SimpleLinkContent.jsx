import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ContentApi from '../../../api/content-api';

class LinkContent extends React.Component {

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

        let link = _.isEmpty(this.state.content) ? { text: '', url: '' } : $.parseJSON(this.state.content.content);

        return (
            <Link to={link.url} {...props}>
                {link.text}
            </Link>
        );
    }
}

LinkContent.propTypes = {
    identifier: PropTypes.string.isRequired
};

export default LinkContent;
