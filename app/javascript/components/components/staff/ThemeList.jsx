import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class ThemeList extends React.Component {

    renderEditButton(theme) {
        if (!theme.editable) return;

        return (
            <span className='mdc-list-item__meta material-icons' aria-label='Edit'>
                <Link className='unstyled-link' to={`/staff/themes/${theme.id}`}>
                    edit
                </Link>
            </span>
        )
    }

    renderThemeList() {
        return (
            this.props.themes.map((theme) => {
                return (
                    <li key={theme.id} className='mdc-list-item'>
                        <span className='mdc-list-item__text'>
                            {theme.name}

                            <span className='mdc-list-item__secondary-text'>
                                {theme.description}
                            </span>
                        </span>

                        {this.renderEditButton(theme)}
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
