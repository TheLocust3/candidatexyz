import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import ContentApi from '../../../api/content-api';
import { setEditOverlayOpen } from '../../actions/content-actions';

class LinkContentEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content };
    }
    
    componentDidMount() {
        let textField = new mdc.textField.MDCTextField(document.querySelector('#link-text-content'));
        textField.value = this.props.content.content.text;

        textField = new mdc.textField.MDCTextField(document.querySelector('#link-url-content'));
        textField.value = this.props.content.content.url;
    }

    componentDidUpdate() {
        let textField = new mdc.textField.MDCTextField(document.querySelector('#link-text-content'));
        textField.value = this.props.content.content.text;

        textField = new mdc.textField.MDCTextField(document.querySelector('#link-url-content'));
        textField.value = this.props.content.content.url;
    }

    handleTextChange(event) {
        let content = this.state.content;
        content.content.text = event.target.value;

        this.setState({
            content: content
        });
    }

    handleURLChange(event) {
        let content = this.state.content;
        content.content.url = event.target.value;

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

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div id='link-text-content' className='mdc-text-field' data-mdc-auto-init='MDCTextField'>
                    <input type='text' id='link-text-content' className='mdc-text-field__input' onChange={this.handleTextChange.bind(this)} size={40} />
                    <label className='mdc-text-field__label' htmlFor='link-text-content'>Link Text</label>
                    <div className='mdc-line-ripple'></div>
                </div><br />

                <div id='link-url-content' className='mdc-text-field' data-mdc-auto-init='MDCTextField'>
                    <input type='text' id='link-url-content' className='mdc-text-field__input' onChange={this.handleURLChange.bind(this)} size={40} />
                    <label className='mdc-text-field__label' htmlFor='link-url-content'>URL</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <button className='mdc-button mdc-button--raised edit-content-button button'>Save</button>
            </form>
        );
    }
}

LinkContentEditor.propTypes = {
    content: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default LinkContentEditor;
