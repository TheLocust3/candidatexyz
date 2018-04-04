import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { history } from '../../../constants';

class ShowVolunteer extends React.Component {

    render() {
        return (
            <div>
                <div className='mdc-typography--headline'><b>Name</b></div>
                {this.props.volunteer.first_name} {this.props.volunteer.last_name}<br /><br />

                <div className='mdc-typography--headline'><b>Address 1</b></div>
                {this.props.volunteer.address1}<br /><br />
                <div className='mdc-typography--headline'><b>Address 2</b></div>
                {this.props.volunteer.address2}<br /><br />
                <div className='mdc-typography--headline'><b>Zipcode</b></div>
                {this.props.volunteer.zipcode}<br /><br />
                <div className='mdc-typography--headline'><b>City</b></div>
                {this.props.volunteer.city}<br /><br />
                <div className='mdc-typography--headline'><b>State</b></div>
                {this.props.volunteer.state}<br /><br />

                <div className='mdc-typography--headline'><b>Home Number</b></div>
                {this.props.volunteer.home_number}<br /><br />
                <div className='mdc-typography--headline'><b>Mobile Number</b></div>
                {this.props.volunteer.mobile_number}<br /><br />

                <div className='mdc-typography--headline'><b>Help Type</b></div>
                {this.props.volunteer.help_blurb}<br /><br />
            </div>
        );
    }
}

ShowVolunteer.propTypes = {
    volunteer: PropTypes.object.isRequired
};

export default ShowVolunteer;
