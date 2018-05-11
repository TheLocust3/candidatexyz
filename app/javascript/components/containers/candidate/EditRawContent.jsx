import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import Header from '../../components/base/Header';
import ContentApi from '../../../api/content-api';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import RawContentInlineEditor from '../../components/content/edit/RawContentInlineEditor';

class EditRawContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isReady: false, indexBackground: {}, joinTeamBackground: {}, meetBackground: {}, voluneteerHelpOptions: {} };
    }

    componentWillMount() {
        ContentApi.get('indexBackground').then((indexBackground) => {
            ContentApi.get('joinTeamBackground').then((joinTeamBackground) => {
                ContentApi.get('meetBackground').then((meetBackground) => {
                    ContentApi.get('voluneteerHelpOptions').then((voluneteerHelpOptions) => {
                        this.setState({
                            isReady: true,
                            indexBackground: indexBackground,
                            joinTeamBackground: joinTeamBackground,
                            meetBackground: meetBackground,
                            voluneteerHelpOptions: voluneteerHelpOptions
                        });
                    });
                });
            });
        });
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Edit Content'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        if (!this.state.isReady) return null;

        return (
            <div className='content edit-raw-content'>
                <Header type='display3'><b>Edit Raw Content</b></Header><br />

                <RawContentInlineEditor content={this.state.indexBackground} /><br />
                
                <RawContentInlineEditor content={this.state.joinTeamBackground} /><br />
                
                <RawContentInlineEditor content={this.state.meetBackground} />

                <RawContentInlineEditor content={this.state.voluneteerHelpOptions} />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(EditRawContent);
