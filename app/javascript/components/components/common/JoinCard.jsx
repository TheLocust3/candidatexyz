import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import SocialMediaLinks from './SocialMediaLinks';

export default class JoinCard extends React.Component {

    render() {
        let top = _.isEmpty(this.props.top) ? '40%' : `${this.props.top}%`;
        let right = _.isEmpty(this.props.right) ? '3%' : `${this.props.right}%`;
        let width = _.isEmpty(this.props.width) ? '35%' : `${this.props.width}%`;

        return (
            <div style={{ position: 'absolute', top: top, right: right, width: width }}>
                <div className='mdc-card'>
                    <div className='mdc-card__media join-card'>
                        <div className='mdc-card__media-content join-media'>
                            <div className='mdc-typography--headline card-title'><b>Join CandidateXYZ</b></div>

                            <p className='join-description'>
                                You should totally sign up
                            </p>

                            <div className='mdc-text-field mdc-text-field--dense' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                                <input type='text' id='join-email' className='mdc-text-field__input' />
                                <label className='mdc-text-field__label' htmlFor='join-email'>Zip Code</label>
                                <div className='mdc-line-ripple'></div>
                            </div><br />

                            <div className='mdc-text-field mdc-text-field--dense' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                                <input type='email' id='join-email' className='mdc-text-field__input' />
                                <label className='mdc-text-field__label' htmlFor='join-email'>Email</label>
                                <div className='mdc-line-ripple'></div>
                            </div>
                        </div>
                    </div>

                    <div className='mdc-card__actions' dir='rtl'>
                        <button className='mdc-button mdc-card__action mdc-card__action--button mdc-button--raised button' data-mdc-auto-init='MDCRipple'>Sign Up</button>
                    </div>
                </div>

                <SocialMediaLinks size={1.5} />
            </div>
        );
    }
}

JoinCard.propTypes = {
    top: PropTypes.number,
    right: PropTypes.number,
    width: PropTypes.number
};
