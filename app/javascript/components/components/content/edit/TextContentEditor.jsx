import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDCTextField } from '@material/textfield';

import Button from '../../base/Button';
import TextField from '../../base/TextField';
import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory } from '../../../actions/content-actions';

import FormWrapper from '../../forms/FormWrapper';

const TEXT_FIELD_CUTOFF = 30;

class TextContentEditor extends React.Component {

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
        if (this.props.content.content.text.length > TEXT_FIELD_CUTOFF) {
            let textField = new MDCTextField(document.querySelector('#text-content'));
            textField.value = this.props.content.content.text;
        }
    }

    handleContentChange(event) {
        let content = this.state.content;
        content.content.text = event.target.value;

        this.setState({
            content: content
        });
    }

    handleSubmit(event) {
        this.props.dispatch(pushContentHistory(this.state.oldContent));
        ContentApi.update(this.props.content.identifier, this.state.content.content);

        this.props.dispatch(setEditOverlayOpen(false));
    }

    renderTextField() {
        if (this.props.content.content.text.length < TEXT_FIELD_CUTOFF) {
            return (
                <TextField label='Text Content' onChange={(event) => this.handleContentChange(event)} defaultValue={this.props.content.content.text} size={40} />
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
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)}>
                {this.renderTextField()}

                <Button className='edit-content-button'>Save</Button>
            </FormWrapper>
        );
    }
}

TextContentEditor.propTypes = {
    content: PropTypes.object.isRequired
};

export default connect()(TextContentEditor);
