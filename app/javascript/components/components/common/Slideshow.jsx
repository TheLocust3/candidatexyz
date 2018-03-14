import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

export default class Slideshow extends React.Component {

    constructor(props) {
        super(props)

        this.state = { index: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 4000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        $('.slideshow-image').fadeOut(500, () => {
            let index = this.state.index + 1;
            if (index >= this.props.images.length) {
                index = 0;
            }

            this.setState({
                index: index
            });

            $('.slideshow-image').fadeIn(500);
        });
    }

    render() {
        return (
            <div className='slideshow'>
                <img src={this.props.images[this.state.index]} className='slideshow-image' />
                
                <div className='slideshow-blurb'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.arrayOf(PropTypes.element)
};

