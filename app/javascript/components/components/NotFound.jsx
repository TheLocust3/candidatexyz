import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../actions/global-actions';
import Header from '../components/base/Header';

class NotFound extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Page Not Found'));
        this.props.dispatch(setBlankNavbar(true));
    }
    
    render() {
        return (
            <div className='content-10'>
                <Header type='display3'>Page Not Found</Header>

                <p>
                    You've managed to find a page that doesn't exist!
                </p>

                <br /><br /><br /><br />
            </div>
        );
    }
}

export default connect()(NotFound);
