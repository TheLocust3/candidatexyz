import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { history } from '../../../constants';
import Header from '../base/Header';

class ShowVolunteer extends React.Component {

    render() {
        return (
            <div>
                <Header type='headline5'><b>Name</b></Header>
                {this.props.volunteer.firstName} {this.props.volunteer.lastName}<br /><br />

                <Header type='headline5'><b>Address</b></Header>
                {this.props.volunteer.address}<br /><br />

                <Header type='headline5'><b>Zipcode</b></Header>
                {this.props.volunteer.zipcode}<br /><br />

                <Header type='headline5'><b>City</b></Header>
                {this.props.volunteer.city}<br /><br />

                <Header type='headline5'><b>State</b></Header>
                {this.props.volunteer.state}<br /><br />

                <Header type='headline5'><b>Phone Number</b></Header>
                {this.props.volunteer.phoneNumber}<br /><br />

                <Header type='headline5'><b>Help Type</b></Header>
                {this.props.volunteer.helpBlurb}<br /><br />
            </div>
        );
    }
}

ShowVolunteer.propTypes = {
    volunteer: PropTypes.object.isRequired
};

export default ShowVolunteer;
