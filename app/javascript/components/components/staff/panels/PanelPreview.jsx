import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../helpers';
import ToolbarItem from './ToolbarItem';
import PanelSidebar from './PanelSidebar';
import PanelRow from './PanelRow';

class PanelPreview extends React.Component {

    constructor(props) {
        super(props);

        this.state = { draggedItem: '', selectedElement: this.props.panel.elements[0] };
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

    onClick(element) {
        this.setState({
            selectedElement: element
        });
    }

    updateElements(elements) {
        this.props.onChange(elements);
    }

    renderElements() {
        return (
            this.props.panel.elements.map((element, index) => {
                let selected = this.state.selectedElement == element ? true : false;
                return (
                    <div key={uuid()}>
                        <PanelRow elements={this.props.panel.elements} settings={this.props.panel.settings} element={element} draggedItem={this.state.draggedItem} updateElements={(elements) => this.updateElements(elements)} onClick={(element) => this.onClick(element)} selected={selected} />
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
                </div>

                <div className='panel-preview-editor'>
                    <div className='panel-preview' onDrop={this.handleDrop.bind(this)} onDragOver={(event) => event.preventDefault()} style={{ height: `${this.props.panel.settings.height}vh` }}>
                        {this.renderElements()}
                    </div>

                    <PanelSidebar elements={this.props.panel.elements} element={this.state.selectedElement} updateElements={(elements) => this.updateElements(elements)} recalculateHeight={this.props.recalculateHeight} />
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
