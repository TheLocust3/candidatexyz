import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContentApi from '../../../api/content-api';

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

    renderEdit() {
        let { identifier, edit, dispatch, ...props } = this.props;

        return (
            <div>
                Test
            </div>
        )
    }

    renderContent() {
        let { identifier, edit, dispatch, ...props } = this.props;

        return (
            <span dangerouslySetInnerHTML={{__html: this.state.content.content.text }} {...props} />
        );
    }

    render() {
        if (this.props.edit) {
            return this.renderEdit();
        }

        return this.renderContent();
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
