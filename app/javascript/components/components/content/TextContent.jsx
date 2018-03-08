import React from 'react';
import PropTypes from 'prop-types';

export default class TextContent extends React.Component {

    render() {
        let { content, props } =  this.props;

        return (
            <div {...props}>
                {content.content}
            </div>
        );
    }
}

TextContent.propTypes = {
    content: PropTypes.object.isRequired
};
