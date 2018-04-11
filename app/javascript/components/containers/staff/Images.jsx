import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { fetchAllImages } from '../../actions/image-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import ImageList from '../../components/staff/ImageList';

class Images extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Upload Image'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchAllImages());
    }

    render() {
        return (
            <div className='content-bottom content-10'>
                <div className='mdc-typography--display2'>Image List</div><br />
                
                <ImageList images={this.props.images} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        images: state.images.images,
    };
}

export default connect(mapStateToProps)(Images);
