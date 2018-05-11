import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { fetchHeaderImage, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import Header from '../../components/base/Header';

import TextContent from '../content/TextContent';
import ShowPost from '../posts/ShowPost'
import JoinCard from '../../components/candidate/common/JoinCard';
import Slideshow from '../../components/common/Slideshow';

class Meet extends React.Component {

    constructor(props) {
        super(props);

        this.state = { imageUrl: '' };
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Meet'));
        this.props.dispatch(fetchHeaderImage('meetBackground'));
    }

    render() {
        return (
            <div>
                <div className='content'>
                    <Header type='display2' className='header-text'><b><TextContent identifier='meetHeader' /></b></Header>

                    <div className='content-20'>
                        <ShowPost postType='meet' url='meet-body' />
                    </div>
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Meet);
