import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setBlankNavbar, setDocumentTitle } from '../../../actions/global-actions';
import { fetchAllPages } from '../../../actions/page-actions';
import MDCAutoInit from '../../../components/global/MDCAutoInit';

import PageList from '../../../components/staff/pages/PageList';

class Pages extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Pages'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchAllPages());
    }

    render() {
        if (!this.props.isReady) return null;

        return (
            <div className='content-bottom content-10'>
                <div className='mdc-typography--display2'>Page List</div><br />
                <Link className='link' to='/staff/pages/new'>New page</Link><br />
                
                <PageList pages={this.props.pages} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.pages.isReady,
        pages: state.pages.pages
    };
}

export default connect(mapStateToProps)(Pages);
