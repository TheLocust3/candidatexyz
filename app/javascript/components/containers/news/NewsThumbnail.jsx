import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const THUMBNAIL_BODY_LENGTH = 200;

class NewsThumbnail extends React.Component {

    onThumbnailClick() {
        this.props.history.push(`/news/${this.props.post.url}`)
    }

    render() {
        let { post, history, ...props } = this.props;
            
        return (
            <div className='news-thumbnail' onClick={this.onThumbnailClick.bind(this)} {...props}>
                <img className='news-thumbnail-image' src={post.image} />
                
                <div className='news-thumbnail-text'>
                    <div style={{ fontSize: '26px' }}><b>{post.title}</b></div><br />
                    <div>{post.body.substring(0, THUMBNAIL_BODY_LENGTH)}...</div><br />

                    <div className='post-created-at news-thumbnail-created-at'>{moment(post.created_at).format('MMMM D, YYYY')}</div>
                </div>
            </div>
        );
    }
}

NewsThumbnail.propTypes = {
    post: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default NewsThumbnail;
