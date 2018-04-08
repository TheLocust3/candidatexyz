import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Corner, AnchorMargin } from '@material/menu';
import { MDCSnackbar } from '@material/snackbar';
import { Link } from 'react-router-dom';
import { MDCMenu } from '@material/menu';

import Button from '../../components/base/Button';
import { history } from '../../../constants';
import { fetchCurrentUser } from '../../actions/staff-actions';
import { setEdit, popContentHistory } from '../../actions/content-actions';
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

    onUndoClick(event) {
        this.props.dispatch(popContentHistory());
    }

    onDoneClick(event) {
        this.props.dispatch(setEdit(false));
    }

    onSettingsClick(event) {
        let menu = new MDCMenu(document.querySelector('#admin-overlay-settings'));
        menu.setAnchorCorner(Corner.BOTTOM_START);
        menu.setAnchorMargin({ top: -25, right: 25 });
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
        if (this.props.edit) {
            return (
                <div>
                    <Button className='material-icons overlay-action-icon' fab={true} aria-label='Undo' onClick={this.onUndoClick.bind(this)}>
                        <span className='mdc-fab__icon'>
                            undo
                        </span>
                    </Button>
                </div>
            )
        }

        return (
            <div>
                <Button className='material-icons overlay-action-icon' fab={true} aria-label='Edit' onClick={this.onEditClick.bind(this)}>
                    <span className='mdc-fab__icon'>
                        edit
                    </span>
                </Button>
            </div>
        )
    }

    render() {
        if (!this.props.isReady || _.isEmpty(this.props.user)) return null;

        return (
            <div className='overlay'>
                <EditContent />

                {this.renderEditSnackbar()}

                <div className='overlay-actions-left'>
                    {this.renderButtons()}
                </div>

                <div className='overlay-actions-right'>
                    <Link to='/staff/mail' style={{ marginRight: '5%' }}>
                        <Button className='material-icons' fab={true} aria-label='Mail'>
                            <span className='mdc-fab__icon'>
                                mail
                            </span>
                        </Button>
                    </Link>

                    <Button className='material-icons' fab={true} aria-label='Settings' onClick={this.onSettingsClick.bind(this)}>
                        <span className='mdc-fab__icon'>
                            settings
                        </span>
                    </Button>

                    <div className='mdc-menu-anchor'>
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

                                <Link to='/staff/messages' className='menu-item-link'>
                                    <li className='mdc-list-item' role='menuitem' tabIndex='0'>
                                        Messages
                                    </li>
                                </Link>

                                <Link to='/staff/volunteers' className='menu-item-link'>
                                    <li className='mdc-list-item' role='menuitem' tabIndex='0'>
                                        Volunteers
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
        isReady: state.staff.isReady,
        user: state.staff.currentUser,
        edit: state.content.edit,
        contentHistory: state.content.contentHistory
    };
}

export default connect(mapStateToProps)(AdminOverlay);
