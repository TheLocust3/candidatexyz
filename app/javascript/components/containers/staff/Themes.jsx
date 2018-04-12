import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { fetchAllThemes } from '../../actions/theme-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import ThemeList from '../../components/staff/ThemeList';

class Themes extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Themes'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchAllThemes());
    }

    render() {
        return (
            <div className='content-bottom content-10'>
                <div className='mdc-typography--display2'>Theme List</div><br />
                <Link className='link' to='/staff/themes/new'>New theme</Link><br />
                
                <ThemeList themes={this.props.themes} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        themes: state.themes.themes,
    };
}

export default connect(mapStateToProps)(Themes);
