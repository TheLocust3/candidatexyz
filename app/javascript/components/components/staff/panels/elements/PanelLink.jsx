import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import { history } from '../../../../../constants';
import Link from '../../../base/Link';

class PanelLink extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `link-${uuid()}`, type: 'link', text: 'Link', url: '', theme: {} };
    }

    constructor(props) {
        super(props);

        this.state = { hover: false };
    }

    toggleHover() {
        this.setState({
            hover: !this.state.hover
        });
    }

    onClick(event) {
        if (!this.props.show) return;

        history.push(this.props.element.actionData);
    }

    render() {
        let theme = _.isEmpty(this.props.element.theme) ? {} : this.props.element.theme;
        let color = this.state.hover ? theme.colorHover : theme.color;

        return (
            <span id={this.props.element.uuid}>
                <Link className='link' to={this.props.show ? this.props.element.url : '#'} style={{ ...theme, ...theme.custom, color: color }} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
                    {this.props.element.text}
                </Link>
            </span>
        );
    }
}

PanelLink.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    show: PropTypes.bool
};

export default PanelLink;
