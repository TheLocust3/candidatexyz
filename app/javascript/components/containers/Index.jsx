import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setHeaderImage } from '../actions/global-actions';
import MDCAutoInit from '../components/common/MDCAutoInit';
import ContentApi from '../../api/content-api';
import TextContent from './content/TextContent';
import SlideshowContent from './content/SlideshowContent';
import JoinCard from '../components/common/JoinCard';
import JoinTeamPanel from '../components/common/JoinTeamPanel'
import Slideshow from '../components/common/Slideshow';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isReady: false, imageUrl: '' };
    }

    componentWillMount() {
        ContentApi.get('indexBackground').then((response) => {
            this.setState({
                isReady: true,
                imageUrl: response.content
            });
        });
    }

    componentDidUpdate() {
        if (!_.isEmpty(this.state.imageUrl)) {
            this.props.dispatch(setHeaderImage(this.state.imageUrl));
        }
    }

    render() {
        return (
            <div>
                <JoinCard />

                <div className='content'>
                    <SlideshowContent identifier='indexSlideshow'>
                        <div className='mdc-typography--headline'>
                            <b><TextContent identifier='slideshowBlurb' /></b>
                        </div><br />

                        <Link to='/meet' className='link'><div className='mdc-typography--headline'><TextContent identifier='slideshowLink' /></div></Link>
                    </SlideshowContent>

                    <JoinTeamPanel />
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Index);
