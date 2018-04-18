import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { dashesToCamel, camelToDashes } from '../../../helpers';
import TextField from '../base/TextField';
import Fab from '../base/Fab';
import MDCAutoInit from '../global/MDCAutoInit';

class CustomStyler extends React.Component {

    constructor(props) {
        super(props);

        let custom = [];
        if (!_.isEmpty(this.props.custom)) {
            custom = _.map(this.props.custom, (value, key) => {
                return { name: camelToDashes(key), value: value };
            });
        }

        this.state = { custom: custom };
    }

    customToProps(custom) {
        let propsCustom = {};
        _.forEach(custom, (style) => {
            propsCustom[dashesToCamel(style.name)] = style.value;
        });

        return propsCustom;
    }

    handleNameChange(event, id) {
        let custom = this.state.custom;
        custom[id] = { name: event.target.value, value: custom[id].value };

        this.setState({
            custom: custom
        });

        this.props.onChange(this.customToProps(custom));
    }

    handleValueChange(event, id) {
        let custom = this.state.custom;
        custom[id] = { name: custom[id].name, value: event.target.value };

        this.setState({
            custom: custom
        });

        this.props.onChange(this.customToProps(custom));
    }

    onAddClick(event) {
        event.preventDefault();

        this.setState({
            custom: [...this.state.custom, { name: '', value: '' }]
        });
    }

    onDeleteClick(event, index) {
        event.preventDefault();

        let custom = this.state.custom;
        custom.splice(index, 1);
        
        this.setState({
            custom: custom
        });

        this.props.onChange(this.customToProps(custom));
    }

    renderCustomStyles() {
        return (
            this.state.custom.map((style, index) => {
                return (
                    <div key={index}>
                        <TextField label='Name' dense={this.props.small} onChange={(event) => { this.handleNameChange(event, index) }} defaultValue={style.name} style={{ width: '35%', marginRight: '5%' }} />
                        <TextField label='Value' dense={this.props.small} onChange={(event) => { this.handleValueChange(event, index) }} defaultValue={style.value} style={{ width: '35%' }} />

                        <Fab condensed={true} className='red-button' onClick={(event) => this.onDeleteClick(event, index)} style={{ marginLeft: '3%' }}>
                            <i className='material-icons'>delete</i>
                        </Fab>

                        <MDCAutoInit />
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div>
                <div style={{ position: 'relative' }}>
                    <div className={`${this.props.small ? 'mdc-typography--subtitle1' : 'mdc-typography--headline'} middle`} style={{ display: 'inline' }}>Custom Styles</div>
                    <Fab condensed={true} onClick={this.onAddClick.bind(this)} style={{ marginLeft: '175px' }}>
                        <i className='material-icons'>add</i>
                    </Fab>
                </div>
                <i className={this.props.small ? 'mdc-typography--body1' : ''}>For advanced users only</i>

                <div>
                    {this.renderCustomStyles()}
                </div>
            </div>
        );
    }
}

CustomStyler.propTypes = {
    custom: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    small: PropTypes.bool
};

export default CustomStyler;
