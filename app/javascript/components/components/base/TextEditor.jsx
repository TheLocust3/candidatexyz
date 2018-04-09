import React from 'react';
import PropTypes from 'prop-types';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';

class TextEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { editorState: EditorState.createEmpty() };
    }

    handleChange(editorState) {
        this.setState({
            editorState: editorState
        });

        this.props.onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }

    render() {
        let { label, onChange, ...props } = this.props;

        return (
            <div className='editor'>
                <div className='mdc-typography--headline'>{label}</div><br />

                <Editor wrapperClassName='editor-wrapper' editorClassName='editor-editor' toolbarClassName='editor-toolbar' editorState={this.state.editorState} onEditorStateChange={(editorState) => this.handleChange(editorState)} toolbar={{ options: [ 'inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link', 'image', 'history' ] }} {...props}  />
            </div>
        );
    }
}

TextEditor.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default TextEditor;
