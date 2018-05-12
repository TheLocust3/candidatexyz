import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../base/Header';
import LinkStyler from '../element-stylers/LinkStyler';

class HeaderThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { header: _.isEmpty(this.props.theme.styling.header) ? {} : this.props.theme.styling.header };

        this.state.header.headline1 = _.isEmpty(this.state.header.headline1) ? {} : this.state.header.headline1;
        this.state.header.headline2 = _.isEmpty(this.state.header.headline2) ? {} : this.state.header.headline2;
        this.state.header.headline3 = _.isEmpty(this.state.header.headline3) ? {} : this.state.header.headline3;
        this.state.header.headline4 = _.isEmpty(this.state.header.headline4) ? {} : this.state.header.headline4;
        this.state.header.headline5 = _.isEmpty(this.state.header.headline5) ? {} : this.state.header.headline5;
        this.state.header.headline6 = _.isEmpty(this.state.header.headline6) ? {} : this.state.header.headline6;
    }

    updateTheme(theme, type) {
        let button = this.state.button;
        button[type] = theme;

        this.setState({
            button: button
        });

        this.props.updateTheme(button);
    }

    renderHeader(type) {
        return (
            <div>
                <center>
                    <Header type={type} themeOverride={this.props.theme}>Sample {_.capitalize(type)}</Header>
                </center><br /><br />

                
            </div>
        )
    }

    render() {
        let panel = this.state.panel == null ? 0 : this.state.panel;

        return (
            <div>
                <div className='mdc-tab-bar-header'>
                    <nav className='mdc-tab-bar' role='tablist' data-mdc-auto-init='MDCTabBar'>
                        <span role='tab' className='mdc-tab mdc-tab--active' onClick={() => { this.setState({ panel: 0 }); }}>Headline1</span>
                        <span role='tab' className='mdc-tab' onClick={() => { this.setState({ panel: 1 }); }}>Headline2</span>
                        <span role='tab' className='mdc-tab' onClick={() => { this.setState({ panel: 2 }); }}>Headline3</span>
                        <span role='tab' className='mdc-tab' onClick={() => { this.setState({ panel: 3 }); }}>Headline4</span>
                        <span role='tab' className='mdc-tab' onClick={() => { this.setState({ panel: 4 }); }}>Headline5</span>
                        <span role='tab' className='mdc-tab' onClick={() => { this.setState({ panel: 5 }); }}>Headline6</span>
                        <span role='tab' className='mdc-tab' onClick={() => { this.setState({ panel: 6 }); }}>Subtitle1</span>
                        <span role='tab' className='mdc-tab' onClick={() => { this.setState({ panel: 7 }); }}>Subtitle2</span>
                        <span role='tab' className='mdc-tab' onClick={() => { this.setState({ panel: 8 }); }}>Body1</span>
                        <span role='tab' className='mdc-tab' onClick={() => { this.setState({ panel: 9 }); }}>Body2</span>

                        <span className='mdc-tab-bar__indicator'></span>
                    </nav>

                    <br />
                </div>
                <br />

                <div>
                    <div className='panel active' role='tabpanel' style={{ display: panel == 0 ? 'initial' : 'none' }}>
                        {this.renderHeader('headline1')}
                    </div>

                    <div className='panel' role='tabpanel' style={{ display: panel == 1 ? 'initial' : 'none' }}>
                        {this.renderHeader('headline2')}
                    </div>

                    <div className='panel' role='tabpanel' style={{ display: panel == 2 ? 'initial' : 'none' }}>
                        {this.renderHeader('headline3')}
                    </div>

                    <div className='panel' role='tabpanel' style={{ display: panel == 3 ? 'initial' : 'none' }}>
                        {this.renderHeader('headline4')}
                    </div>

                    <div className='panel' role='tabpanel' style={{ display: panel == 4 ? 'initial' : 'none' }}>
                        {this.renderHeader('headline5')}
                    </div>

                    <div className='panel' role='tabpanel' style={{ display: panel == 5 ? 'initial' : 'none' }}>
                        {this.renderHeader('headline6')}
                    </div>
                    
                    <div className='panel' role='tabpanel' style={{ display: panel == 6 ? 'initial' : 'none' }}>
                        {this.renderHeader('subtitle1')}
                    </div>

                    <div className='panel' role='tabpanel' style={{ display: panel == 7 ? 'initial' : 'none' }}>
                        {this.renderHeader('subtitle2')}
                    </div>

                    <div className='panel' role='tabpanel' style={{ display: panel == 8 ? 'initial' : 'none' }}>
                        {this.renderHeader('body1')}
                    </div>

                    <div className='panel' role='tabpanel' style={{ display: panel == 9 ? 'initial' : 'none' }}>
                        {this.renderHeader('body2')}
                    </div>
                </div>
            </div>
        );
    }
}

HeaderThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default HeaderThemeForm;
