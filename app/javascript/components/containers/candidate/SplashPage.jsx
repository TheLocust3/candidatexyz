import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../components/base/Button';
import { setFullscreen, setDocumentTitle } from '../../actions/global-actions';
import ContentApi from '../../../api/content-api';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import TextContent from '../content/TextContent';
import JoinCard from '../../components/candidate/common/JoinCard';

class SplashPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { imageUrl: '' };
    }

    componentWillMount() {
        ContentApi.get('splashPageBackground').then((response) => {
            this.setState({
                imageUrl: response.content
            });
        });
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle(''));
        this.props.dispatch(setFullscreen(true));
    }

    componentDidUpdate() {
        if (!_.isEmpty(this.state.imageUrl)) {
            $('.splash-page').css('background-image', `url(${this.state.imageUrl})`);
        }
    }

    render() {
        return (
            <div className='splash-page'>
                <div className='mdc-typography--display2 splashPageHeadline'>
                    <b><TextContent identifier='splashPageHeadline' /></b>
                </div><br />

                <JoinCard top='45%' right='60%' />

                <Link to='/home'><Button className='splash-page-button'><TextContent identifier='splashPageButton' /></Button></Link>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(SplashPage);
