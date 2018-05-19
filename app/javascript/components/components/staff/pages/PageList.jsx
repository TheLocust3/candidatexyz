import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import PageApi from '../../../../api/page-api';
import { history } from '../../../../constants';
import Link from '../../base/Link';

class PageList extends React.Component {

    onDeleteClick(event) {
        event.stopPropagation();

        PageApi.destroy(event.target.name).then(() => {
            location.reload();
        });
    }

    onPanelClick(url) {
        history.push(`/staff/pages/${url}`);
    }

    renderPageList() {
        return (
            this.props.pages.map((page) => {
                return (
                    <li key={page.id} className='mdc-list-item selectable-row' onClick={() => this.onPanelClick(page.url)}>
                        <span className='mdc-list-item__text'>
                            {page.name}

                            <span className='mdc-list-item__secondary-text'>
                                {page.description}
                            </span>
                        </span>

                        <span className='list-meta-items'>
                            <span className='mdc-list-item__meta material-icons list-meta-item' aria-label='Delete'>
                                <Link to='#' className='unstyled-link delete-icon' name={page.url} onClick={this.onDeleteClick.bind(this)}>
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
            <div className='content content-5'>
                {this.renderPageList()}
            </div>
        );
    }
}

PageList.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object)
};

export default PageList;
