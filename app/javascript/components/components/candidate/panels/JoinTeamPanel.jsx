import React from 'react';
import { Parallax, Background } from 'react-parallax';

import Header from '../../base/Header';
import Link from '../../base/Link';
import Button from '../../base/Button';
import ContentApi from '../../../../api/content-api';
import TextContent from '../../../containers/content/TextContent';
import ExternalLinkContent from '../../../containers/content/ExternalLinkContent';

import PanelWrapper from '../../panels/PanelWrapper';

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
            <PanelWrapper className='join-team-panel'>
                <Parallax strength={300} style={{ height: '60vh' }} bgStyle={{ width: '100%' }}>
                    <Background>
                        <img src={this.state.imageUrl} style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                    </Background>

                    <div className='join-team-panel-content'>
                        <div className='join-team-panel-title join-team-panel-color'>
                            <Header type='headline2'><b><TextContent identifier='joinTeamPanelTitle' /></b></Header>
                        </div>

                        <Header type='headline5' className='join-team-panel-actions'>
                            <Link to='/sign_up' noDecoration><Button className='join-team-panel-color'>Sign Up</Button></Link>
                            <ExternalLinkContent identifier='joinTeamPanelDonateLink' noDecoration={true}><Button className='join-team-panel-color'>Donate</Button></ExternalLinkContent>
                        </Header>
                    </div>
                </Parallax>
            </PanelWrapper>
        );
    }
}
