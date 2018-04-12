import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class ThemeList extends React.Component {

    renderThemeList() {
        return (
            this.props.themes.map((theme) => {
                return (
                    <Link className='unstyled-link' key={theme.id} to={`/staff/themes/${theme.id}`}>
                        <li className='mdc-list-item'>
                            <span className='mdc-list-item__text'>
                                {theme.name}
                            </span>
                        </li>
                    </Link>
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
