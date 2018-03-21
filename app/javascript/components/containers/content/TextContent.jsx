import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContentApi from '../../../api/content-api';
import { setEditingContent, setEditOverlayOpen } from '../../actions/content-actions';

class TextContent extends React.Component {

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

        this.props.dispatch(setEditingContent(this.state.content));
        this.props.dispatch(setEditOverlayOpen(true));
    }

    render() {
        let { identifier, edit, dispatch, ...props } = this.props;

        return (
            <span id={identifier} onClick={this.onEditContent.bind(this)}>
                <span dangerouslySetInnerHTML={{__html: this.state.content.content.text }} {...props} />
            </span>
        );
    }
}

TextContent.propTypes = {
    identifier: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        edit: state.content.edit
    };
}

export default connect(mapStateToProps)(TextContent);
