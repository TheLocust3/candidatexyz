import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../base/Button';
import TextField from '../../base/TextField';
import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory } from '../../../actions/content-actions';

import FormWrapper from '../../forms/FormWrapper';

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

    renderSlideshowFields() {
        return (
            this.props.content.content.map((image, index) => {
                return (
                    <div key={index}>
                        <TextField name={`image${index + 1}`} label={`Image ${index + 1}`} onChange={(event) => this.handleContentChange(event)} defaultValue={image} size={40} /><br />
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)}>
                {this.renderSlideshowFields()}

                <Button className='edit-content-button'>Save</Button>
            </FormWrapper>
        );
    }
}

SlideshowContentEditor.propTypes = {
    content: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(SlideshowContentEditor);
