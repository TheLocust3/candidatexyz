import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { history } from '../../../constants';

class ShowVolunteer extends React.Component {

    render() {
        return (
            <div>
                <div className='mdc-typography--headline'><b>Name</b></div>
                {this.props.volunteer.firstName} {this.props.volunteer.lastName}<br /><br />

                <div className='mdc-typography--headline'><b>Address</b></div>
                {this.props.volunteer.address}<br /><br />
                <div className='mdc-typography--headline'><b>Zipcode</b></div>
                {this.props.volunteer.zipcode}<br /><br />
                <div className='mdc-typography--headline'><b>City</b></div>
                {this.props.volunteer.city}<br /><br />
                <div className='mdc-typography--headline'><b>State</b></div>
                {this.props.volunteer.state}<br /><br />

                <div className='mdc-typography--headline'><b>Phone Number</b></div>
                {this.props.volunteer.phoneNumber}<br /><br />

                <div className='mdc-typography--headline'><b>Help Type</b></div>
                {this.props.volunteer.helpBlurb}<br /><br />
            </div>
        );
    }
}

ShowVolunteer.propTypes = {
    volunteer: PropTypes.object.isRequired
};

export default ShowVolunteer;
