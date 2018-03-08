import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchContent } from '../../actions/content-actions';
import TextContent from '../../components/content/TextContent';

class TextContentContainer extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchContent(this.props.identifier));
    }

    render() {
        if (!this.props.isReady) return null;

        let { dispatch, props } =  this.props;

        return (
            <TextContent {...this.props} />
        );
    }
}

TextContentContainer.propTypes = {
    identifier: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isReady: state.content.isReady,
        content: state.content.content
    };
}

export default connect(mapStateToProps)(TextContentContainer);
