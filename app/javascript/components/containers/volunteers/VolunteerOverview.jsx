import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { history } from '../../../constants';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { fetchAllVolunteersBy } from '../../actions/volunteer-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import VolunteerApi from '../../../api/volunteer-api';
import Header from '../../components/base/Header';

import VolunteerTable from '../../components/volunteers/VolunteerTable';
import Pager from '../../components/global/Pager';

const VOLUNTEERS_PER_PAGE = 50;

class VolunteerOverview extends React.Component {

    constructor(props) {
        super(props);

        this.state = { numberOfPages: 0, page: 0 };
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Volunteer Overview'));
        this.props.dispatch(setBlankNavbar(true));

        VolunteerApi.getNumberOfPages(VOLUNTEERS_PER_PAGE).then((response) => {
            this.setState({
                numberOfPages: Number(response)
            });
        });

        this.setPage(this.props.location);
        history.listen((location) => {
            this.setPage(location);
        });
    }

    setPage(location, sort, reverse) {
        sort = _.isEmpty(sort) ? 'first_name' : sort

        let parsed = queryString.parse(location.search);
        let page = _.isEmpty(parsed.page) ? 0 : Number(parsed.page);
        this.setState({
            page: page
        });

        this.props.dispatch(fetchAllVolunteersBy(page, VOLUNTEERS_PER_PAGE, sort, reverse));
    }

    onHeaderClick(event, reverse) {
        this.setPage(this.props.location, event.target.id, reverse)
    }

    render() {
        return (
            <div className='content-5'>
                <Header type='headline2'><b>Volunteer Overview</b></Header><br />

                <VolunteerTable volunteers={this.props.volunteers} onHeaderClick={(event, reverse) => this.onHeaderClick(event, reverse)} /><br />

                <Pager numberOfPages={this.state.numberOfPages} page={this.state.page} url='/staff/volunteers' />
                
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
