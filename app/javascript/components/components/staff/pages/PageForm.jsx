import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import PageApi from '../../../../api/page-api';
import { history } from '../../../../constants';

import FormWrapper from '../../forms/FormWrapper';
import Button from '../../base/Button';
import TextField from '../../base/TextField';
import PanelOrderer from './PanelOrderer';

class PanelForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { errors: {} };
        if (_.isEmpty(this.props.page)) {
            this.state.page = { name: '', description: '', url: '', panels: [] };
        } else {
            this.state.page = this.props.page;
            this.state.update = true;
        }
    }

    handlePageChange(event) {
        let page = this.state.page;
        page[event.target.name] = event.target.value;

        this.setState({
            page: page
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let panels = this.state.page.panels.map((panel) => {
            return panel.id;
        });

        if (!this.state.update) {
            PageApi.create(this.state.page.name, this.state.page.description, this.state.page.url, panels).then(() => {
                history.push('/staff/pages');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        } else {
            PageApi.update(this.state.page.id, this.state.page.name, this.state.page.description, this.state.page.url, panels).then(() => {
                history.push('/staff/pages');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        }
    }

    setPanels(panels) {
        let page = this.state.page;
        page.panels = panels;

        this.setState({
            page: page
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField label='Page Name' name='name' onChange={(event) => this.handlePageChange(event)} required={true} style={{ width: '100%' }} defaultValue={this.state.page.name} /><br />
                <TextField label='Page Description' name='description' onChange={(event) => this.handlePageChange(event)} style={{ width: '100%' }} defaultValue={this.state.page.description} /><br />
                <TextField label='Page URL' name='url' onChange={(event) => this.handlePageChange(event)} required={true} style={{ width: '100%' }} defaultValue={this.state.page.url} /><br /><br />

                <PanelOrderer panels={this.state.page.panels} allPanels={this.props.allPanels} setPanels={(panels) => this.setPanels(panels)} /><br />

                <Button>Save</Button>
            </FormWrapper>
        );
    }
}

PanelForm.propTypes = {
    page: PropTypes.object,
    allPanels: PropTypes.array
};

export default PanelForm;
