import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

import ContentApi from '../../../api/content-api';
import TextContent from '../../containers/content/TextContent';
import ExternalLinkContent from '../../containers/content/ExternalLinkContent';

export default class JoinTeamPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isReady: false, imageUrl: '' };
    }

    componentWillMount() {
        ContentApi.get('joinBackground').then((response) => {
            this.setState({
                isReady: true,
                imageUrl: response.content
            });
        });
    }

    render() {
        $('.join-team-panel-content').css('background-image', `url(${this.state.imageUrl})`);

        return (
            <div className='join-team-panel'>
                <div className='join-team-panel-content'>
                    <div className='join-team-panel-background join-team-panel-color'>
                        <div className='mdc-typography--display3'><b><TextContent identifier='joinTeamPanelTitle' /></b></div>
                    </div>

                    <div className='join-team-panel-actions mdc-typography--headline'>
                        <Link to="/sign_up"><button className="mdc-button mdc-button--raised button join-team-panel-color" data-mdc-auto-init="MDCRipple">Sign Up</button></Link>
                        <ExternalLinkContent identifier='donate'><button className="mdc-button mdc-button--raised button join-team-panel-color" data-mdc-auto-init="MDCRipple">Donate</button></ExternalLinkContent>
                    </div>
                </div>
            </div>
        );
    }
}
