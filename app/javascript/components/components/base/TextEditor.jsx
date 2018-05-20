import React from 'react';
import PropTypes from 'prop-types';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';

import ImageApi from '../../../api/image-api';
import Header from '../base/Header';

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

    uploadImage(file) {
        return ImageApi.create(null, file).then((image) => {
            return { data: { link: `/images/${image.identifier}` } }
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
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
        let { label, onChange, small, ...props } = this.props;

        let smallClassName = small ? 'editor-editor-small' : '';

        return (
            <div className='editor'>
                <Header type='headline5'>{label}</Header><br />

                <div onClick={this.onEditorClick.bind(this)}>
                    <Editor wrapperClassName='editor-wrapper' editorClassName={`editor-editor ${smallClassName}`} toolbarClassName='editor-toolbar'
                        editorState={this.state.editorState} onEditorStateChange={(editorState) => this.handleChange(editorState)}
                        toolbar={{ options: [ 'inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'image', 'history' ], image: { uploadEnabled: true, uploadCallback: (image) => { return this.uploadImage(image) } },
                        colorPicker: { colors: [ 'rgba(255,255,255,0)', 'rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
                        'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
                        'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                        'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
                        'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
                        'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)' ] } }}
                        editorRef={(ref) => this.setEditorReference(ref)} {...props} />
                </div>
            </div>
        );
    }
}

TextEditor.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    content: PropTypes.string,
    small: PropTypes.bool
};

export default TextEditor;
