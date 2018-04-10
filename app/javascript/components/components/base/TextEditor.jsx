import React from 'react';
import PropTypes from 'prop-types';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';

class TextEditor extends React.Component {

    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.content)) {
            this.state = { editorState: EditorState.createEmpty() };
        } else {
            let blocksFromHtml = htmlToDraft(props.content);
            let { contentBlocks, entityMap } = blocksFromHtml;
            let contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            let editorState = EditorState.createWithContent(contentState);

            this.state = { editorState: editorState };
        }
    }

    setEditorReference(ref) {
        this.editorReference = ref;
    }

    onEditorClick() {
        this.editorReference.focus();
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

                <div onClick={this.onEditorClick.bind(this)}>
                    <Editor wrapperClassName='editor-wrapper' editorClassName='editor-editor' toolbarClassName='editor-toolbar'
                        editorState={this.state.editorState} onEditorStateChange={(editorState) => this.handleChange(editorState)}
                        toolbar={{ options: [ 'inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link', 'image', 'history' ] }}
                        editorRef={(ref) => this.setEditorReference(ref)} {...props} />
                </div>
            </div>
        );
    }
}

TextEditor.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    content: PropTypes.string
};

export default TextEditor;
