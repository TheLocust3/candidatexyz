import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { fetchCurrentUser } from '../../actions/user-actions';
import { setBlankNavbar } from '../../actions/global-actions';
import { fetchPostType } from '../../actions/post-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import ShowPost from '../posts/ShowPost';
import TextContent from '../content/TextContent';
import NewsThumbnail from './NewsThumbnail';

class News extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    componentDidMount() {
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchPostType('news'));
    }
    
    renderNewsList() {
        let posts = _.reverse(_.sortBy(this.props.posts, [(post) => { return post.created_at }]));

        return (
            <div className='news-list'>
                {posts.map((post, index) => {
                    return <NewsThumbnail post={post} history={this.props.history} key={post.id} />;
                })}
            </div>
        )
    }

    renderAddNews() {
        if (!this.props.isUserReady || _.isEmpty(this.props.user)) return;

        return (
            <Link className='link' to={`/posts/news/new`}>Add News</Link>
        );
    }

    render() {
        return (
            <div>
                <div className='news'>
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
        isUserReady: state.users.isReady,
        user: state.users.user,
    };
}

export default connect(mapStateToProps)(News);
