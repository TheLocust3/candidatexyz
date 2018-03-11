import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

import ContentApi from '../../api/content-api';
import TextContent from '../containers/content/TextContent';
import JoinCard from '../components/common/JoinCard';
import Slideshow from '../components/common/Slideshow';

export default class Meet extends React.Component {

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

    render() {
        $('.header-image').css('background-image', `url(${this.state.imageUrl})`);

        return (
            <div>
                <div className='header-text mdc-typography--display2'><b><TextContent identifier='meetHeader' /></b></div>

                <div className='content'>
                    <div className='about'>
                        <TextContent identifier='meetBlurb' />
                    </div>
                </div>
            </div>
        );
    }
}
