import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import PanelApi from '../../../../api/panel-api';
import { history } from '../../../../constants';
import Link from '../../base/Link';

class PanelList extends React.Component {

    onDeleteClick(event) {
        event.stopPropagation();

        PanelApi.destroy(event.target.name).then(() => {
            location.reload();
        });
    }

    onPanelClick(name) {
        history.push(`/staff/panels/${name}`);
    }

    renderPanelList() {
        return (
            this.props.panels.map((panel) => {
                return (
                    <li key={panel.id} className='mdc-list-item selectable-row' onClick={() => this.onPanelClick(panel.name)}>
                        <span className='mdc-list-item__text'>
                            {panel.name}

                            <span className='mdc-list-item__secondary-text'>
                                {panel.description}
                            </span>
                        </span>

                        <span className='list-meta-items'>
                            <span className='mdc-list-item__meta material-icons list-meta-item' aria-label='Delete'>
                                <Link to='#' className='unstyled-link delete-icon' name={panel.name} onClick={this.onDeleteClick.bind(this)}>
                                    delete
                                </Link>
                            </span>
                        </span>
                    </li>
                );
            })
        )
    }

    render() {
        return (
            <div className='content-5'>
                {this.renderPanelList()}
            </div>
        );
    }
}

PanelList.propTypes = {
    panels: PropTypes.arrayOf(PropTypes.object)
};

export default PanelList;
