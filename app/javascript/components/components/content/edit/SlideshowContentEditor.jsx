import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDCTextField } from '@material/textfield';

import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory } from '../../../actions/content-actions';

import FormWrapper from '../../forms/FormWrapper';

class SlideshowContentEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content, oldContent: _.cloneDeep(this.props.content) };
    }

    setTextFields() {
        this.props.content.content.map((image, index) => {
            let textField = new MDCTextField(document.querySelector(`#image-${index}-content`));
            textField.value = image;
        });
    }

    componentDidMount() {
        this.setTextFields();
    }

    componentDidUpdate() {
        this.setTextFields();
    }

    handleContentChange(event) {
        let content = this.state.content;
        content.content[event.target.name] = event.target.value;

        this.setState({
            content: content
        });
    }

    handleSubmit(event) {
        this.props.dispatch(pushContentHistory(this.state.oldContent));
        ContentApi.update(this.props.content.identifier, this.state.content.content);

        this.props.dispatch(setEditOverlayOpen(false));
    }

    renderSlideshowFields() {
        return (
            this.props.content.content.map((image, index) => {
                return (
                    <div key={index}>
                        <div id={`image-${index}-content`} className='mdc-text-field' data-mdc-auto-init='MDCTextField'>
                            <input type='text' id={`image-${index}-content`} name={index} className='mdc-text-field__input' onChange={this.handleContentChange.bind(this)} size={40} />
                            <label className='mdc-text-field__label' htmlFor={`image-${index}-content`}>Image {index + 1}</label>
                            <div className='mdc-line-ripple'></div>
                        </div><br />
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)}>
                {this.renderSlideshowFields()}

                <button className='mdc-button mdc-button--raised edit-content-button button'>Save</button>
            </FormWrapper>
        );
    }
}

SlideshowContentEditor.propTypes = {
    content: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(SlideshowContentEditor);
