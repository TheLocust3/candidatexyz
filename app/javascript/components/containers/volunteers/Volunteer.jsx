import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { VolunteerApi } from 'candidatexyz-common-js';

import Header from '../../components/base/Header';
import Link from '../../components/base/Link';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { VolunteerActions } from 'candidatexyz-common-js';
import { history } from '../../../constants';

import ShowVolunteer from '../../components/volunteers/ShowVolunteer';

class Volunteer extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Volunteer Overview'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(VolunteerActions.fetchVolunteer(this.props.match.params.id));
    }

    onDeleteClick() {
        VolunteerApi.destroy(this.props.match.params.id).then(() => {
            history.push('/staff/volunteers');
        });
    }

    render() {
        if (_.isEmpty(this.props.volunteer)) return null;

        return (
            <div className='content content-15 staff-form'>
                <Header type='headline2'><b>Volunteer</b></Header><br />
                <Link to='#' className='link' onClick={this.onDeleteClick.bind(this)}>Delete</Link><br /><br />

                <ShowVolunteer volunteer={this.props.volunteer} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        volunteer: state.volunteers.volunteer
    };
}

export default connect(mapStateToProps)(Volunteer);
