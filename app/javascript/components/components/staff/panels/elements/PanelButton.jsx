import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import { history } from '../../../../../constants';
import Button from '../../../base/Button';

class PanelButton extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `button-${uuid()}`, type: 'button', text: 'Button', action: 'link', actionData: '', theme: {} };
    }

    onClick(event) {
        event.preventDefault();

        if (!this.props.show) return;

        if (this.props.element.action == 'link') {
            history.push(this.props.element.actionData);
        }
    }

    render() {
        return (
            <span id={this.props.element.uuid}>
                <Button onClick={this.onClick.bind(this)} customPanelTheme={this.props.element.theme}>
                    {this.props.element.text}
                </Button>
            </span>
        );
    }
}

PanelButton.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    show: PropTypes.bool
};

export default PanelButton;
