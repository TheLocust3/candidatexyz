import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import TextField from '../base/TextField';
import Fab from '../base/Fab';
import MDCAutoInit from '../global/MDCAutoInit';

class CustomStyler extends React.Component {

    constructor(props) {
        super(props);

        let custom = [];
        if (!_.isEmpty(this.props.custom)) {
            custom = _.map(this.props.custom, (value, key) => {
                return { name: key, value: value };
            });
        }

        this.state = { custom: custom };
    }

    handleNameChange(event, id) {
        let custom = this.state.custom;
        custom[id] = { name: event.target.value, value: custom[id].value };

        this.setState({
            custom: custom
        });
        
        let propsCustom = {};
        _.forEach(custom, (style) => {
            propsCustom[style.name] = style.value;
        });

        this.props.onChange(propsCustom);
    }

    handleValueChange(event, id) {
        let custom = this.state.custom;
        custom[id] = { name: custom[id].name, value: event.target.value };

        this.setState({
            custom: custom
        });

        let propsCustom = {};
        _.forEach(custom, (style) => {
            propsCustom[style.name] = style.value;
        });

        this.props.onChange(propsCustom);
    }

    onAddClick(event) {
        event.preventDefault();

        this.setState({
            custom: [...this.state.custom, { name: '', value: '' }]
        });
    }

    renderCustomStyles() {
        return (
            this.state.custom.map((style, index) => {
                return (
                    <div key={index}>
                        <TextField label='Name' onChange={(event) => { this.handleNameChange(event, index) }} defaultValue={style.name} style={{ marginRight: '5%' }} />
                        <TextField label='Value' onChange={(event) => { this.handleValueChange(event, index) }} defaultValue={style.value} />

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
                    <div className='mdc-typography--headline middle' style={{ display: 'inline' }}>Custom Styles</div>
                    <Fab condensed={true} onClick={this.onAddClick.bind(this)} style={{ marginLeft: '175px' }}>
                        <i className='material-icons'>add</i>
                    </Fab>
                </div>

                <div>
                    {this.renderCustomStyles()}
                </div>
            </div>
        );
    }
}

CustomStyler.propTypes = {
    custom: PropTypes.object,
    onChange: PropTypes.func.isRequired
};

export default CustomStyler;
