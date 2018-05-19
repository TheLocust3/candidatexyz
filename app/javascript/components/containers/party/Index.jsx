import React from 'react';
import { connect } from 'react-redux';

import { setDocumentTitle, setBlankNavbar } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import SlideshowContent from '../content/SlideshowContent';

class Index extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Home'));
        this.props.dispatch(setBlankNavbar(true));
    }
    
    render() {
        return (
            <div className='content'>
                <SlideshowContent identifier='indexSlideshow' time={1000}></SlideshowContent>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Index);
