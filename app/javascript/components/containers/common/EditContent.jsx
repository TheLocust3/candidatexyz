import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';

import { setEditOverlayOpen } from '../../actions/content-actions';
import TextContentEditor from '../../components/content/edit/TextContentEditor';
import ImageContentEditor from '../../components/content/edit/ImageContentEditor';
import LinkContentEditor from '../../components/content/edit/LinkContentEditor';
import SlideshowContentEditor from '../../components/content/edit/SlideshowContentEditor';

class EditContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: { content: {} }, top: 0, left: 0 };
    }

    componentDidMount() {
        $(document).click((event) => { // TODO: find a better way to do this
            let target = event.target;

            if (!$(event.target).parents().is(`#${this.props.content.identifier}`) && !$(event.target).parents().is('.editContentWrapper') && this.props.edit) {
                this.props.dispatch(setEditOverlayOpen(false));
            } else {
                this.setState({
                    top: event.pageY + 5,
                    left: event.pageX
                })
            }
        });
    }

    componentWillUnmount() {
        $(document).off('click');
    }

    renderEditor() {
        switch (this.props.content.content_type) {
            case 'text':
                return <TextContentEditor content={this.props.content} dispatch={this.props.dispatch} />
            case 'image':
                return <ImageContentEditor content={this.props.content} dispatch={this.props.dispatch} />
            case 'link':
                return <LinkContentEditor content={this.props.content} dispatch={this.props.dispatch} />
            case 'slideshow':
                return <SlideshowContentEditor content={this.props.content} dispatch={this.props.dispatch} />
            default:
                return;
        }
    }

    render() {
        let visibility = this.props.edit && this.props.editOverlayOpen ? 'visible' : 'hidden';

        let element = $(`#${this.props.content.identifier}`);
        if (element.offset() != null) {
            $('.editContentWrapper').css({ top: this.state.top, left: this.state.left });
        }

        return (
            <div className='editContentWrapper' style={{ visibility: visibility }}>
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
