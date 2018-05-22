import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import { MDCTemporaryDrawer } from '@material/drawer';

import Link from '../../../components/base/Link';
import Button from '../../../components/base/Button';
import { MAX_MOBILE_WIDTH } from '../../../../constants';
import TextContent from '../../content/TextContent';
import ImageContent from '../../content/ImageContent';
import SimpleLinkContent from '../../content/SimpleLinkContent';
import ExternalLinkContent from '../../content/ExternalLinkContent';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lastRenderedWidth: $(document).width() };
    }

    updateDimensions() {
        let width = $(document).width();
        if ((this.state.lastRenderedWidth > MAX_MOBILE_WIDTH && width < MAX_MOBILE_WIDTH) || (this.state.lastRenderedWidth < MAX_MOBILE_WIDTH && width > MAX_MOBILE_WIDTH)) {
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

        let drawer = new MDCTemporaryDrawer(document.querySelector('#mobile-navbar'));
        drawer.open = true;
    }

    onLinkClick() {
        let drawer = new MDCTemporaryDrawer(document.querySelector('#mobile-navbar'));
        drawer.open = false;
    }

    renderDeskop() {        
        return (
            <div className='mdc-toolbar mdc-toolbar--fixed navbar'>
                <div className='mdc-toolbar__row'>
                    <section className='mdc-toolbar__section mdc-toolbar__section--align-start relative'>
                        <Link to='/'><ImageContent identifier='logo' className='navbar-image middle' /></Link>
                    </section>

                    <section className='mdc-toolbar__section mdc-toolbar__section--align-end relative'>
                        <div className='middle' style={{ width: '100%' }}>
                            <div style={{ float: 'right' }}>
                                <span className='navbar-item'><SimpleLinkContent identifier='navLink1' className='link' /></span>
                                <span className='navbar-item'><SimpleLinkContent identifier='navLink2' className='link navbar-item' /></span>
                                <span className='navbar-item'><SimpleLinkContent identifier='navLink3' className='link navbar-item' /></span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    renderMobile() {
        return (
            <div>
                <header className='mdc-toolbar mdc-toolbar--fixed navbar'>
                    <div className='mdc-toolbar__row'>
                        <section className='mdc-toolbar__section mdc-toolbar__section--align-start relative'>
                            <Link to='/'><ImageContent identifier='logo' className='navbar-image middle' /></Link>
                        </section>

                        <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                            <Link className='material-icons mdc-toolbar__menu-icon navbar-menu-icon' onClick={this.onMenuClick.bind(this)} unstyled>menu</Link>
                        </section>
                    </div>
                </header>

                <aside className='mdc-drawer mdc-drawer--temporary' id='mobile-navbar'>
                    <nav className='mdc-drawer__drawer'>
                        <header className='mdc-drawer__header'>
                            <div className='mdc-drawer__header-content mdc-theme--text-primary-on-primary mdc-theme--primary-bg'>
                                <TextContent identifier='websiteTitle' style={{ color: 'white' }} />
                            </div>
                        </header>

                        <nav className='mdc-drawer__content mdc-list-group'>
                            <div className='mdc-list'>
                                <SimpleLinkContent identifier='navLink1' className='mdc-list-item' onClick={this.onLinkClick.bind(this)} />

                                <SimpleLinkContent identifier='navLink2' className='mdc-list-item' onClick={this.onLinkClick.bind(this)} />

                                <SimpleLinkContent identifier='navLink3' className='mdc-list-item' onClick={this.onLinkClick.bind(this)} />
                            </div>
                        </nav>
                    </nav>
                </aside>
            </div>
        )
    }

    render() {
        if (this.props.fullscreen) return null;

        if (this.state.lastRenderedWidth < MAX_MOBILE_WIDTH) {
            return this.renderMobile();
        } else {
            return this.renderDeskop();
        }
    }
}

function mapStateToProps(state) {
    return {
        fullscreen: state.global.fullscreen,
        blankNavbar: state.global.blankNavbar
    };
}

export default connect(mapStateToProps)(Navbar);
