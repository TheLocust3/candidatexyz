import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { MDCTextField } from '@material/textfield';

import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen } from '../../../actions/content-actions';

const TEXT_FIELD_CUTOFF = 30;

class TextContentEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content };
    }
    
    componentDidMount() {
        this.setDefaultFieldValues();
    }

    componentDidUpdate() {
        this.setDefaultFieldValues();
    }

    setDefaultFieldValues() {
        let textField = new MDCTextField(document.querySelector('#text-content'));
        textField.value = this.props.content.content.text;
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

    renderTextField() {
        if (this.props.content.content.text.length < TEXT_FIELD_CUTOFF) {
            return (
                <div id='text-content' className='mdc-text-field' data-mdc-auto-init='MDCTextField'>
                    <input type='text' id='text-content' className='mdc-text-field__input' onChange={this.handleContentChange.bind(this)} size={40} />
                    <label className='mdc-text-field__label' htmlFor='text-content'>Text Content</label>
                    <div className='mdc-line-ripple'></div>
                </div>
            )
        } else {
            return (
                <div>
                    <div id='text-content' className='mdc-text-field mdc-text-field--textarea' data-mdc-auto-init='MDCTextField' style={{ marginBottom: '-10vh' }}>
                        <textarea type='text' id='text-content' className='mdc-text-field__input' onChange={this.handleContentChange.bind(this)} rows='20' cols='100' />
                        <label className='mdc-text-field__label' htmlFor='text-content'>Text Content</label>
                        <div className='mdc-line-ripple'></div>
                    </div><br />
                </div>
            )
        }
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.renderTextField()}

                <button className='mdc-button mdc-button--raised edit-content-button button'>Save</button>
            </form>
        );
    }
}

TextContentEditor.propTypes = {
    content: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default TextContentEditor;
