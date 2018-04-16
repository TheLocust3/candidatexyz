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

        this.state = { draggedItem: '' };
    }

    handleDrag(name) {
        this.setState({
            draggedItem: name
        });
    }

    handleDrop(event) {
        event.stopPropagation();

        let elements = this.props.panel.elements;
        elements.push(PanelRow.elementStructure(this.props.panel.elements.length));
        elements = elements.map((element) => {
            return { ...element, height: this.props.panel.settings.height / elements.length }
        });

        this.props.onChange(elements);
    }

    updateElements(elements) {
        this.props.onChange(elements);
    }

    renderElements() {
        return (
            this.props.panel.elements.map((element, index) => {
                return (
                    <div key={uuid()}>
                        <PanelRow elements={this.props.panel.elements} settings={this.props.panel.settings} element={element} draggedItem={this.state.draggedItem} updateElements={(elements) => this.updateElements(elements)} />
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

                <div className='panel-preview' onDrop={this.handleDrop.bind(this)} onDragOver={(event) => event.preventDefault()} style={{ height: `${this.props.panel.settings.height}vh` }}>
                    {this.renderElements()}
                </div>
            </div>
        );
    }
}

PanelPreview.propTypes = {
    panel: PropTypes.object,
    onChange: PropTypes.func.isRequired
};

export default PanelPreview;
