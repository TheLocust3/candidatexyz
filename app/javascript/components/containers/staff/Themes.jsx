import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/base/Header';
import Link from '../../components/base/Link';
import ContentApi from '../../../api/content-api';
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

    onSetDefaultClick(event) {
        ContentApi.update('globalTheme', event.target.name).then(() => {
            location.reload();
        });
    }

    render() {
        return (
            <div className='content content-bottom content-10'>
                <Header type='headline2'>Theme List</Header><br />
                <Link className='link' to='/staff/themes/new'>New theme</Link><br />

                <Header type='headline6'>Current Theme: {this.props.globalTheme.name}</Header><br />
                
                <ThemeList themes={this.props.themes} globalTheme={this.props.globalTheme} onSetDefaultClick={this.onSetDefaultClick} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        themes: state.themes.themes,
        globalTheme: state.themes.globalTheme
    };
}

export default connect(mapStateToProps)(Themes);
