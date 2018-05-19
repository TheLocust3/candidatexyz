import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import Header from '../../../components/base/Header';
import Link from '../../../components/base/Link';
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
            <div className='content content-bottom content-10'>
                <Header type='headline2'>Page List</Header><br />
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
