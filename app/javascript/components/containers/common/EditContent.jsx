import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setEditOverlayOpen, fetchAllContent } from '../../actions/content-actions';
import TextContentEditor from '../../components/content/edit/TextContentEditor';
import ImageContentEditor from '../../components/content/edit/ImageContentEditor';
import LinkContentEditor from '../../components/content/edit/LinkContentEditor';
import SlideshowContentEditor from '../../components/content/edit/SlideshowContentEditor';
import BlockContentEditor from '../../components/content/edit/BlockContentEditor';

class EditContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { top: 0, left: 0 };
    }

    // created to work around slideshow editor bug. When final element gets deleted, it gets stranded from the element tree so it has no html tag but that's cool
    hasHtmlTag(parents) {
        let found = false;
        _.forEach(parents, (parent) => {
            if ($(parent).is('html')) {
                found = true;
            }
        });

        return found;
    }

    componentDidMount() {
        $(document).click((event) => { // TODO: find a better way to do this
            let parents = $(event.target).parents();
            if (!parents.is(`#${this.props.content.identifier}`) && !parents.is('.edit-content-wrapper') && this.props.edit && this.hasHtmlTag(parents)) {
                this.props.dispatch(setEditOverlayOpen(false));
                this.props.dispatch(fetchAllContent());
            } else if (!parents.is('.edit-content-wrapper') && this.hasHtmlTag(parents)) {
                this.setState({
                    top: event.pageY + 10,
                    left: event.pageX
                });
            }
        });
    }

    componentWillUnmount() {
        $(document).off('click');
    }

    setPosition() {
        if (!this.props.editOverlayOpen) return { top: 0, left: 0 };

        return { top: this.state.top, left: this.state.left };
    }

    renderEditor() {
        if (!this.props.editOverlayOpen) return;

        switch (this.props.content.contentType) {
            case 'text':
                return <TextContentEditor content={this.props.content} />;
            case 'image':
                return <ImageContentEditor content={this.props.content} />;
            case 'link':
                return <LinkContentEditor content={this.props.content} />;
            case 'slideshow':
                return <SlideshowContentEditor content={this.props.content} />;
            case 'block':
                return <BlockContentEditor content={this.props.content} />;
            default:
                return;
        }
    }

    render() {
        let visibility = this.props.edit && this.props.editOverlayOpen ? 'visible' : 'hidden';

        return (
            <div className='edit-content-wrapper' style={{ visibility: visibility, ...this.setPosition() }}>
                {this.renderEditor()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        edit: state.content.edit,
        editOverlayOpen: state.content.editOverlayOpen,
        content: state.content.editingContent
    };
}

export default connect(mapStateToProps)(EditContent);
