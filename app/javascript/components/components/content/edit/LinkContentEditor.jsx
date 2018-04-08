import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../base/Button';
import TextField from '../../base/TextField';
import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory } from '../../../actions/content-actions';

import FormWrapper from '../../forms/FormWrapper';

class LinkContentEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content, oldContent: _.cloneDeep(this.props.content) };
    }

    handleTextChange(event) {
        let content = this.state.content;
        content.content.text = event.target.value;

        this.setState({
            content: content
        });
    }

    handleURLChange(event) {
        let content = this.state.content;
        content.content.url = event.target.value;

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
                <TextField label='Link Text' onChange={(event) => this.handleTextChange(event)} defaultValue={this.props.content.content.text} size={40} /><br />
                <TextField label='URL' onChange={(event) => this.handleURLChange(event)} defaultValue={this.props.content.content.url} size={40} />

                <Button className='edit-content-button'>Save</Button>
            </FormWrapper>
        );
    }
}

LinkContentEditor.propTypes = {
    content: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(LinkContentEditor);
