import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import mdcAutoInit from '@material/auto-init';
import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { MDCCheckbox } from '@material/checkbox';
import { MDCSelect } from '@material/select';
import { MDCTabBar } from '@material/tabs';

// TODO: Find better way to do this
class MDCAutoInit extends React.Component {

    autoInit() {
        if (this.props.theme.name != 'Material') return;

        mdcAutoInit.deregisterAll();

        mdcAutoInit.register('MDCRipple', MDCRipple);
        mdcAutoInit.register('MDCTextField', MDCTextField);
        mdcAutoInit.register('MDCCheckbox', MDCCheckbox);
        mdcAutoInit.register('MDCSelect', MDCSelect);
        mdcAutoInit.register('MDCTabBar', MDCTabBar);
        mdcAutoInit(document, () => { /* no messages */ });
    }

    componentDidMount() {
        this.autoInit();
    }

    render() {
        this.autoInit();
        
        return null;
    }
}

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(MDCAutoInit);
