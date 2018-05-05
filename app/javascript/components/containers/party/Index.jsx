import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchHeaderImage, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

class Index extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Home'));
    }
    
    render() {
        return (
            <div>
                Index!

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Index);
