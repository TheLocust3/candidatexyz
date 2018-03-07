import $ from 'jquery';
import React from 'react';

export default class JoinUsForm extends React.Component {

    render() {
        return (
            <form className='join-us-form'>
                <div className="mdc-text-field" data-mdc-auto-init='MDCTextField' style={{ width: '47.5%', marginRight: '5%' }}>
                    <input type="text" id="first-name" className="mdc-text-field__input" />
                    <label className="mdc-text-field__label" htmlFor="first-name">First name</label>
                    <div className="mdc-line-ripple"></div>
                </div>

                <div className="mdc-text-field" data-mdc-auto-init='MDCTextField' style={{ width: '47.5%' }}>
                    <input type="text" id="last-name" className="mdc-text-field__input" />
                    <label className="mdc-text-field__label" htmlFor="last-name">Last name</label>
                    <div className="mdc-line-ripple"></div>
                </div><br />


                <div className="mdc-text-field" data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type="text" id="zip-code" className="mdc-text-field__input" />
                    <label className="mdc-text-field__label" htmlFor="zip-code">Zip code</label>
                    <div className="mdc-line-ripple"></div>
                </div><br />


                <div className="mdc-text-field" data-mdc-auto-init='MDCTextField' style={{ width: '47.5%', marginRight: '5%' }}>
                    <input type="text" id="email" className="mdc-text-field__input" />
                    <label className="mdc-text-field__label" htmlFor="email">Email</label>
                    <div className="mdc-line-ripple"></div>
                </div>

                <div className="mdc-text-field" data-mdc-auto-init='MDCTextField' style={{ width: '47.5%' }}>
                    <input type="text" id="cell-phone" className="mdc-text-field__input" />
                    <label className="mdc-text-field__label" htmlFor="cell-phone">Cell phone</label>
                    <div className="mdc-line-ripple"></div>
                </div>

                <div className='mdc-typography--caption'>By submitting your cell phone number you are agreeing to receive periodic text messages.</div>

                <button className="mdc-button mdc-button--raised sign-up-form-button">
                    Subscribe
                </button>
            </form>
        );
    }
}
