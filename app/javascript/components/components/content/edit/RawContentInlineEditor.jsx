import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDCTextField } from '@material/textfield';

import Button from '../../base/Button';
import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory } from '../../../actions/content-actions';

import FormWrapper from '../../forms/FormWrapper';

class RawContentInlineEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content, oldContent: _.cloneDeep(this.props.content) };
    }
    
    componentDidMount() {
        let textField = new MDCTextField(document.querySelector(`#${this.props.content.identifier}`));
        textField.value = this.props.content.content;
    }

    componentDidUpdate() {
        let textField = new MDCTextField(document.querySelector(`#${this.props.content.identifier}`));
        textField.value = this.props.content.content;
    }

    handleContentChange(event) {
        let content = this.state.content;
        content.content = event.target.value;

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
                <div id={this.props.content.identifier} className='mdc-text-field' data-mdc-auto-init='MDCTextField'>
                    <input type='text' id={this.props.content.identifier} className='mdc-text-field__input' onChange={this.handleContentChange.bind(this)} size={100} />
                    <label className='mdc-text-field__label' htmlFor={this.props.content.identifier}>{this.props.content.identifier}</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <Button className='edit-raw-content-button'>Save</Button>
            </FormWrapper>
        );
    }
}

RawContentInlineEditor.propTypes = {
    content: PropTypes.object.isRequired
};

export default connect()(RawContentInlineEditor);
