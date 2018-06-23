import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../base/Button';
import TextField from '../../base/TextField';
import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory, fetchAllContent } from '../../../actions/content-actions';

import FormWrapper from '../../forms/FormWrapper';

class BlockContentEditor extends React.Component {

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
        ContentApi.update(this.props.content.identifier, this.state.content.content).then(() => {
            this.props.dispatch(fetchAllContent());
        });

        this.props.dispatch(setEditOverlayOpen(false));
    }
    
    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)}>
                <TextField label='Text' name='text' onChange={(event) => this.handleContentChange(event)} defaultValue={this.props.content.content.text} size={40} /><br />

                <TextField label='Icon' name='icon' onChange={(event) => this.handleContentChange(event)} defaultValue={this.props.content.content.icon} size={40} /><br />

                <TextField label='Link' name='link' onChange={(event) => this.handleContentChange(event)} defaultValue={this.props.content.content.link} size={40} />

                <Button className='edit-content-button'>Save</Button>
            </FormWrapper>
        );
    }
}

BlockContentEditor.propTypes = {
    content: PropTypes.object.isRequired
};

export default connect()(BlockContentEditor);
