import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPost } from '../../actions/post-actions';

class EditPost extends React.Component {
    
    componentWillMount() {
        if (_.isEmpty(this.findPost().url)) {
            this.props.dispatch(fetchPost(this.props.match.params.postType, this.props.match.params.url));
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
        let { posts, edit, dispatch, ...props } = this.props;
        let post = this.findPost();

        return (
            <div>
                Edit post!
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    };
}

export default connect(mapStateToProps)(EditPost);
