import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Slideshow from '../../components/common/Slideshow';
import { fetchContent, setEditingContent } from '../../actions/content-actions';

class SlideshowContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: { content: [] } };
    }

    componentWillMount() {
        if (_.isEmpty(this.findContent().identifier)) {
            this.props.dispatch(fetchContent(this.props.identifier));
        }
    }

    findContent() {
        let content = _.find(this.props.contents, { identifier: this.props.identifier })

        if (_.isEmpty(content)) {
            return { content: [] }
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
        let { identifier, contents, edit, dispatch, editOverlayOpen, isReady, ...props } = this.props;

        return (
            <span id={identifier} onClick={this.onEditContent.bind(this)}>
                <Slideshow images={this.findContent().content} {...props}>
                    {this.props.children}
                </Slideshow>
            </span>
        );
    }
}

SlideshowContent.propTypes = {
    identifier: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element)
};

function mapStateToProps(state) {
    return {
        contents: state.content.contents,
        edit: state.content.edit,
        editOverlayOpen: state.content.editOverlayOpen, // forces content to update whenever the edit dialog closes
        isReady: state.content.isReady // same as above
    };
}

export default connect(mapStateToProps)(SlideshowContent);
