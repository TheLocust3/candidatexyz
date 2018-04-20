import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Select from '../../base/Select';
import SelectItem from '../../base/SelectItem';
import Fab from '../../base/Fab';

class PanelOrderer extends React.Component {

    constructor(props) {
        super(props);

        this.state = { panelAdd: {} };
    }

    handlePanelAddChange(select) {
        let panelAdd = _.find(this.props.allPanels, { name: select.value });

        this.setState({
            panelAdd: panelAdd
        });
    }

    onPanelAdd(event) {
        event.preventDefault();

        if (_.isEmpty(this.state.panelAdd)) return;

        let panels = this.props.panels;
        panels.push(this.state.panelAdd);

        this.props.setPanels(panels);
    }

    onDeleteClick(event) {
        event.preventDefault();

        let panels = this.props.panels;
        panels.splice(event.target.name, 1);

        this.props.setPanels(panels);
    }

    renderPanelList() {
        if (_.isEmpty(this.props.panels)) return;

        return (
            this.props.panels.map((panel, index) => {
                return (
                    <li key={index} className='mdc-list-item selectable-row'>
                        <span className='mdc-list-item__text'>
                            {panel.name}

                            <span className='mdc-list-item__secondary-text'>
                                {panel.description}
                            </span>
                        </span>

                        <span className='list-meta-items'>
                            <span className='mdc-list-item__meta material-icons list-meta-item' aria-label='Delete'>
                                <a href='#' className='unstyled-link delete-icon' name={index} onClick={this.onDeleteClick.bind(this)}>
                                    delete
                                </a>
                            </span>
                        </span>
                    </li>
                );
            })
        );
    }

    renderPanelSelect() {
        return (
            <Select label='Panel' onChange={(select) => this.handlePanelAddChange(select)} style={{ width: '15%' }}>
                {this.props.allPanels.map((panel) => {
                    return (
                        <SelectItem key={panel.id}>
                            {panel.name}
                        </SelectItem>
                    );
                })}
            </Select>
        );
    }

    render() {
        return (
            <div>
                <div className='mdc-typography--headline'>Panels</div><br />

                <div className='relative'>
                    {this.renderPanelSelect()}

                    <Fab className='material-icons' condensed={true} onClick={this.onPanelAdd.bind(this)} style={{ marginLeft: '10px' }}>
                        <span className='mdc-fab__icon'>
                            add
                        </span>
                    </Fab>
                </div>
                <br />

                {this.renderPanelList()}
            </div>
        );
    }
}

PanelOrderer.propTypes = {
    panels: PropTypes.array,
    allPanels: PropTypes.array,
    setPanels: PropTypes.func
};

export default PanelOrderer;
