import React from 'react';
import PropTypes from 'prop-types';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

class TextEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { editorState: EditorState.createEmpty() };
    }

    setDomEditorRef(ref) {
        this.domEditor = ref;
    }

    onEditorClick(event) {
        this.domEditor.focus();
    }

    onInlineClick(event) {
        this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, event.target.id));
    }

    onBlockClick(event) {
        this.handleChange(RichUtils.toggleBlockType(this.state.editorState, event.target.id));
    }

    handleChange(editorState) {
        this.setState({
            editorState: editorState
        });

        this.props.onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }
    
    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          this.handleChange(newState);
          return 'handled';
        }

        return 'not-handled';
    }

    render() {
        let { header, className, onChange, children, ...props } = this.props;

        return (
            <div>
                <div className='editor'>
                    <div className='mdc-typography--headline'>{header}</div>

                    <div className='editor-buttons'>
                        <span className='editor-button' id='header-one' onClick={this.onBlockClick.bind(this)}>H1</span>
                        <span className='editor-button' id='header-two' onClick={this.onBlockClick.bind(this)}>H2</span>
                        <span className='editor-button' id='header-three' onClick={this.onBlockClick.bind(this)}>H3</span>
                        <span className='editor-button' id='header-four' onClick={this.onBlockClick.bind(this)}>H4</span>
                        <span className='editor-button' id='header-five' onClick={this.onBlockClick.bind(this)}>H5</span>
                        <span className='editor-button' id='header-six' onClick={this.onBlockClick.bind(this)}>H6</span>

                        <span className='editor-button' id='BOLD' onClick={this.onInlineClick.bind(this)}>Bold</span>
                        <span className='editor-button' id='ITALIC' onClick={this.onInlineClick.bind(this)}>Italic</span>
                        <span className='editor-button' id='UNDERLINE' onClick={this.onInlineClick.bind(this)}>Underline</span>
                        <span className='editor-button' id='CODE' onClick={this.onInlineClick.bind(this)}>Monospace</span>

                        <span className='editor-button' id='blockquote' onClick={this.onBlockClick.bind(this)}>Blockquote</span>
                        <span className='editor-button' id='unordered-list-item' onClick={this.onBlockClick.bind(this)}>UL</span>
                        <span className='editor-button' id='ordered-list-item' onClick={this.onBlockClick.bind(this)}>OL</span>
                    </div>

                    <div className='editor-editor' onClick={this.onEditorClick.bind(this)}>
                        <Editor editorState={this.state.editorState} onChange={(editorState) => this.handleChange(editorState)} handleKeyCommand={this.handleKeyCommand.bind(this)} ref={(ref) => this.setDomEditorRef(ref)} {...props} />
                    </div>
                </div>
            </div>
        );
    }
}

TextEditor.propTypes = {
    header: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default TextEditor;
