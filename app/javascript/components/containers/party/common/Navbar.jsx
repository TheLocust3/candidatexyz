import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';

class Navbar extends React.Component {

    render() {
        return (
            <div>
                Navbar
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(Navbar);
