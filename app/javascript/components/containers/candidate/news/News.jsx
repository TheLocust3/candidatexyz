import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { history } from '../../../../constants';
import Link from '../../../components/base/Link';
import { fetchCurrentUser } from '../../../actions/staff-actions';
import { setBlankNavbar, setDocumentTitle } from '../../../actions/global-actions';
import { fetchPostType } from '../../../actions/post-actions';
import MDCAutoInit from '../../../components/global/MDCAutoInit';

import ShowPost from '../../posts/ShowPost';
import TextContent from '../../content/TextContent';
import NewsThumbnail from './NewsThumbnail';

class News extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('News'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchPostType('news'));
    }
    
    renderNewsList() {
        let posts = _.reverse(_.sortBy(this.props.posts, [(post) => { return post.createdAt }]));

        return (
            <div className='news-list'>
                {posts.map((post, index) => {
                    return <NewsThumbnail post={post} history={history} key={post.id} />;
                })}
            </div>
        )
    }

    renderAddNews() {
        if (!this.props.isUserReady || _.isEmpty(this.props.user)) return;

        return (
            <Link className='link' to={`/staff/posts/news/new`}>Add News</Link>
        );
    }

    render() {
        return (
            <div>
                <div className='content-15'>
                    <div className='mdc-typography--display3'><b><TextContent identifier='newsHeader' /></b></div>
                    {this.renderAddNews()}<br /><br />

                    {this.renderNewsList()}
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

export default connect(mapStateToProps)(News);
