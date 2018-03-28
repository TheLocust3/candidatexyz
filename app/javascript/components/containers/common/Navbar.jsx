import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Parallax, Background } from 'react-parallax';
import { MDCTemporaryDrawer } from '@material/drawer';

import { MAX_MOBILE_WIDTH } from '../../../constants';
import ImageContent from '../content/ImageContent';
import SimpleLinkContent from '../content/SimpleLinkContent';
import ExternalLinkContent from '../content/ExternalLinkContent';
import JoinTeamPanel from '../../components/common/JoinTeamPanel';

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
        if (_.isEmpty(this.props.headerImage) && !this.props.blankNavbar) return null;

        let headerImage = this.props.blankNavbar ? '' : this.props.headerImage;
        let headerImageBlankHeight = this.props.blankNavbar ? '30vh' : '100vh';
        let invertedLink = this.props.blankNavbar ? 'inverted-link' : '';

        return (
            <Parallax strength={300} style={{ height: headerImageBlankHeight }}>
                <Background>
                    <img src={headerImage} style={{ height: '100vh' }} />
                </Background>

                <div className='navbar'>
                    <Link to='/home'><ImageContent identifier='logo' className='navbar-image' /></Link>

                    <div className='navbar-actions'>
                        <div><SimpleLinkContent identifier='navLink1' className={`link ${invertedLink}`} /></div>
                        <div><SimpleLinkContent identifier='navLink2' className={`link ${invertedLink}`} /></div>
                        <div><SimpleLinkContent identifier='navLink3' className={`link ${invertedLink}`} /></div>

                        <div><ExternalLinkContent identifier='navButton'><button className='mdc-button mdc-button--raised button' data-mdc-auto-init='MDCRipple'>Donate</button></ExternalLinkContent></div>
                    </div>
                </div>
            </Parallax>
        );
    }

    renderMobile() {
        if (_.isEmpty(this.props.headerImage) && !this.props.blankNavbar) return null;

        let headerImage = this.props.blankNavbar ? '' : `${this.props.headerImage}`;
        let headerImageBlankHeight = this.props.blankNavbar ? '10vh' : '100vh';

        return (
            <Parallax strength={300} style={{ height: headerImageBlankHeight }}>
                <Background>
                    <img src={headerImage} style={{ height: '100vh' }} />
                </Background>

                <header className='mdc-toolbar mdc-toolbar--fixed navbar'>
                    <div className='mdc-toolbar__row'>
                        <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
                            <Link to='/home'><ImageContent identifier='logo' className='navbar-image' /></Link>
                        </section>

                        <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                            <a className='material-icons mdc-toolbar__menu-icon navbar-menu-icon' onClick={this.onMenuClick.bind(this)}>menu</a>
                        </section>
                    </div>
                </header>

                <aside className='mdc-drawer mdc-drawer--temporary' id='mobile-navbar'>
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

                                <SimpleLinkContent identifier='navLink3' className='mdc-list-item' onClick={this.onLinkClick.bind(this)} />

                                <hr className='mdc-list-divider' />

                                <ExternalLinkContent identifier='navButton' className='mdc-list-item' onClick={this.onLinkClick.bind(this)}><span>Donate</span></ExternalLinkContent>
                            </div>
                        </nav>
                    </nav>
                </aside>
            </Parallax>
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
        headerImage: state.global.headerImage,
        blankNavbar: state.global.blankNavbar
    };
}

export default connect(mapStateToProps)(Navbar);
