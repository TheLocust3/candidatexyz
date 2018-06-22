import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { history } from '../../../constants';

const THUMBNAIL_BODY_LENGTH = 200;

class NewsThumbnail extends React.Component {

    onThumbnailClick() {
        history.push(`/news/${this.props.post.url}`)
    }

    renderCreatedAt() {
        if (this.props.small) return;

        return <div className='post-created-at news-thumbnail-created-at'>{moment(this.props.post.createdAt).format('MMMM D, YYYY')}</div>;
    }

    render() {
        let { post, small, ...props } = this.props;
        let smallClassName = small ? 'news-thumbnail-small' : '';
        let length = small ? THUMBNAIL_BODY_LENGTH : THUMBNAIL_BODY_LENGTH * 2;
        
        return (
            <div className={`news-thumbnail ${smallClassName}`} onClick={this.onThumbnailClick.bind(this)} {...props}>
                <img className='news-thumbnail-image' src={post.image} />
                
                <div className='news-thumbnail-text'>
                    <div style={{ fontSize: '26px' }}>{post.title}</div><br />
                    <span dangerouslySetInnerHTML={{__html: post.body.substring(0, length) }} /><br />

                    {this.renderCreatedAt()}
                </div>
            </div>
        );
    }
}

NewsThumbnail.propTypes = {
    post: PropTypes.object.isRequired,
    small: PropTypes.bool
};

export default NewsThumbnail;
