import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../base/Button';
import TextField from '../base/TextField';
import TextEditor from '../base/TextEditor';
import { history } from '../../../constants';
import PostApi from '../../../api/post-api';

import FormWrapper from './FormWrapper';
import ImageUploader from '../global/ImageUploader';

class PostForm extends React.Component {
    
    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.post)) {
            this.state = { post: { postType: this.props.postType, url: this.props.url }, errors: {} };
        } else {
            this.state = { post: this.props.post, errors: {} };
        }
    }

    handleChange(event) {
        let post = this.state.post;
        post[event.target.name] = event.target.value;

        this.setState({
            post: post
        });
    }

    handleEditorChange(body) {
        let post = this.state.post;
        post.body = body;

        this.setState({
            post: post
        });
    }

    handleSubmit(event) {
        if (_.isEmpty(this.props.post)) {
            PostApi.create(this.state.post.postType, this.state.post.url, this.state.post.title, this.state.post.body, this.state.post.image).then(() => {
                history.push('/');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        } else {
            PostApi.update(this.state.post.postType, this.state.post.url, this.state.post.title, this.state.post.body, this.state.post.image).then(() => {
                history.push('/');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        }
    }

    onDeleteClick() {
        PostApi.destroy(this.state.post.postType, this.state.post.url).then(() => {
            history.push('/');
        });
    }

    onUpload(url) {   
        let post = this.state.post;
        post.image = url;

        this.setState({
            post: post
        });
    }

    renderUrl() {
        if (this.state.post.protected) return;

        return <TextField label='URL' name='url' onChange={(event) => this.handleChange(event)} defaultValue={this.state.post.url} style={{ width: '100%' }} />;
    }

    renderImage() {
        if (this.state.post.protected) return;

        return (
            <div>
                <ImageUploader handleUpload={(url) => this.onUpload(url)} styleOuter={{ display: 'inline-block' }} />

                <i style={{ marginLeft: '3%' }}>{this.state.post.image}</i>
            </div>
        );
    }

    renderDeleteButton() {
        if (_.isEmpty(this.props.post)) return;

        return (
            <Button style={{ float: 'right', marginRight: '3%' }} onClick={this.onDeleteClick.bind(this)}>Delete</Button>
        );
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors} className='content content-bottom content-15'>
                <TextField label='Title' name='title' onChange={(event) => this.handleChange(event)} defaultValue={this.state.post.title} style={{ width: '100%' }} /><br />

                {this.renderUrl()}<br /><br />

                {this.renderImage()}<br />

                <TextEditor label='Body' content={this.state.post.body} onChange={(text) => { this.handleEditorChange(text) }} />

                <Button style={{ float: 'right' }}>Save</Button>
                {this.renderDeleteButton()}
            </FormWrapper>
        );
    }
}

PostForm.propTypes = {
    post: PropTypes.object,
    postType: PropTypes.string
};

export default PostForm;
