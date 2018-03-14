import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

import { MAX_MOBILE_WIDTH } from '../../../constants';
import ImageContent from '../../containers/content/ImageContent';
import SimpleLinkContent from '../../containers/content/SimpleLinkContent';
import ExternalLinkContent from '../../containers/content/ExternalLinkContent';

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lastRenderedWidth: $(document).width() };
    }

    updateDimensions() {
        let width = $(document).width();
        if (this.state.lastRenderedWidth > MAX_MOBILE_WIDTH && width < MAX_MOBILE_WIDTH) {
            this.setState({
                lastRenderedWidth: width
            });

            this.forceUpdate();
        } else if (this.state.lastRenderedWidth < MAX_MOBILE_WIDTH && width > MAX_MOBILE_WIDTH) {
            this.setState({
                lastRenderedWidth: width
            });
            
            this.forceUpdate();
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.updateDimensions());
    }

    onMenuClick() {
        event.preventDefault()

        let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
        drawer.open = true;
    }

    onLinkClick() {
        let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
        drawer.open = false;
    }

    renderDeskop() {
        return (
            <div className='header-image'>
                <div className='navbar'>
                    <Link to='/'><ImageContent identifier='logo' className='navbar-image' /></Link>

                    <div className='navbar-actions'>
                        <div className='button-cell'><SimpleLinkContent identifier='navLink1' className='link' /></div>
                        <div className='button-cell'><SimpleLinkContent identifier='navLink2' className='link' /></div>
                        <div className='button-cell'><ExternalLinkContent identifier='navButton'><button className='mdc-button mdc-button--raised button' data-mdc-auto-init='MDCRipple'>Donate</button></ExternalLinkContent></div>
                    </div>
                </div>
            </div>
        );
    }

    renderMobile() {
        return (
            <div className='header-image'>
                <header className='mdc-toolbar mdc-toolbar--fixed navbar'>
                    <div className='mdc-toolbar__row'>
                        <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
                            <Link to='/'><ImageContent identifier='logo' className='navbar-image' /></Link>
                        </section>

                        <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                            <a className='material-icons mdc-toolbar__menu-icon navbar-menu-icon' onClick={this.onMenuClick.bind(this)}>menu</a>
                        </section>
                    </div>
                </header>

                <aside className='mdc-drawer mdc-drawer--temporary'>
                    <nav className='mdc-drawer__drawer'>
                        <header className='mdc-drawer__header'>
                            <div className='mdc-drawer__header-content mdc-theme--text-primary-on-primary mdc-theme--primary-bg'>
                                CandidateXYZ
                            </div>
                        </header>

                        <nav className='mdc-drawer__content mdc-list-group'>
                            <div className='mdc-list'>
                                <SimpleLinkContent identifier='navLink1' className='mdc-list-item' onClick={this.onLinkClick.bind(this)} />

                                <SimpleLinkContent identifier='navLink2' className='mdc-list-item' onClick={this.onLinkClick.bind(this)} />

                                <hr className='mdc-list-divider' />

                                <ExternalLinkContent identifier='navButton' className='mdc-list-item' onClick={this.onLinkClick.bind(this)}><span>Donate</span></ExternalLinkContent>
                            </div>
                        </nav>
                    </nav>
                </aside>
            </div>
        )
    }

    render() {
        if (this.state.lastRenderedWidth < MAX_MOBILE_WIDTH) {
            return this.renderMobile();
        } else {
            return this.renderDeskop();
        }
    }
}
