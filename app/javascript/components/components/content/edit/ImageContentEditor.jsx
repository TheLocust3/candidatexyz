import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../base/Button';
import TextField from '../../base/TextField';
import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory } from '../../../actions/content-actions';

import FormWrapper from '../../forms/FormWrapper';
import ImageUploader from '../../global/ImageUploader';

class ImageContentEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content, oldContent: _.cloneDeep(this.props.content) };
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

    onUpload(url) {   
        let content = this.state.content;
        content.content.image = url;

        this.setState({
            content: content
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)}>
                <TextField label='Image URL' onChange={(event) => this.handleContentChange(event)} defaultValue={this.props.content.content.image} size={40} style={{ width: '100%' }} />

                <Button className='edit-content-button'>Save</Button>
                <ImageUploader className='edit-content-button' handleUpload={(url) => this.onUpload(url)} style={{ marginRight: '3%' }} />
            </FormWrapper>
        );
    }
}

ImageContentEditor.propTypes = {
    content: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(ImageContentEditor);
