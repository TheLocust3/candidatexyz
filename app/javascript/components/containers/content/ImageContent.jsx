import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchContent, setEditingContent } from '../../actions/content-actions';

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
    }

    renderImage(props) {
        let content = this.findContent();
        if (_.isEmpty(content.content.image)) {
            return (
                <div>
                    {content.content.text}
                </div>
            )
        } else {
            return <img src={content.content.image} {...props} />;
        }
    }

    render() {
        let { identifier, contents, edit, dispatch, editOverlayOpen, isReady, ...props } = this.props;

        return (
            <span id={identifier} onClick={this.onEditContent.bind(this)}>
                {this.renderImage(props)}
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
        edit: state.content.edit,
        editOverlayOpen: state.content.editOverlayOpen, // forces content to update whenever the edit dialog closes
        isReady: state.content.isReady // same as above
    };
}

export default connect(mapStateToProps)(ImageContent);
