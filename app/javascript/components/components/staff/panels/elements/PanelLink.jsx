import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { uuid } from '../../../../../helpers';
import { history } from '../../../../../constants';

class PanelLink extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `link-${uuid()}`, type: 'link', text: 'Link', url: '', theme: {} };
    }

    onClick(event) {
        if (!this.props.show) return;

        history.push(this.props.element.actionData);
    }

    render() {
        let theme = _.isEmpty(this.props.element.theme) ? {} : this.props.element.theme;

        return (
            <div id={this.props.element.uuid} className='middle-center'>
                <Link className='link' to={this.props.element.url} style={{ ...theme, ...theme.custom }}>
                    {this.props.element.text}
                </Link>
            </div>
        );
    }
}

PanelLink.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    show: PropTypes.bool
};

export default PanelLink;
