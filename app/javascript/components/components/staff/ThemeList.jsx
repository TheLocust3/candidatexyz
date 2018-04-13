import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ThemeApi from '../../../api/theme-api';

class ThemeList extends React.Component {

    onDeleteClick(event) {
        ThemeApi.destroy(event.target.name).then(() => {
            location.reload();
        });
    }

    renderEditButtons(theme) {
        if (!theme.editable) return;

        return (
            <span className='list-meta-items'>
                <span className='mdc-list-item__meta material-icons list-meta-item' aria-label='Delete'>
                    <a href='#' className='unstyled-link' name={theme.name} onClick={this.onDeleteClick.bind(this)}>
                        delete
                    </a>
                </span>

                <span className='mdc-list-item__meta material-icons list-meta-item' aria-label='Edit'>
                    <Link className='unstyled-link' to={`/staff/themes/${theme.id}`}>
                        edit
                    </Link>
                </span>
            </span>
        )
    }

    renderThemeList() {
        return (
            this.props.themes.map((theme) => {
                return (
                    <li key={theme.id} className='mdc-list-item theme-list'>
                        <span className='mdc-list-item__text'>
                            {theme.name}

                            <span className='mdc-list-item__secondary-text'>
                                {theme.description}
                            </span>
                        </span>

                        {this.renderEditButtons(theme)}
                    </li>
                );
            })
        )
    }

    render() {
        return (
            <div className='content-5'>
                {this.renderThemeList()}
            </div>
        );
    }
}

ThemeList.propTypes = {
    themes: PropTypes.arrayOf(PropTypes.object)
};

export default ThemeList;
