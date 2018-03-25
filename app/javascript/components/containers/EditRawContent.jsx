import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar } from '../actions/global-actions';
import ContentApi from '../../api/content-api';
import MDCAutoInit from '../components/common/MDCAutoInit';
import RawContentInlineEditor from '../components/content/edit/RawContentInlineEditor';

class EditRawContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isReady: false, indexBackground: {}, joinTeamBackground: {}, meetBackground: {} };
    }

    componentWillMount() {
        ContentApi.get('indexBackground').then((indexBackground) => {
            ContentApi.get('joinTeamBackground').then((joinTeamBackground) => {
                ContentApi.get('meetBackground').then((meetBackground) => {
                    this.setState({
                        isReady: true,
                        indexBackground: indexBackground,
                        joinTeamBackground: joinTeamBackground,
                        meetBackground: meetBackground
                    });
                });
            });
        });
    }

    componentDidMount() {
        this.props.dispatch(setBlankNavbar(true));
    }

    componentWillUnmount() {
        this.props.dispatch(setBlankNavbar(false));
    }

    render() {
        if (!this.state.isReady) return null;

        return (
            <div className='content edit-raw-content'>
                <div className='mdc-typography--display3'><b>Edit Raw Content</b></div><br />

                <RawContentInlineEditor content={this.state.indexBackground} dispatch={this.props.dispatch} /><br />
                
                <RawContentInlineEditor content={this.state.joinTeamBackground} dispatch={this.props.dispatch} /><br />
                
                <RawContentInlineEditor content={this.state.meetBackground} dispatch={this.props.dispatch} />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(EditRawContent);
