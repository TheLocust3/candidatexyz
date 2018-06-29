import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import objectFitImages from 'object-fit-images';

export default class Slideshow extends React.Component {

    constructor(props) {
        super(props)

        this.state = { index: 0 };
    }

    createInterval() {
        let time = _.isEmpty(this.props.time) ? 4000 : this.props.time;

        this.interval = setInterval(() => this.tick(), time);
    }

    componentDidMount() {
        objectFitImages();

        this.createInterval();
        $('.slideshow-circle-holder').hide();

        let timer;
        $('.slideshow').mousemove(() => {
            $('.slideshow-circle-holder').fadeIn(150);
            clearTimeout(timer);

            timer = setTimeout(() => {
                $('.slideshow-circle-holder').fadeOut(1000, () => {
                    $(this).remove();
                });
            }, 1000);
        });
    }

    componentDidUpdate() {
        objectFitImages();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        $('.slideshow').off('mousemove');
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

    onCircleClick(index) {
        this.setState({
            index: index
        });

        clearInterval(this.interval);
        this.props.images.map((image, i) => {
            if (index == i) {
                $(`#image-${i}`).css('z-index', 3);
            } else {
                $(`#image-${i}`).css('z-index', 1).show();
            }
        });

        this.createInterval();
    }

    renderBlurb() {
        if (_.isEmpty(this.props.children)) return;

        return (
            <div className='slideshow-blurb'>
                {this.props.children}
            </div>
        );
    }

    renderCircles() {
        let fullscreenCircleClassName = _.isEmpty(this.props.children) ? 'slideshow-circle-holder-fullscreen' : '';
        
        return (
            <div className={`slideshow-circle-holder ${fullscreenCircleClassName}`}>
                {this.props.images.map((image, index) => {
                    let activeClassName = this.state.index == index ? 'slideshow-circle-active' : '';

                    return <span key={index} className={`slideshow-circle ${activeClassName}`} onClick={() => this.onCircleClick(index)} />;
                })}
            </div>
        );
    }

    renderImages() {
        let fullscreenImageClassName = _.isEmpty(this.props.children) ? 'slideshow-image-fullscreen' : '';

        return (
            <div style={{ display: 'inline' }}>
                {this.props.images.map((image, index) => {
                    let imageClassName = index == this.state.index ? 'slideshow-image-active' : '';

                    return <img key={index} id={`image-${index}`} data-object-fit='cover' src={image} className={`slideshow-image ${fullscreenImageClassName} ${imageClassName}`} />
                })}

                {this.renderCircles()}
            </div>
        );
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

