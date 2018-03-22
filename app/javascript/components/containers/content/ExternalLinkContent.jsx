import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContentApi from '../../../api/content-api';
import { setEditingContent, setEditOverlayOpen } from '../../actions/content-actions';

class ExternalLinkContent extends React.Component {

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

    onEditContent(event) {
        if (!this.props.edit) return;

        event.stopPropagation();
        event.preventDefault();

        this.props.dispatch(setEditingContent(this.state.content));
        this.props.dispatch(setEditOverlayOpen(true));
    }

    render() {
        let { identifier, edit, dispatch, children, ...props } = this.props;
        let content = this.state.content;

        return (
            <span id={identifier}>
                <a href={content.content.url} onClick={this.onEditContent.bind(this)} {...props}>
                    {children}
                </a>
            </span>
        );
    }
}

ExternalLinkContent.propTypes = {
    identifier: PropTypes.string.isRequired,
    children: PropTypes.element
};

function mapStateToProps(state) {
    return {
        edit: state.content.edit
    };
}

export default connect(mapStateToProps)(ExternalLinkContent);
