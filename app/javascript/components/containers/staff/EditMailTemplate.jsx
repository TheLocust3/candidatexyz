import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/base/Header';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import ContentApi from '../../../api/content-api';;

import MailTemplateForm from '../../components/staff/MailTemplateForm';

class EditMailTemplate extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isReady: false, headerImage: {}, footerBlurb: {} };
    }

    componentWillMount() {
        ContentApi.get('emailHeaderImage').then((emailHeaderImage) => {
            ContentApi.get('emailFooterBlurb').then((emailFooterBlurb) => {
                this.setState({
                    isReady: true,
                    headerImage: emailHeaderImage,
                    footerBlurb: emailFooterBlurb
                });
            });
        });
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Mail Template'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        if (!this.state.isReady) return null;

        return (
            <div className='content content-15 staff-form'>
                <Header type='headline2'>Mail Template</Header><br />

                <MailTemplateForm headerImage={this.state.headerImage.content.image} footerBlurb={this.state.footerBlurb.content.text} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(EditMailTemplate);
