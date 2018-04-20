import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import PageApi from '../../../../api/page-api';
import { history } from '../../../../constants';

class PageList extends React.Component {

    onDeleteClick(event) {
        event.stopPropagation();

        PageApi.destroy(event.target.name).then(() => {
            location.reload();
        });
    }

    onPanelClick(name) {
        history.push(`/staff/pages/${name}`);
    }

    renderPageList() {
        return (
            this.props.pages.map((page) => {
                return (
                    <li key={page.id} className='mdc-list-item selectable-row' onClick={() => this.onPanelClick(page.name)}>
                        <span className='mdc-list-item__text'>
                            {page.name}

                            <span className='mdc-list-item__secondary-text'>
                                {page.description}
                            </span>
                        </span>

                        <span className='list-meta-items'>
                            <span className='mdc-list-item__meta material-icons list-meta-item' aria-label='Delete'>
                                <a href='#' className='unstyled-link delete-icon' name={page.name} onClick={this.onDeleteClick.bind(this)}>
                                    delete
                                </a>
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
                {this.renderPageList()}
            </div>
        );
    }
}

PageList.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object)
};

export default PageList;
