import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchHeaderImage, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import JoinCard from '../../components/candidate/common/JoinCard';
import NewsPanel from '../../components/candidate/panels/NewsPanel';
import JoinTeamPanel from '../../components/candidate/panels/JoinTeamPanel';
import SlideshowPanel from '../../components/candidate/panels/SlideshowPanel';

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
