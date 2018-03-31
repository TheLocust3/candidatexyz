import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import ShowPost from '../posts/ShowPost'

class ShowIssue extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className='issues'>
                    <span className='mdc-typography--headline'><b>Issues</b></span><br />

                    <ShowPost postType='issues' url={this.props.match.params.url} renderAsIssue={true} />
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(ShowIssue);
