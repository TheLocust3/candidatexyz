import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setDocumentTitle, setFullscreen } from '../../../actions/global-actions';
import { fetchPage } from '../../../actions/page-actions';
import MDCAutoInit from '../../../components/global/MDCAutoInit';

import PageRenderer from '../../../components/staff/pages/PageRenderer';

class ShowPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Page Editor'));
        this.props.dispatch(setFullscreen(true));

        this.props.dispatch(fetchPage(this.props.match.params.url));
    }

    render() {
        if (!this.props.isReady) return null;

        return (
            <div>
                <PageRenderer page={this.props.page} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.pages.isReady,
        page: state.pages.page
    };
}

export default connect(mapStateToProps)(ShowPage);
