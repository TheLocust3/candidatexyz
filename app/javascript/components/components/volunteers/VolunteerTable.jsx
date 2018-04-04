import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { history } from '../../../constants';

const HELP_BLURB_LENGTH = 50;

class VolunteerTable extends React.Component {

    onVolunteerClick(id, event) {
        history.push(`/staff/volunteers/${id}`)
    }

    renderVolunteerRows() {
        if (_.isEmpty(this.props.volunteers)) return;

        return (
            this.props.volunteers.map((volunteer) => {
                return (
                    <tr key={volunteer.id} className='selectable-row' onClick={this.onVolunteerClick.bind(this, volunteer.id)}>
                        <td>{volunteer.first_name}</td>
                        <td>{volunteer.last_name}</td>
                        <td>{volunteer.email}</td>
                        <td>{_.isEmpty(volunteer.address2) ? volunteer.address1 : volunteer.address2}, {volunteer.city}, {volunteer.state}, {volunteer.zipcode}</td>
                        <td>{volunteer.help_blurb.substring(0, HELP_BLURB_LENGTH)}</td>
                    </tr>
                );
            })
        )
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Help Type</th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderVolunteerRows()}
                </tbody>
            </table>
        );
    }
}

VolunteerTable.propTypes = {
    volunteers: PropTypes.array
};

export default VolunteerTable;
