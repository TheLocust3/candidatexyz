import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { history } from '../../../constants';
import { fetchPost } from '../../actions/post-actions';

class ShowPost extends React.Component {
    
    componentWillMount() {
        if (_.isEmpty(this.findPost().url)) {
            this.props.dispatch(fetchPost(this.props.postType, this.props.url));
        }
    }

    findPost() {
        let post = _.find(this.props.posts, { post_type: this.props.postType, url: this.props.url })

        if (_.isEmpty(post)) {
            return { }
        }

        return post;
    }

    onEditClick() {
        if (!this.props.edit) return;

        history.push(`/posts/${this.props.postType}/${this.props.url}/edit`);
    }

    renderAsNews(post) {
        if (!this.props.renderAsNews) return <br />;

        return (
            <div>
                <div className='post-created-at'>{moment(post.created_at).format('MMMM D, YYYY')}</div><br />

                <img className='post-image' src={post.image} /><br /><br />
            </div>
        )
    }

    render() {
        let { postType, url, posts, renderAsNews, edit, dispatch, ...props } = this.props;
        let post = this.findPost();

        return (
            <div className='post' {...props} onClick={this.onEditClick.bind(this)}>
                <span className='mdc-typography--display2'><b>{post.title}</b></span><br />

                {this.renderAsNews(post)}

                <span dangerouslySetInnerHTML={{__html: post.body }} {...props} />
            </div>
        );
    }
}

ShowPost.propTypes = {
    postType: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    renderAsNews: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        posts: state.posts.posts,
        edit: state.content.edit
    };
}

export default connect(mapStateToProps)(ShowPost);
