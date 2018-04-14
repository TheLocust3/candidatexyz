import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { fetchTheme } from '../../actions/theme-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

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
        return (
            <div className='content-bottom content-10'>
                <div className='mdc-typography--display2'>Theme Editor</div><br />
                
                <ThemeForm theme={this.props.theme} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        theme: state.themes.theme
    };
}

export default connect(mapStateToProps)(ThemeEditor);
