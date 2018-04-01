import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Corner, AnchorMargin } from '@material/menu';
import { MDCSnackbar } from '@material/snackbar';
import { Link } from 'react-router-dom';
import { MDCMenu } from '@material/menu';

import { history } from '../../../constants';
import { fetchCurrentUser } from '../../actions/user-actions';
import { setEdit } from '../../actions/content-actions';
import AuthApi from '../../../api/auth-api';

import EditContent from './EditContent';

class AdminOverlay extends React.Component {

    constructor(props) {
        super(props);

        this.state = { settingsMenuHidden: true }
    }

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());

        history.listen((event) => {
            this.props.dispatch(setEdit(false));
        })
    }

    onEditClick(event) {
        this.props.dispatch(setEdit(true));
        
        const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
        snackbar.show({ message: 'Edit Mode', timeout: 999999999, actionText: 'Done', actionHandler: this.onDoneClick.bind(this) }); // TODO: bit of a hack
    }

    onDoneClick(event) {
        this.props.dispatch(setEdit(false));
    }

    onSettingsClick(event) {
        let menu = new MDCMenu(document.querySelector('#admin-overlay-settings'));
        menu.setAnchorCorner(Corner.BOTTOM_START);
        menu.setAnchorMargin({ top: 25, right: 25 });
        menu.open = !menu.open;
    }

    onLogoutClick(event) {
        AuthApi.signOut().then(() => {
            window.location.reload();
        })
    }

    renderEditSnackbar() {
        return (
            <div className='mdc-snackbar' aria-live='assertive' aria-atomic='true' aria-hidden='true'>
                <div className='mdc-snackbar__text'></div>

                <div className='mdc-snackbar__action-wrapper'>
                    <button type='button' className='mdc-snackbar__action-button'></button>
                </div>
            </div>
        )
    }

    renderButtons() {
        if (this.props.edit) return;

        return (
            <div>
                <button className='mdc-fab material-icons overlayActionIcon' aria-label='Edit' onClick={this.onEditClick.bind(this)} data-mdc-auto-init='MDCRipple'>
                    <span className='mdc-fab__icon'>
                        edit
                    </span>
                </button>
            </div>
        )
    }

    render() {
        if (!this.props.isReady || _.isEmpty(this.props.user)) return null;

        return (
            <div className='overlay'>
                <EditContent />

                {this.renderEditSnackbar()}

                <div className='overlayActionsLeft'>
                    {this.renderButtons()}
                </div>

                <div className='overlayActionsRight'>
                    <div className='mdc-menu-anchor'>
                        <button className='mdc-fab material-icons' aria-label='Settings' onClick={this.onSettingsClick.bind(this)} data-mdc-auto-init='MDCRipple'>
                            <span className='mdc-fab__icon'>
                                settings
                            </span>
                        </button>

                        <div id='admin-overlay-settings' className='mdc-menu' tabIndex='-1'>
                            <ul className='mdc-menu__items mdc-list' role='menu' aria-hidden='true'>
                                <Link to='/edit-user' className='menu-item-link'>
                                    <li className='mdc-list-item' role='menuitem' tabIndex='0'>
                                        Settings
                                    </li>
                                </Link>

                                <Link to='/staff-management' className='menu-item-link'>
                                    <li className='mdc-list-item' role='menuitem' tabIndex='0'>
                                        Staff Management
                                    </li>
                                </Link>

                                <Link to='/edit-content' className='menu-item-link'>
                                    <li className='mdc-list-item' role='menuitem' tabIndex='0'>
                                        Edit Other Content
                                    </li>
                                </Link>

                                <li className='mdc-list-item' role='menuitem' tabIndex='0' onClick={this.onLogoutClick.bind(this)}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.users.isReady,
        user: state.users.currentUser,
        edit: state.content.edit,
    };
}

export default connect(mapStateToProps)(AdminOverlay);
