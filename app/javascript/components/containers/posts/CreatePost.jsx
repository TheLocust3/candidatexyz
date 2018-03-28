import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import PostForm from '../../components/posts/PostForm';

class CreatePost extends React.Component {

    componentDidMount() {
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div>
                <PostForm postType={this.props.match.params.postType} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(CreatePost);
