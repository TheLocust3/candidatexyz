import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContentApi from '../../../api/content-api';
import Slideshow from '../../components/common/Slideshow';
import { setEditingContent, setEditOverlayOpen } from '../../actions/content-actions';

class SlideshowContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: { content: [] } };
    }

    componentWillMount() {
        ContentApi.get(this.props.identifier).then((response) => {
            this.setState({
                content: response
            });
        });
    }

    onEditContent(event) {
        if (!this.props.edit) return;

        event.stopPropagation();
        event.preventDefault();

        this.props.dispatch(setEditingContent(this.state.content));
        this.props.dispatch(setEditOverlayOpen(true));
    }

    render() {
        let { identifier, dispatch, ...props } = this.props;
        let content = this.state.content;

        return (
            <span id={identifier} onClick={this.onEditContent.bind(this)}>
                <Slideshow images={content.content}>
                    {this.props.children}
                </Slideshow>
            </span>
        );
    }
}

SlideshowContent.propTypes = {
    identifier: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element)
};

function mapStateToProps(state) {
    return {
        edit: state.content.edit
    };
}

export default connect(mapStateToProps)(SlideshowContent);
