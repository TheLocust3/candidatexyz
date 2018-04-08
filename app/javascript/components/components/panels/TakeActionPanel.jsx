import React from 'react';

import TextContent from '../../containers/content/TextContent';
import ImageContent from '../../containers/content/ImageContent';

class TakeActionPanel extends React.Component {
    
    render() {
        return (
            <div className='take-action'>
                <div className='mdc-typography--display3'><b><TextContent identifier='actionHeader' /></b></div><br />
                <div className='mdc-typography--headline'><TextContent identifier='actionSubtitle' /></div><br />

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
