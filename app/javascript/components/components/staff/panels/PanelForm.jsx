import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import PanelApi from '../../../../api/panel-api';
import { history } from '../../../../constants';

import FormWrapper from '../../forms/FormWrapper';
import Button from '../../base/Button';
import TextField from '../../base/TextField';

import PanelPreview from './PanelPreview';
import PanelRow from './PanelRow';

class PanelForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { errors: {} };
        if (_.isEmpty(this.props.panel)) {
            this.state.panel = { name: '', description: '', elements: [ PanelRow.elementStructure(0) ], settings: { } };
        } else {
            this.state.panel = this.props.panel;
            this.state.panel.elements = _.range(0, Object.keys(this.props.panel.elements).length).map((index) => { // ruby saves json arrays as { '0' => ..., '1' => ... }, convert it to []
                return this.state.panel.elements[index]
            });
            this.state.update = true;
        }

        this.state.panel.settings.height = this.totalHeight();
    }

    componentWillMount() {
        if (_.isEmpty(this.state.panel.elements[0].height)) {
            this.handleHeightChange({ target: { value: this.state.panel.settings.height } });
        }
    }

    handleHeightChange(event) {
        let panel = this.state.panel;
        panel.settings.height = Number(event.target.value);

        panel.elements = panel.elements.map((element) => {
            return { ...element, height: panel.settings.height / panel.elements.length }
        });

        this.setState({
            panel: panel
        });
    }

    handlePanelChange(event) {
        let panel = this.state.panel;
        panel[event.target.name] = event.target.value;

        this.setState({
            panel: panel
        });
    }

    handleElementsChange(elements) {
        let panel = this.state.panel
        panel.elements = elements;
        this.setState({
            panel: panel
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.update) {
            PanelApi.create(this.state.panel.name, this.state.panel.description, this.state.panel.elements, this.state.panel.settings).then((theme) => {
                history.push('/staff/panels');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        } else {
            PanelApi.update(this.state.panel.id, this.state.panel.name, this.state.panel.description, this.state.panel.elements, this.state.panel.settings).then((theme) => {
                history.push('/staff/panels');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        }
    }

    totalHeight() {
        let height = 0;
        this.state.panel.elements.map((element) => {
            height += Number(element.height);
        });

        return height == 0 || _.isNaN(height) ? 25 : height;
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField label='Panel Name' name='name' onChange={(event) => this.handlePanelChange(event)} required={true} style={{ width: '100%' }} defaultValue={this.state.panel.name} /><br />
                <TextField label='Panel Description' name='description' onChange={(event) => this.handlePanelChange(event)} style={{ width: '100%' }} defaultValue={this.state.panel.description} /><br /><br />

                <TextField type='number' label='Panel Height (%)' onChange={(event) => this.handleHeightChange(event)} defaultValue={String(this.state.panel.settings.height)} /><br /><br />

                <PanelPreview panel={this.state.panel} onChange={(elements) => this.handleElementsChange(elements)} /><br />

                <Button>Save</Button>
            </FormWrapper>
        );
    }
}

PanelForm.propTypes = {
    panel: PropTypes.object
};

export default PanelForm;
