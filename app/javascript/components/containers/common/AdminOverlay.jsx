import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Corner, AnchorMargin } from '@material/menu';

import { fetchCurrentUser } from '../../actions/user-actions';
import { toggleEdit } from '../../actions/content-actions';

class AdminOverlay extends React.Component {

    constructor(props) {
        super(props);

        this.state = { settingsMenuHidden: true }
    }

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    onEditClick(event) {
        this.props.dispatch(toggleEdit());
    }

    onSettingsClick(event) {
        let menu = new mdc.menu.MDCMenu(document.querySelector('.mdc-menu'));
        menu.setAnchorCorner(Corner.BOTTOM_START);
        menu.setAnchorMargin({ top: 25, right: 25 });
        menu.open = !menu.open;
    }

    render() {
        if (!this.props.isReady || _.isEmpty(this.props.user)) return null;

        return (
            <div className='overlay'>
                <div className='overlayActionsLeft'>
                    <button className='mdc-fab material-icons overlayActionIcon' aria-label='Preview' data-mdc-auto-init='MDCRipple'>
                        <span className='mdc-fab__icon'>
                            visibility
                        </span>
                    </button>

                    <button className='mdc-fab material-icons overlayActionIcon' aria-label='Edit' onClick={this.onEditClick.bind(this)} data-mdc-auto-init='MDCRipple'>
                        <span className='mdc-fab__icon'>
                            build
                        </span>
                    </button>
                </div>

                <div className='overlayActionsRight'>
                    <div className='mdc-menu-anchor'>
                        <button className='mdc-fab material-icons' aria-label='Settings' onClick={this.onSettingsClick.bind(this)} data-mdc-auto-init='MDCRipple'>
                            <span className='mdc-fab__icon'>
                                settings
                            </span>
                        </button>

                        <div className='mdc-menu' tabIndex='-1'>
                            <ul className='mdc-menu__items mdc-list' role='menu' aria-hidden='true'>
                                <li className='mdc-list-item' role='menuitem' tabIndex='0'>
                                    Logout
                                </li>

                                <li className='mdc-list-item' role='menuitem' tabIndex='0'>
                                    Settings
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
        user: state.users.user,
        edit: state.content.edit
    };
}

export default connect(mapStateToProps)(AdminOverlay);
