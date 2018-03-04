import React from 'react';

import SocialMediaLinks from './SocialMediaLinks';

export default class ApprovedBy extends React.Component {

    render() {
        return (
            <div {...this.props}>
                <div className='approved-by'>
                    APPROVED BY CANDIDATEXYZ.<br />
                    PAID FOR BY CANDIDATAXYZ FOR OFFICE.<br />
                    ADDRESS<br />
                </div>
            </div>
        );
    }
}
