import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../base/Button';
import TextField from '../../base/TextField';
import TextArea from '../../base/TextArea';
import ContentApi from '../../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory, fetchAllContent } from '../../../actions/content-actions';

import FormWrapper from '../../forms/FormWrapper';

const TEXT_FIELD_CUTOFF = 100;

class TextContentEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content, oldContent: _.cloneDeep(this.props.content) };
    }

    handleContentChange(event) {
        let content = this.state.content;
        content.content.text = event.target.value;

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

    renderTextField() {
        if (this.props.content.content.text.length < TEXT_FIELD_CUTOFF) {
            return (
                <TextField label='Text Content' onChange={(event) => this.handleContentChange(event)} defaultValue={this.props.content.content.text} size={40} />
            )
        } else {
            return (
                <div>
                    <TextArea label='Text Content' onChange={(event) => this.handleContentChange(event)} defaultValue={this.props.content.content.text} rows={20} cols={100} style={{ marginBottom: '-10vh' }} /><br />
                </div>
            )
        }
    }
    
    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)}>
                {this.renderTextField()}

                <Button className='edit-content-button'>Save</Button>
            </FormWrapper>
        );
    }
}

TextContentEditor.propTypes = {
    content: PropTypes.object.isRequired
};

export default connect()(TextContentEditor);
