import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDCTextField } from '@material/textfield';

import Button from '../../base/Button';
import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory } from '../../../actions/content-actions';

import FormWrapper from '../../forms/FormWrapper';

class ImageContentEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content, oldContent: _.cloneDeep(this.props.content) };
    }

    componentDidMount() {
        let textField = new MDCTextField(document.querySelector('#image-content'));
        textField.value = this.props.content.content.image;
    }

    componentDidUpdate() {
        let textField = new MDCTextField(document.querySelector('#image-content'));
        textField.value = this.props.content.content.image;
    }

    handleContentChange(event) {
        let content = this.state.content;
        content.content.image = event.target.value;

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
                <div id='image-content' className='mdc-text-field' data-mdc-auto-init='MDCTextField'>
                    <input type='text' id='image-content' className='mdc-text-field__input' onChange={this.handleContentChange.bind(this)} size={40} />
                    <label className='mdc-text-field__label' htmlFor='image-content'>Image Url</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <Button className='edit-content-button'>Save</Button>
            </FormWrapper>
        );
    }
}

ImageContentEditor.propTypes = {
    content: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(ImageContentEditor);
