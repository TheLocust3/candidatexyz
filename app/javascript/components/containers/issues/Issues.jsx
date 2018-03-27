import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setBlankNavbar } from '../../actions/global-actions';
import { fetchPostType } from '../../actions/post-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import ShowPost from '../posts/ShowPost';

class Issues extends React.Component {

    componentDidMount() {
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchPostType('issues'));
    }
    
    renderIssueList() {
        return (
            <div className='issues-list'>
                {this.props.posts.map((post) => {
                    return (
                        <div className='issues-list-link' key={post.url}>
                            <Link className='link' to={`/issues/${post.url}`}>{post.title}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className='issues'>
                    <ShowPost postType='issues-page' url='issues-blurb' />

                    {this.renderIssueList()}<br />
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.postsOfType
    };
}

export default connect(mapStateToProps)(Issues);
