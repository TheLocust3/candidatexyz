import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

    render() {
        let { postType, url, posts, dispatch, ...props } = this.props;
        let post = this.findPost();

        return (
            <div>
                <div className='mdc-typography--display2'><b>{post.title}</b></div><br />

                <span dangerouslySetInnerHTML={{__html: post.body }} {...props} />
            </div>
        );
    }
}

ShowPost.propTypes = {
    postType: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    };
}

export default connect(mapStateToProps)(ShowPost);
