import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';

import ContentApi from '../../../api/content-api';
import { setEditingContent, setEditOverlayOpen } from '../../actions/content-actions';

class EditContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: { content: {} } };
    }

    componentWillReceiveProps(nextProps) {
        let textField = new mdc.textField.MDCTextField(document.querySelector('#text-content'));
        textField.value = nextProps.content.content.text;
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
    
    handleContentChange(event) {
        let content = this.state.content;
        content.content.text = event.target.value;

        this.setState({
            content: content
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        ContentApi.update(this.props.content.identifier, this.state.content.content).then(() => {
            location.reload();
        });

        this.props.dispatch(setEditOverlayOpen(false));
    }

    renderInner() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div id='text-content' className='mdc-text-field' data-mdc-auto-init='MDCTextField'>
                    <input type='text' id='text-content' className='mdc-text-field__input' onChange={this.handleContentChange.bind(this)} size={40} />
                    <label className='mdc-text-field__label' htmlFor='text-content'>Text Content</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <button className='mdc-button mdc-button--raised edit-content-button button'>Save</button>
            </form>
        )
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
                {this.renderInner()}
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
