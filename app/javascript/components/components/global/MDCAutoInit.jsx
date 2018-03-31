import React from 'react';
import mdcAutoInit from '@material/auto-init';
import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { MDCCheckbox } from '@material/checkbox';
import { MDCSelect } from '@material/select';

// TODO: Find better way to do this
export default class MDCAutoInit extends React.Component {

    autoInit() {
        mdcAutoInit.deregisterAll();

        mdcAutoInit.register('MDCRipple', MDCRipple);
        mdcAutoInit.register('MDCTextField', MDCTextField);
        mdcAutoInit.register('MDCCheckbox', MDCCheckbox);
        mdcAutoInit.register('MDCSelect', MDCSelect);
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