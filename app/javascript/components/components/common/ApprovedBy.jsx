import React from 'react';

import SocialMediaLinks from '../global/SocialMediaLinks';
import TextContent from '../../containers/content/TextContent';

export default class ApprovedBy extends React.Component {

    render() {
        return (
            <div {...this.props}>
                <div className='approved-by'>
                    <TextContent identifier='approvedByBlurb' />
                </div>
            </div>
        );
    }
}
