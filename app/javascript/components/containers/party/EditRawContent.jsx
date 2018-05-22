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

        this.state = { isReady: false, partyCalendarUrl: {} };
    }

    componentWillMount() {
        ContentApi.get('partyCalendarUrl').then((partyCalendarUrl) => {
            this.setState({
                isReady: true,
                partyCalendarUrl: partyCalendarUrl
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
                <Header type='headline2'>Edit Raw Content</Header><br />

                <RawContentInlineEditor content={this.state.partyCalendarUrl} />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(EditRawContent);
