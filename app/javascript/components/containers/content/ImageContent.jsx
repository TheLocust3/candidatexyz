import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContentApi from '../../../api/content-api';
import { setEditingContent, setEditOverlayOpen } from '../../actions/content-actions';

class ImageContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: { content: {} } };
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
        let { identifier, edit, dispatch, ...props } = this.props;

        return (
            <span id={identifier} onClick={this.onEditContent.bind(this)}>
                <img src={this.state.content.content.image} {...props} />
            </span>
        );
    }
}

ImageContent.propTypes = {
    identifier: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        edit: state.content.edit
    };
}

export default connect(mapStateToProps)(ImageContent);
