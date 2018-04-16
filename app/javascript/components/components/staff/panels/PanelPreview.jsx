import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../helpers';
import ToolbarItem from './ToolbarItem';
import PanelRow from './PanelRow';

const COLORS = [];

class PanelPreview extends React.Component {

    constructor(props) {
        super(props);

        this.state = { elements: this.props.panel.elements, draggedItem: '' };
    }

    handleDrag(name) {
        this.setState({
            draggedItem: name
        });
    }

    handleDrop(event) {
        event.stopPropagation();

        let elements = this.state.elements;
        elements.push(PanelRow.elementStructure(this.props.panel.elements.length));
        this.setState({
            elements: elements
        });

        this.props.onChange(elements);
    }

    updateElements(elements) {
        this.setState({
            elements: elements
        });

        this.props.onChange(elements);
    }

    renderElements() {
        return (
            this.state.elements.map((element, index) => {
                return (
                    <div key={uuid()}>
                        <PanelRow elements={this.state.elements} element={element} draggedItem={this.state.draggedItem} totalHeight={this.props.height} updateElements={(elements) => this.updateElements(elements)} />
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
                </div>

                <div className='panel-preview' onDrop={this.handleDrop.bind(this)} onDragOver={(event) => event.preventDefault()}>
                    {this.renderElements()}
                </div>
            </div>
        );
    }
}

PanelPreview.propTypes = {
    panel: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    height: PropTypes.number
};

export default PanelPreview;
