import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { history } from '../../../constants';
import { fetchPost } from '../../actions/post-actions';
import { setHeaderImage, setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { DOMAIN } from '../../../constants';

import Share from '../../components/global/Share';

class ShowPost extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { post: this.findPost(props) };
    }

    componentWillMount() {
        if (_.isEmpty(this.state.post.url)) {
            this.props.dispatch(fetchPost(this.props.postType, this.props.url));
        }
    }

    componentDidMount() {
        this.setHeaderImage(this.state.post);
    }

    componentWillReceiveProps(nextProps) {
        let post = this.findPost(nextProps);
        this.setState({
            post: post
        });

        this.setHeaderImage(post);
    }

    setHeaderImage(post) {
        if (this.props.renderAsIssue) {
            if (_.isEmpty(post.image)) {
                this.props.dispatch(setBlankNavbar(true));
            } else {
                this.props.dispatch(setHeaderImage(post.image));
            }
        }
    }

    findPost(props) {
        let post = _.find(props.posts, { postType: props.postType, url: props.url })

        if (_.isEmpty(post)) {
            return { }
        }

        return post;
    }

    onEditClick() {
        if (!this.props.edit) return;

        history.push(`/posts/${this.props.postType}/${this.props.url}/edit`);
    }

    renderShare() {
        if (!this.props.renderAsIssue && !this.props.renderAsNews) return;

        return <Share text={this.state.post.title} url={`${DOMAIN}/issues/${this.state.post.url}`} />;
    }

    renderAsNews() {
        if (!this.props.renderAsNews) return <br />;

        return (
            <div>
                <div className='post-created-at'>{moment(this.state.post.createdAt).format('MMMM D, YYYY')}</div><br />

                <img className='post-image' src={this.state.post.image} /><br /><br />
            </div>
        )
    }

    renderTitle() {
        if (_.isEmpty(this.state.post.title)) return;

        let titleClassName = this.props.renderAsIssue ? 'floating-title' : '';

        return (
            <div className={titleClassName}>
                <span className='mdc-typography--display2'><b>{this.state.post.title}</b></span><br />
            </div>
        );
    }

    render() {
        let { postType, url, posts, renderAsNews, renderAsIssue, edit, dispatch, ...props } = this.props;

        if (!_.isEmpty(this.state.post.title)) {
            this.props.dispatch(setDocumentTitle(this.state.post.title));
        }

        return (
            <div className='post' {...props} onClick={this.onEditClick.bind(this)}>
                {this.renderTitle()}

                {this.renderAsNews()}

                <span dangerouslySetInnerHTML={{__html: this.state.post.body }} {...props} />

                {this.renderShare()}
            </div>
        );
    }
}

ShowPost.propTypes = {
    postType: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    renderAsNews: PropTypes.bool,
    renderAsIssue: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        posts: state.posts.posts,
        edit: state.content.edit
    };
}

export default connect(mapStateToProps)(ShowPost);
