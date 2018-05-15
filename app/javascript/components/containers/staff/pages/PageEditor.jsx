import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import Header from '../../../components/base/Header';
import Link from '../../../components/base/Link';
import { setBlankNavbar, setDocumentTitle } from '../../../actions/global-actions';
import { fetchPage } from '../../../actions/page-actions';
import { fetchAllPanels } from '../../../actions/panel-actions';
import MDCAutoInit from '../../../components/global/MDCAutoInit';

import PageForm from '../../../components/staff/pages/PageForm';

class PageEditor extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Page Editor'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchAllPanels());

        if (!_.isEmpty(this.props.match.params.url)) {
            this.props.dispatch(fetchPage(this.props.match.params.url));
        }
    }

    render() {
        if ((!_.isEmpty(this.props.match.params.url) && !this.props.isReady) || !this.props.arePanelsReady) return null;
        let page = _.isEmpty(this.props.match.params.url) ? {} : this.props.page;

        return (
            <div className='content-bottom content-5'>
                <Header type='headline2'>Page Editor</Header><br />
                <Link className='link' to={`/staff/pages/${page.url}/show`}>Preview Page</Link><br />
                
                <PageForm page={page} allPanels={this.props.allPanels} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.pages.isReady,
        page: state.pages.page,
        arePanelsReady: state.panels.isReady,
        allPanels: state.panels.panels
    };
}

export default connect(mapStateToProps)(PageEditor);
