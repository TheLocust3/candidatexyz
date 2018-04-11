import _ from 'lodash'
import React from 'react';

import Button from '../base/Button';
import TextField from '../base/TextField';
import { history } from '../../../constants';
import ImageApi from '../../../api/image-api';

import FormWrapper from '../forms/FormWrapper';

export default class MessageForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { identifier: '', image: {}, errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleImageUpload(event) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])

        reader.onload = (file) => {
            this.setState({
                image: file.target.result.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, '')
            });
        };
    }

    handleSubmit(event) {
        ImageApi.create(this.state.identifier, this.state.image).then(() => {
            history.push('/staff/images');
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors} className='content-10'>
                <TextField label='Image Identifier' name='identifier' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} /><br /><br />

                <input type='file' name='image' id='submit-image' accept="image/*" onChange={this.handleImageUpload.bind(this)} /><br />

                <Button className='sign-up-form-button'>Upload</Button>
            </FormWrapper>
        );
    }
}
