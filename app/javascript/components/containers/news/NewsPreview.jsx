import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { history } from '../../../constants';

import Header from '../../components/base/Header';
import Link from '../../components/base/Link';

const PREVIEW_BODY_LENGTH = 3000;

class NewsPreview extends React.Component {

    onThumbnailClick() {
        history.push(`/news/${this.props.post.url}`)
    }

    renderCreatedAt() {
        if (this.props.small) return;

        return <div className='post-created-at'>{moment(this.props.post.createdAt).format('MMMM D, YYYY')}</div>;
    }

    render() {
        let { post, ...props } = this.props;
        
        return (
            <div {...props}>
                <Header type='headline4'>{post.title}</Header>
                {this.renderCreatedAt()}<br />

                <center><i><img className='post-image post-image-preview' src={post.image} /></i></center>

                <span dangerouslySetInnerHTML={{__html: post.body.substring(0, PREVIEW_BODY_LENGTH) }} />

                <Link to={`/news/${post.url}`}>Read more</Link>
            </div>
        );
    }
}

NewsPreview.propTypes = {
    post: PropTypes.object.isRequired
};

export default NewsPreview;
