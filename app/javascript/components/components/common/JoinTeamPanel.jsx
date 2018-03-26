import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

import ContentApi from '../../../api/content-api';
import TextContent from '../../containers/content/TextContent';
import ExternalLinkContent from '../../containers/content/ExternalLinkContent';

export default class JoinTeamPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = { imageUrl: '' };
    }

    componentWillMount() {
        ContentApi.get('joinTeamBackground').then((response) => {
            this.setState({
                imageUrl: response.content
            });
        });
    }

    render() {
        if (_.isEmpty(this.state.imageUrl)) return null;
        
        return (
            <div className='join-team-panel'>
                <Parallax offsetYMax='100px' offsetYMin='-100px' styleOuter={{ overflow: 'hidden', height: '60vh' }} styleInner={{ marginTop: '-20vh' }} slowerScrollRate>
                    <div className='join-team-panel-image' style={{ backgroundImage: `url(${this.state.imageUrl})` }} />
                </Parallax>

                <div className='join-team-panel-content'>
                    <div className='join-team-panel-title join-team-panel-color'>
                        <div className='mdc-typography--display2'><b><TextContent identifier='joinTeamPanelTitle' /></b></div>
                    </div>

                    <div className='join-team-panel-actions mdc-typography--headline'>
                        <Link to='/sign_up'><button className='mdc-button mdc-button--raised button join-team-panel-color' data-mdc-auto-init='MDCRipple'>Sign Up</button></Link>
                        <ExternalLinkContent identifier='joinTeamPanelDonateLink'><button className='mdc-button mdc-button--raised button join-team-panel-color' data-mdc-auto-init='MDCRipple'>Donate</button></ExternalLinkContent>
                    </div>
                </div>
            </div>
        );
    }
}
