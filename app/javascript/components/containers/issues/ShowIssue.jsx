import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import ShowPost from '../posts/ShowPost'

class ShowIssue extends React.Component {

    componentDidMount() {
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div>
                <div className='issues'>
                    <span className='mdc-typography--headline'><b>Issues</b></span><br />

                    <ShowPost postType='issues' url={this.props.match.params.url} />
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(ShowIssue);
