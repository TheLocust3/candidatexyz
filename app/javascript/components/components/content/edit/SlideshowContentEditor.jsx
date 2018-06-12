import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../base/Button';
import TextField from '../../base/TextField';
import Fab from '../../base/Fab';
import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory } from '../../../actions/content-actions';

import FormWrapper from '../../forms/FormWrapper';
import ImageUploader from '../../global/ImageUploader';

class SlideshowContentEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content, oldContent: _.cloneDeep(this.props.content) };
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

    onDeleteClick(event, index) {
        event.preventDefault();

        let content = this.state.content;
        content.content.splice(index, 1);

        this.setState({
            content: content
        });
    }

    onUpload(url) {   
        let content = this.state.content;
        content.content.push(url);

        this.setState({
            content: content
        });
    }

    renderSlideshowFields() {
        return (
            this.state.content.content.map((image, index) => {
                return (
                    <div key={index} className='relative'>
                        <TextField name={`image${index + 1}`} label={`Image ${index + 1}`} onChange={(event) => this.handleContentChange(event)} defaultValue={image} style={{ width: '80%' }} />

                        <Fab condensed={true} className='red-button middle' onClick={(event) => this.onDeleteClick(event, index)} style={{ position: 'absolute', right: 0, marginTop: '3%' }}>
                            <i className='material-icons'>delete</i>
                        </Fab>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} className='slideshow-content-editor'>
                {this.renderSlideshowFields()}

                <Button className='edit-content-button'>Save</Button>
                <ImageUploader className='edit-content-button' handleUpload={(url) => this.onUpload(url)} style={{ marginRight: '3%' }} />
            </FormWrapper>
        );
    }
}

SlideshowContentEditor.propTypes = {
    content: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(SlideshowContentEditor);
