import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import TextArea from '../../../base/TextArea';

class PanelTextArea extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `textArea-${uuid()}`, type: 'textArea', text: 'TextArea' };
    }

    render() {
        return (
            <div id={this.props.element.uuid} className='middle-center'>
                <TextArea label={this.props.element.text} onChange={(event) => event.preventDefault()} />
            </div>
        );
    }
}

PanelTextArea.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object
};

export default PanelTextArea;
