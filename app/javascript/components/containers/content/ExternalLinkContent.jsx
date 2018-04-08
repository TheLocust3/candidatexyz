import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchContent, setEditingContent } from '../../actions/content-actions';

class ExternalLinkContent extends React.Component {

    componentWillMount() {
        if (_.isEmpty(this.findContent().identifier)) {
            this.props.dispatch(fetchContent(this.props.identifier));
        }
    }

    findContent() {
        let content = _.find(this.props.contents, { identifier: this.props.identifier })

        if (_.isEmpty(content)) {
            return { content: {} }
        }

        return content;
    }

    onEditContent(event) {
        if (!this.props.edit) return;

        event.stopPropagation();
        event.preventDefault();

        this.props.dispatch(setEditingContent(this.findContent()));
    }

    render() {
        let { identifier, edit, dispatch, children, ...props } = this.props;

        return (
            <span id={identifier}>
                <a href={this.findContent().content.url} onClick={this.onEditContent.bind(this)} {...props}>
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
        contents: state.content.contents,
        edit: state.content.edit
    };
}

export default connect(mapStateToProps)(ExternalLinkContent);
