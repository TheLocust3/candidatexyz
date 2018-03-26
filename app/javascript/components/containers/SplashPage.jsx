import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setFullscreen } from '../actions/global-actions';
import ContentApi from '../../api/content-api';
import MDCAutoInit from '../components/global/MDCAutoInit';

import TextContent from './content/TextContent';

class SplashPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isReady: false, imageUrl: '' };
    }

    componentWillMount() {
        ContentApi.get('splashPageBackground').then((response) => {
            this.setState({
                isReady: true,
                imageUrl: response.content
            });
        });
    }

    componentDidMount() {
        this.props.dispatch(setFullscreen(true));
    }

    componentWillUnmount() {
        this.props.dispatch(setFullscreen(false));
    }

    componentDidUpdate() {
        if (this.state.isReady) {
            $('.splash-page').css('background-image', `url(${this.state.imageUrl})`);
        }
    }

    render() {
        return (
            <div className='splash-page'>
                

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(SplashPage);
