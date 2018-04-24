import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import TextArea from '../../../base/TextArea';

class PanelTextArea extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `textArea-${uuid()}`, type: 'textArea', text: 'TextArea', rows: 3, cols: 18, theme: {} };
    }

    render() {
        return (
            <span id={this.props.element.uuid}>
                <TextArea label={this.props.element.text} onChange={(event) => event.preventDefault()} rows={Number(this.props.element.rows)} cols={Number(this.props.element.cols)} customPanelTheme={this.props.element.theme}/>
            </span>
        );
    }
}

PanelTextArea.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    show: PropTypes.bool
};

export default PanelTextArea;
