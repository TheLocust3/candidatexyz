import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import TextContent from '../../containers/content/TextContent';
import SocialMediaLinks from '../global/SocialMediaLinks';
import SlimJoinUsForm from './SlimJoinUsForm'

export default class JoinCard extends React.Component {

    render() {
        return (
            <div className='join-card-root'>
                <div className='mdc-card'>
                    <div className='mdc-card__media join-card'>
                        <div className='mdc-typography--headline card-title'><b><TextContent identifier='joinCardTitle' /></b></div>

                        <div className='join-description'>
                            <TextContent identifier='joinCardBlurb' />
                        </div>

                        <SlimJoinUsForm />
                    </div>
                </div>

                <SocialMediaLinks size={2} />
            </div>
        );
    }
}

JoinCard.propTypes = {
    top: PropTypes.number,
    right: PropTypes.number,
    width: PropTypes.number
};
