import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchHeaderImage, setDocumentTitle } from '../actions/global-actions';
import MDCAutoInit from '../components/global/MDCAutoInit';

import JoinCard from '../components/common/JoinCard';
import NewsPanel from '../components/panels/NewsPanel';
import JoinTeamPanel from '../components/panels/JoinTeamPanel';
import SlideshowPanel from '../components/panels/SlideshowPanel';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = { imageUrl: '' };
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Home'));
        this.props.dispatch(fetchHeaderImage('indexBackground'));
    }
    
    render() {
        return (
            <div>
                <JoinCard />

                <div className='content'>
                    <SlideshowPanel />

                    <NewsPanel />
                    <JoinTeamPanel />
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Index);
