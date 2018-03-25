import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setHeaderImage } from '../actions/global-actions';
import MDCAutoInit from '../components/common/MDCAutoInit';
import ContentApi from '../../api/content-api';
import TextContent from '../containers/content/TextContent';
import JoinCard from '../components/common/JoinCard';
import Slideshow from '../components/common/Slideshow';

class Meet extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isReady: false, imageUrl: '' };
    }

    componentWillMount() {
        ContentApi.get('meetBackground').then((response) => {
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
                <div className='header-text mdc-typography--display2'><b><TextContent identifier='meetHeader' /></b></div>

                <div className='content'>
                    <div className='about'>
                        <TextContent identifier='meetBlurb' />
                    </div>
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Meet);
