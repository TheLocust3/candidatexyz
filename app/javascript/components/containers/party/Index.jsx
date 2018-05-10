import React from 'react';
import { connect } from 'react-redux';

import { setDocumentTitle, setBlankNavbar } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

class Index extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Home'));
        this.props.dispatch(setBlankNavbar(true));
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
