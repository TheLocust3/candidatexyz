import React from 'react';
import { connect } from 'react-redux';

import Link from '../../../components/base/Link';
import { StaffActions } from 'candidatexyz-common-js';
import { setBlankNavbar, setDocumentTitle } from '../../../actions/global-actions';
import { fetchPostType } from '../../../actions/post-actions';
import MDCAutoInit from '../../../components/global/MDCAutoInit';

import ShowPost from '../../posts/ShowPost';

class Issues extends React.Component {

    componentWillMount() {
        this.props.dispatch(StaffActions.fetchCurrentUser());
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Issues'));
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

    renderAddIssue() {
        if (!this.props.isUserReady || _.isEmpty(this.props.user)) return;

        return (
            <Link className='link' to={`/staff/posts/issues/new`}>Add Issue</Link>
        );
    }

    render() {
        return (
            <div>
                <div className='content content-20 issues'>
                    <ShowPost postType='issues-page' url='issues-blurb' />

                    {this.renderIssueList()}<br />

                    {this.renderAddIssue()}
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.postsOfType,
        isUserReady: state.staff.isReady,
        user: state.staff.currentUser
    };
}

export default connect(mapStateToProps)(Issues);
