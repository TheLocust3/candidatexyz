import React from 'react';
import PropTypes from 'prop-types';

import Button from '../base/Button';
import TextEditor from '../base/TextEditor';
import Header from '../base/Header';
import MDCAutoInit from '../global/MDCAutoInit';
import ContentApi from '../../../api/content-api';
import { history } from '../../../constants';

import FormWrapper from '../forms/FormWrapper';
import ImageUploader from '../global/ImageUploader';

export default class MailTemplateForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { headerImage: this.props.headerImage, footerBlurb: this.props.footerBlurb };
    }

    handleUpload(url) {
        this.setState({
            headerImage: url
        });
    }

    handleEditorChange(footerBlurb) {
        this.setState({
            footerBlurb: footerBlurb
        });
    }

    handleSubmit(event) {
        let headerImage = this.state.headerImage == this.props.headerImage ? this.props.headerImage : `${window.location.origin}${this.state.headerImage}`;
        ContentApi.update('emailHeaderImage', { image: headerImage }).then(() => {
            ContentApi.update('emailFooterBlurb', { text: this.state.footerBlurb }).then(() => {
                history.push('/staff/mail');
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <Header type='headline5'>Header Image</Header>
                <img className='image-thumbnail' src={this.state.headerImage} />
                <ImageUploader handleUpload={(url) => this.handleUpload(url)} />

                <TextEditor label='Footer' onChange={(text) => { this.handleEditorChange(text) }} content={this.props.footerBlurb} />

                <Button style={{ float: 'right' }}>Save</Button>

                <MDCAutoInit />
            </FormWrapper>
        );
    }
}

MailTemplateForm.propTypes = {
    headerImage: PropTypes.string.isRequired,
    footerBlurb: PropTypes.string.isRequired
};
