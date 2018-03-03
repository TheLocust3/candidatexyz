import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Index extends React.Component {

    render() {
        return (
            <div>
                <div className="join">
                    <div className="mdc-card">
                        <div className="mdc-card__media join-card">
                            <div className="mdc-card__media-content join-media">
                                <div className="mdc-typography--headline card-title"><b>Join CandidateXYZ</b></div>

                                <p className="join-description">
                                    You should totally sign up
                                </p>

                                <div className="mdc-text-field mdc-text-field--dense" data-mdc-auto-init="MDCTextField" style={{ width: "100%" }}>
                                    <input type="text" id="join-email" className="mdc-text-field__input" />
                                    <label className="mdc-text-field__label" htmlFor="join-email">Zip Code</label>
                                    <div className="mdc-line-ripple"></div>
                                </div><br />

                                <div className="mdc-text-field mdc-text-field--dense" data-mdc-auto-init="MDCTextField" style={{ width: "100%" }}>
                                    <input type="email" id="join-email" className="mdc-text-field__input" />
                                    <label className="mdc-text-field__label" htmlFor="join-email">Email</label>
                                    <div className="mdc-line-ripple"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mdc-card__actions" dir="rtl">
                            <button className="mdc-button mdc-card__action mdc-card__action--button mdc-button--raised button" data-mdc-auto-init="MDCRipple">Sign Up</button>
                        </div>
                    </div>
                </div>

                <div className="content">
                    Hello World!
                </div>
            </div>
        );
    }
}
