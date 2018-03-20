import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContentApi from '../../../api/content-api';
import EditContentWrapper from '../../components/common/EditContentWrapper';

class TextContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: { content: {} }, editingSelf: false };
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.edit) {
            this.setState({
                editingSelf: false
            });
        }
    }
    
    componentWillMount() {
        ContentApi.get(this.props.identifier).then((response) => {
            this.setState({
                content: response
            });
        });
    }

    componentDidMount() {
        $(document).click((event) => { // TODO: find a better way to do this
            let target = event.target;

            if (!$(target).is(`#${this.props.identifier}`)) {
                this.setState({
                    editingSelf: false
                });
            }
        });
    }

    onEditContent(event) {
        event.stopPropagation();

        this.setState({
            editingSelf: true
        });
    }

    renderEdit() {
        if (!this.state.editingSelf) return;

        let { identifier, edit, dispatch, ...props } = this.props;

        return <EditContentWrapper />
    }

    render() {
        let { identifier, edit, dispatch, ...props } = this.props;

        return (
            <span onClick={this.onEditContent.bind(this)}>
                {this.renderEdit()}

                <span dangerouslySetInnerHTML={{__html: this.state.content.content.text }} id={identifier} {...props} />
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
