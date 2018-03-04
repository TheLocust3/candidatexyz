import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SocialMediaLinks extends React.Component {

    render() {
        return (
            <div className="icon-row">
                <a href='http://www.facebook.com' className="icon-cell"><i className='fab fa-facebook-f' style={{ fontSize: `${this.props.size}em` }} /></a>&nbsp;
                <a href='http://www.twitter.com' className="icon-cell"><i className='fab fa-twitter' style={{ fontSize: `${this.props.size}em` }} /></a>&nbsp;
                <a href='http://www.instagram.com' className="icon-cell"><i className='fab fa-instagram' style={{ fontSize: `${this.props.size}em` }} /></a>&nbsp;
                <a href='http://www.youtube.com' className="icon-cell"><i className='fab fa-youtube' style={{ fontSize: `${this.props.size}em` }} /></a>&nbsp;
            </div>
        );
    }
}

SocialMediaLinks.propTypes = {
    size: PropTypes.number.isRequired
};

