import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ExternalLinkContent from '../../containers/content/ExternalLinkContent';

export default class SocialMediaLinks extends React.Component {

    render() {
        return (
            <div className="icon-row">
                <ExternalLinkContent identifier='facebook' className='icon-cell'><i className='fab fa-facebook-f' style={{ fontSize: `${this.props.size}em` }} /></ExternalLinkContent>&nbsp;
                <ExternalLinkContent identifier='twitter' className='icon-cell'><i className='fab fa-twitter' style={{ fontSize: `${this.props.size}em` }} /></ExternalLinkContent>&nbsp;
                <ExternalLinkContent identifier='instagram' className='icon-cell'><i className='fab fa-instagram' style={{ fontSize: `${this.props.size}em` }} /></ExternalLinkContent>&nbsp;
                <ExternalLinkContent identifier='youtube' className='icon-cell'><i className='fab fa-youtube' style={{ fontSize: `${this.props.size}em` }} /></ExternalLinkContent>&nbsp;
            </div>
        );
    }
}

SocialMediaLinks.propTypes = {
    size: PropTypes.number.isRequired
};

