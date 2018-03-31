import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPostType } from '../../actions/post-actions';
import TextContent from '../../containers/content/TextContent';
import NewsThumbnail from '../../containers/news/NewsThumbnail';

class NewsPanel extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchPostType('news'));
    }

    renderNewsList() {
        let posts = _.reverse(_.sortBy(this.props.posts, [(post) => { return post.created_at }]));

        return (
            <div>
                {posts.map((post, index) => {
                    if (index < 3) {
                        return <NewsThumbnail post={post} history={history} key={post.id} small={true} />;
                    }
                })}
            </div>
        )
    }

    render() {
        return (
            <div className='news-panel'>
                <div className='mdc-typography--display1 news-panel-headline'><b><TextContent identifier='newsPanelHeadline' /></b></div>

                {this.renderNewsList()}

                <center><Link to='/news'><button className='mdc-button mdc-button--raised button' data-mdc-auto-init='MDCRipple'><TextContent identifier='newsPanelButton' /></button></Link></center>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.postsOfType
    };
}

export default connect(mapStateToProps)(NewsPanel);
