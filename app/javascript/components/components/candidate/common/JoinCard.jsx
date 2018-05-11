import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import TextContent from '../../../containers/content/TextContent';
import Header from '../../base/Header';
import SocialMediaLinks from '../../global/SocialMediaLinks';
import SlimJoinUsForm from '../forms/SlimJoinUsForm'

export default class JoinCard extends React.Component {

    render() {
        let style = { top: _.isEmpty(this.props.top) ? '40vh' : this.props.top, right: _.isEmpty(this.props.right) ? '3vh' : this.props.right };

        return (
            <div className='join-card-root' style={style}>
                <div className='mdc-card'>
                    <div className='mdc-card__media join-card'>
                        <Header type='headline' className='card-title'><b><TextContent identifier='joinCardTitle' /></b></Header>

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
    top: PropTypes.string,
    right: PropTypes.string
};
