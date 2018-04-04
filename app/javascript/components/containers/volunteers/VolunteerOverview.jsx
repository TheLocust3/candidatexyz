import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { fetchAllVolunteers } from '../../actions/volunteer-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import VolunteerTable from '../../components/volunteers/VolunteerTable';

class VolunteerOverview extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Volunteer Overview'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchAllVolunteers());
    }

    render() {
        return (
            <div className='volunteer-table'>
                <div className='mdc-typography--display2'><b>Volunteer Overview</b></div><br />

                <VolunteerTable volunteers={this.props.volunteers} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        volunteers: state.volunteers.volunteers,
    };
}

export default connect(mapStateToProps)(VolunteerOverview);
