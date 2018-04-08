import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { fetchHeaderImage, setDocumentTitle } from '../actions/global-actions';
import MDCAutoInit from '../components/global/MDCAutoInit';

import TextContent from './content/TextContent';
import ShowPost from './posts/ShowPost'
import JoinCard from '../components/common/JoinCard';
import Slideshow from '../components/common/Slideshow';

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
                    <div className='header-text mdc-typography--display2'><b><TextContent identifier='meetHeader' /></b></div>

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
