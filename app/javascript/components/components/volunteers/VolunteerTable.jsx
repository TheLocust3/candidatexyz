import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { history } from '../../../constants';

const HELP_BLURB_LENGTH = 50;

class VolunteerTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = { descending: false, sort: 'first_name' };
    }

    onVolunteerClick(id, event) {
        history.push(`/staff/volunteers/${id}`)
    }

    renderVolunteerRows() {
        if (_.isEmpty(this.props.volunteers)) return;

        return (
            this.props.volunteers.map((volunteer) => {
                return (
                    <tr key={volunteer.id} className='selectable-row' onClick={this.onVolunteerClick.bind(this, volunteer.id)}>
                        <td>{volunteer.firstName}</td>
                        <td>{volunteer.lastName}</td>
                        <td>{volunteer.email}</td>
                        <td>{_.isEmpty(volunteer.address2) ? volunteer.address1 : volunteer.address2}, {volunteer.city}, {volunteer.state}, {volunteer.zipcode}</td>
                        <td>{_.isEmpty(volunteer.helpBlurb) ? '' : volunteer.helpBlurb.substring(0, HELP_BLURB_LENGTH)}</td>
                    </tr>
                );
            })
        )
    }

    onHeaderClick(event) {
        let descending = !this.state.descending;
        if (this.state.sort != event.target.id) {
            descending = false;
        }

        this.setState({
            descending: descending,
            sort: event.target.id
        });

        this.props.onHeaderClick(event, descending);
    }

    renderArrow(sort) {
        if (sort != this.state.sort) return;

        if (this.state.descending) {
            return <b>⋁</b>;
        } else {
            return <b>⋀</b>;
        }
    }

    render() {
        return (
            <table>
                <thead>
                    <tr className='selectable-header'>
                        <th id='first_name' onClick={this.onHeaderClick.bind(this)}>First Name {this.renderArrow('first_name')}</th>
                        <th id='last_name' onClick={this.onHeaderClick.bind(this)}>Last Name  {this.renderArrow('last_name')}</th>
                        <th id='email' onClick={this.onHeaderClick.bind(this)}>Email {this.renderArrow('email')}</th>
                        <th id='address1' onClick={this.onHeaderClick.bind(this)}>Address {this.renderArrow('address1')}</th>
                        <th id='help_blurb' onClick={this.onHeaderClick.bind(this)}>Help Type {this.renderArrow('help_blurb')}</th>
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
    volunteers: PropTypes.array,
    onHeaderClick: PropTypes.func.isRequired
};

export default VolunteerTable;
