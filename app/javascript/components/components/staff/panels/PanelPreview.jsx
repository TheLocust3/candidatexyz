import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../helpers';
import ToolbarItem from './ToolbarItem';
import PanelSidebar from './sidebar/PanelSidebar';
import PanelRow from './elements/PanelRow';

class PanelPreview extends React.Component {

    constructor(props) {
        super(props);

        this.state = { draggedItem: '', selectedElements: [this.props.panel.elements[0]] };
    }

    handleDrag(name) {
        this.setState({
            draggedItem: name
        });
    }

    handleDrop(event) {
        let elements = this.props.panel.elements;
        if (this.state.draggedItem == 'row') {
            elements.push(PanelRow.elementStructure(this.props.panel.elements.length));
            elements = elements.map((element) => {
                return { ...element, height: this.props.panel.settings.height / elements.length }
            });
        }

        this.props.onChange(elements);
    }

    onClick(elements) {
        this.setState({
            selectedElements: elements
        });
    }

    updateElements(elements) {
        this.props.onChange(elements);
    }

    renderElements() {
        return (
            this.props.panel.elements.map((element, index) => {
                return (
                    <div key={uuid()}>
                        <PanelRow elements={this.props.panel.elements} settings={this.props.panel.settings} element={element} draggedItem={this.state.draggedItem} updateElements={(elements) => this.updateElements(elements)} onClick={(element) => this.onClick(element)} selectedElements={this.state.selectedElements} />
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div>
                <div className='panel-preview-toolbar'>
                    <ToolbarItem name='row' label='Row' icon='view_agenda' onDrag={(name) => this.handleDrag(name)} />
                    <ToolbarItem name='cell' label='Cell' icon='view_module' onDrag={(name) => this.handleDrag(name)} />
                    <ToolbarItem name='button' label='Button' icon='check_box_outline_blank' onDrag={(name) => this.handleDrag(name)} />
                    <ToolbarItem name='fab' label='Fab' icon='check_box_outline_blank' onDrag={(name) => this.handleDrag(name)} />
                    <ToolbarItem name='checkbox' label='Checkbox' icon='check_box' onDrag={(name) => this.handleDrag(name)} />
                    <ToolbarItem name='textField' label='Text Field' icon='text_format' onDrag={(name) => this.handleDrag(name)} />
                    <ToolbarItem name='textArea' label='Text Area' icon='text_format' onDrag={(name) => this.handleDrag(name)} />
                    <ToolbarItem name='select' label='Select' icon='format_list_bulleted' onDrag={(name) => this.handleDrag(name)} />
                    <ToolbarItem name='text' label='Text' icon='text_fields' onDrag={(name) => this.handleDrag(name)} />
                    <ToolbarItem name='image' label='Image' icon='image' onDrag={(name) => this.handleDrag(name)} />
                </div>

                <div className='panel-preview-editor'>
                    <div className='panel-preview' onDrop={this.handleDrop.bind(this)} onDragOver={(event) => event.preventDefault()} style={{ height: `${Number(this.props.panel.settings.height) + 1}vh` }}>
                        {this.renderElements()}
                    </div>

                    <PanelSidebar elements={this.props.panel.elements} selectedElements={this.state.selectedElements} updateElements={(elements) => this.updateElements(elements)} recalculateHeight={this.props.recalculateHeight} />
                </div>
            </div>
        );
    }
}

PanelPreview.propTypes = {
    panel: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    recalculateHeight: PropTypes.func
};

export default PanelPreview;
