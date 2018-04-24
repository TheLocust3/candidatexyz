import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { uuid } from '../../../../../helpers';
import { history } from '../../../../../constants';

class PanelIconButton extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `iconButton-${uuid()}`, type: 'iconButton', icon: 'fa-facebook-f', url: '', theme: {} };
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

    renderLink() {
        let theme = _.isEmpty(this.props.element.theme) ? {} : this.props.element.theme;
        
        if (_.startsWith(this.props.element.url, 'http://') || _.startsWith(this.props.element.url, 'https://') || _.startsWith(this.props.element.url, 'www.')) {
            return (
                <a href={this.props.show ? this.props.element.url : '#'} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
                    <i className={`fab ${this.props.element.icon} tmp-icon-button-${this.props.element.uuid}`} style={{ ...theme, ...theme.custom }} />
                </a>
            )
        } else {
            return (
                <Link to={this.props.show ? this.props.element.url : '#'} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
                    <i className={`fab ${this.props.element.icon} tmp-icon-button-${this.props.element.uuid}`} style={{ ...theme, ...theme.custom }} />
                </Link>
            )
        }
    }

    render() {
        let theme = _.isEmpty(this.props.element.theme) ? {} : this.props.element.theme;
        let color = this.state.hover ? theme.colorHover : theme.color;

        return (
            <span id={this.props.element.uuid}>
                <style>{/* TODO: Wtf React. Possible patch for important tags in future react versions https://github.com/facebook/react/pull/12181 */}
                    {`
                        .tmp-icon-button-${this.props.element.uuid} {
                            color: ${color} !important
                        }
                    `}
                </style>

                {this.renderLink()}
            </span>
        );
    }
}

PanelIconButton.propTypes = {
    parentElement: PropTypes.object,
    element: PropTypes.object,
    show: PropTypes.bool
};

export default PanelIconButton;
