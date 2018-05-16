import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

export default class Slideshow extends React.Component {

    constructor(props) {
        super(props)

        this.state = { index: 0 };
    }

    componentDidMount() {
        let time = _.isEmpty(this.props.time) ? 4000 : this.props.time;

        this.interval = setInterval(() => this.tick(), time);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        let previousIndex = this.state.index;
        let index = previousIndex + 1;
        if (index >= this.props.images.length) {
            index = 0;
        }

        $(`#image-${index}`).css('z-index', 2);

        $(`#image-${previousIndex}`).fadeOut(500, () => {
            $(`#image-${index}`).css('z-index', 3);
            $(`#image-${previousIndex}`).css('z-index', 1).show();

            this.setState({
                index: index
            });
        });
    }

    renderBlurb() {
        if (_.isEmpty(this.props.children)) return;

        return (
            <div className='slideshow-blurb'>
                {this.props.children}
            </div>
        );
    }

    renderImages() {
        let fullscreenImageClassName = _.isEmpty(this.props.children) ? 'slideshow-image-fullscreen' : '';

        return (
            <div>
                {this.props.images.map((image, index) => {
                    let imageClassName = index == this.state.index ? 'slideshow-image-active' : '';

                    return <img key={index} id={`image-${index}`} src={image} className={`slideshow-image ${fullscreenImageClassName} ${imageClassName}`} />
                })}
            </div>
        )
    }

    render() {
        let fullscreenClassName = _.isEmpty(this.props.children) ? 'slideshow-fullscreen' : '';

        return (
            <div className={`slideshow ${fullscreenClassName}`}>
                {this.renderImages()}
                
                {this.renderBlurb()}
            </div>
        );
    }
}

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    time: PropTypes.number,
    children: PropTypes.arrayOf(PropTypes.element)
};

