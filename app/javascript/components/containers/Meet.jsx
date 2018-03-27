import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setHeaderImage } from '../actions/global-actions';
import MDCAutoInit from '../components/global/MDCAutoInit';

import ContentApi from '../../api/content-api';
import TextContent from './content/TextContent';
import ShowPost from './posts/ShowPost'
import JoinCard from '../components/common/JoinCard';
import Slideshow from '../components/common/Slideshow';

class Meet extends React.Component {

    constructor(props) {
        super(props);

        this.state = { imageUrl: '' };
    }

    componentWillMount() {
        ContentApi.get('meetBackground').then((response) => {
            this.setState({
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
                <div className='header-text mdc-typography--display2'><b><TextContent identifier='meetHeader' /></b></div>

                <div className='content'>
                    <div className='about'>
                        <ShowPost postType='meet' url='meet-body' />
                    </div>
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Meet);
