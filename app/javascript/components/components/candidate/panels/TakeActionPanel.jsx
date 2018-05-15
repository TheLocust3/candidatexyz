import React from 'react';

import Header from '../../base/Header';
import TextContent from '../../../containers/content/TextContent';
import ImageContent from '../../../containers/content/ImageContent';

class TakeActionPanel extends React.Component {
    
    render() {
        return (
            <div className='take-action'>
                <Header type='headline3'><b><TextContent identifier='actionHeader' /></b></Header><br />
                <Header type='headline5'><TextContent identifier='actionSubtitle' /></Header><br />

                <p className='content-20 take-action-text'>
                    <TextContent identifier='actionBody' /><br /><br />

                    <TextContent identifier='actionEnding' /><br />
                    
                    <ImageContent identifier='actionSignature' />
                </p>
            </div>
        );
    }
}

export default TakeActionPanel;
