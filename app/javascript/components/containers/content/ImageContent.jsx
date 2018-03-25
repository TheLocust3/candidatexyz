import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchContent, setEditingContent, setEditOverlayOpen } from '../../actions/content-actions';

class ImageContent extends React.Component {

    componentWillMount() {
        if (_.isEmpty(this.findContent().identifier)) {
            this.props.dispatch(fetchContent(this.props.identifier));
        }
    }

    findContent() {
        let content = _.find(this.props.contents, { identifier: this.props.identifier })

        if (_.isEmpty(content)) {
            return { content: {  } }
        }

        return content;
    }

    onEditContent(event) {
        if (!this.props.edit) return;

        event.stopPropagation();
        event.preventDefault();

        this.props.dispatch(setEditingContent(this.findContent()));
        this.props.dispatch(setEditOverlayOpen(true));
    }

    render() {
        let { identifier, contents, edit, dispatch, ...props } = this.props;

        return (
            <span id={identifier} onClick={this.onEditContent.bind(this)}>
                <img src={this.findContent().content.image} {...props} />
            </span>
        );
    }
}

ImageContent.propTypes = {
    identifier: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        contents: state.content.contents,
        edit: state.content.edit
    };
}

export default connect(mapStateToProps)(ImageContent);
