import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { fetchTheme } from '../../actions/theme-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import Header from '../../components/base/Header';

import ThemeForm from '../../components/staff/ThemeForm';

class ThemeEditor extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Theme Editor'));
        this.props.dispatch(setBlankNavbar(true));

        if (!_.isEmpty(this.props.match.params.name)) {
            this.props.dispatch(fetchTheme(this.props.match.params.name));
        }
    }

    render() {
        if (!this.props.isReady) return null;
        let theme = _.isEmpty(this.props.match.params.name) ? {} : this.props.theme;

        return (
            <div className='content content-bottom content-10'>
                <Header type='headline3'>Theme Editor</Header><br />
                
                <ThemeForm theme={theme} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.themes.isReady,
        theme: state.themes.theme
    };
}

export default connect(mapStateToProps)(ThemeEditor);
