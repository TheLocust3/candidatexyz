import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Fab from '../base/Fab';

class Share extends React.Component {

    render() {
        return (
            <div className='share-menu'>
                <Fab className='material-icons share-button' aria-label='Share'>
                    <span className='mdc-fab__icon'>
                        share
                    </span>
                </Fab>

                <div className='share-sub-buttons'>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${this.props.url}`}><Fab className='share-sub-button' condensed={true}>
                        <i className='fab fa-facebook-f' />
                    </Fab></a>

                    <a href={`http://twitter.com/share?text=${this.props.text}&url=${this.props.url}`}><Fab className='share-sub-button' condensed={true}>
                        <i className='fab fa-twitter' />
                    </Fab></a>
                </div>
            </div>
        )
    }
}

Share.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string
};

export default Share;
