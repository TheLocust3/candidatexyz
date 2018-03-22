import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';

import { setEditOverlayOpen } from '../../actions/content-actions';
import TextContentEditor from '../../components/content/TextContentEditor';
import ImageContentEditor from '../../components/content/ImageContentEditor';

class EditContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: { content: {} } };
    }

    componentDidMount() {
        $(document).click((event) => { // TODO: find a better way to do this
            let target = event.target;

            if (!$(event.target).parents().is(`#${this.props.content.identifier}`) && !$(event.target).parents().is('.editContentWrapper') && this.props.edit) {
                this.props.dispatch(setEditOverlayOpen(false));
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
        }
    }

    render() {
        let visibility = this.props.edit && this.props.editOverlayOpen ? 'visible' : 'hidden';

        let element = $(`#${this.props.content.identifier}`);
        if (element.offset() != null) {
            let position = element.offset();
            $('.editContentWrapper').css({ top: position.top + element.height(), left: position.left + element.width() / 2 });
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
