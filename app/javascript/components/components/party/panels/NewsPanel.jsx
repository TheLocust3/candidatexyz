import React from 'react';
import { connect } from 'react-redux';

import Header from '../../base/Header';
import Link from '../../base/Link';
import Button from '../../base/Button';
import { fetchPostType } from '../../../actions/post-actions';
import TextContent from '../../../containers/content/TextContent';

import PanelWrapper from '../../panels/PanelWrapper';

class NewsPanel extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchPostType('news'));
    }

    renderNewsList() {
        let posts = _.reverse(_.sortBy(this.props.posts, [(post) => { return post.createdAt }]));

        return (
            <div>
                {posts.map((post, index) => {
                    return 'test';
                })}
            </div>
        )
    }

    render() {
        return (
            <PanelWrapper className='news-panel' height='50vh'>
                <Header type='headline2' className='news-panel-headline'><TextContent identifier='newsPanelHeadline' /></Header>

                {this.renderNewsList()}

                <center><Link to='/news' noDecoration><Button><TextContent identifier='newsPanelButton' /></Button></Link></center>
            </PanelWrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.postsOfType
    };
}

export default connect(mapStateToProps)(NewsPanel);
