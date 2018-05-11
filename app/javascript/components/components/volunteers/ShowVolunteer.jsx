import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { history } from '../../../constants';
import Header from '../base/Header';

class ShowVolunteer extends React.Component {

    render() {
        return (
            <div>
                <Header type='headline'><b>Name</b></Header>
                {this.props.volunteer.firstName} {this.props.volunteer.lastName}<br /><br />

                <Header type='headline'><b>Address</b></Header>
                {this.props.volunteer.address}<br /><br />

                <Header type='headline'><b>Zipcode</b></Header>
                {this.props.volunteer.zipcode}<br /><br />

                <Header type='headline'><b>City</b></Header>
                {this.props.volunteer.city}<br /><br />

                <Header type='headline'><b>State</b></Header>
                {this.props.volunteer.state}<br /><br />

                <Header type='headline'><b>Phone Number</b></Header>
                {this.props.volunteer.phoneNumber}<br /><br />

                <Header type='headline'><b>Help Type</b></Header>
                {this.props.volunteer.helpBlurb}<br /><br />
            </div>
        );
    }
}

ShowVolunteer.propTypes = {
    volunteer: PropTypes.object.isRequired
};

export default ShowVolunteer;
