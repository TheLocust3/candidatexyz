import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchContent, setEditingContent } from '../../actions/content-actions';

import Header from '../../components/base/Header';
import BlockFontImage from '../../components/common/blocks/BlockFontImage';
import Block from '../../components/common/blocks/Block';

class BlockContent extends React.Component {
    
    componentWillMount() {
        if (_.isEmpty(this.findContent().identifier)) {
            this.props.dispatch(fetchContent(this.props.identifier));
        }
    }

    findContent() {
        let content = _.find(this.props.contents, { identifier: this.props.identifier });

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
        let { identifier, totalBlocks, contents, edit, editOverlayOpen, isReady, dispatch, ...props } = this.props;
        let content = this.findContent();

        if (_.isEmpty(content.content)) return null;

        return (
            <span id={identifier} onClick={this.onEditContent.bind(this)}>
                <Block color={4} totalBlocks={totalBlocks} to={content.content.link} edit={edit}>
                    <BlockFontImage totalBlocks={totalBlocks} type={content.content.icon} />
                    <br />

                    <Header type='headline4'>{content.content.text}</Header>
                </Block>
            </span>
        );
    }
}

BlockContent.propTypes = {
    identifier: PropTypes.string.isRequired,
    totalBlocks: PropTypes.number.isRequired
};

function mapStateToProps(state) {
    return {
        contents: state.content.contents,
        edit: state.content.edit,
        editOverlayOpen: state.content.editOverlayOpen, // forces content to update whenever the edit dialog closes
        isReady: state.content.isReady // same as above
    };
}

export default connect(mapStateToProps)(BlockContent);
