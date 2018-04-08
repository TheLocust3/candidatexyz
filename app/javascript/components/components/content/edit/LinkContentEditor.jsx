import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDCTextField } from '@material/textfield';

import Button from '../../base/Button';
import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory } from '../../../actions/content-actions';

import FormWrapper from '../../forms/FormWrapper';

class LinkContentEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content, oldContent: _.cloneDeep(this.props.content) };
    }
    
    componentDidMount() {
        this.setDefaultFieldValues();
    }

    componentDidUpdate() {
        this.setDefaultFieldValues();
    }

    setDefaultFieldValues() {
        let textField = new MDCTextField(document.querySelector('#link-text-content'));
        textField.value = this.props.content.content.text;

        textField = new MDCTextField(document.querySelector('#link-url-content'));
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
        this.props.dispatch(pushContentHistory(this.state.oldContent));
        ContentApi.update(this.props.content.identifier, this.state.content.content);

        this.props.dispatch(setEditOverlayOpen(false));
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)}>
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

                <Button className='edit-content-button'>Save</Button>
            </FormWrapper>
        );
    }
}

LinkContentEditor.propTypes = {
    content: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(LinkContentEditor);
