import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import TextContent from '../../containers/content/TextContent';
import SocialMediaLinks from './SocialMediaLinks';
import SlimJoinUsForm from '../SlimJoinUsForm'

export default class JoinCard extends React.Component {

    render() {
        let top = _.isEmpty(this.props.top) ? '13%' : `${this.props.top}%`;
        let right = _.isEmpty(this.props.right) ? '3%' : `${this.props.right}%`;
        let width = _.isEmpty(this.props.width) ? '35%' : `${this.props.width}%`;

        return (
            <div style={{ position: 'absolute', top: top, right: right, width: width }}>
                <div className='mdc-card'>
                    <div className='mdc-card__media join-card'>
                        <div className='mdc-typography--headline card-title'><b>Join CandidateXYZ</b></div>

                        <div className='join-description'>
                            <TextContent identifier='joinCardBlurb' />
                        </div>

                        <SlimJoinUsForm />
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
