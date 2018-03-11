import React from 'react';

import SocialMediaLinks from './SocialMediaLinks';
import TextContent from '../../containers/content/TextContent';

export default class ApprovedBy extends React.Component {

    render() {
        return (
            <div {...this.props}>
                <div className='approved-by'>
                    Approved by<TextContent identifier='candidateName' />.<br />
                    Paid for by <TextContent identifier='candidateForOffice' />.<br />
                    <TextContent identifier='candidateAddress' /><br />
                </div>
            </div>
        );
    }
}
