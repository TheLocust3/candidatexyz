import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { uuid } from '../../../../../helpers';
import { history } from '../../../../../constants';

class PanelIconButton extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `iconButton-${uuid()}`, type: 'iconButton', icon: 'fa-facebook-f', action: 'link', actionData: '', theme: {} };
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
        event.preventDefault();

        if (!this.props.show) return;

        if (this.props.element.action == 'link') {
            history.push(this.props.element.actionData);
        }
    }

    render() {
        let theme = _.isEmpty(this.props.element.theme) ? {} : this.props.element.theme;
        let color = this.state.hover ? theme.colorHover : theme.color;

        return (
            <div id={this.props.element.uuid} className='middle-center'>
                <style>{/* TODO: Wtf React. Possible patch for important tags in future react versions https://github.com/facebook/react/pull/12181 */}
                    {`
                        .tmp-icon-button {
                            color: ${color} !important
                        }
                    `}
                </style>

                <Link to={this.props.show ? this.props.element.actionData : '#'} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
                    <i className={`fab ${this.props.element.icon} tmp-icon-button`} onClick={this.onClick.bind(this)} style={{ ...theme, ...theme.custom }} />
                </Link>
            </div>
        );
    }
}

PanelIconButton.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    show: PropTypes.bool
};

export default PanelIconButton;
