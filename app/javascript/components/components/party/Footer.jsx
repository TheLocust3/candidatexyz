import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Footer extends React.Component {

    render() {
        return (
            <div>
                Footer
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(Footer);
