import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Link from '../base/Link';
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
                    <Link to={`https://www.facebook.com/sharer/sharer.php?u=${this.props.url}`} unstyled>
                        <Fab className='share-sub-button' condensed={true}>
                            <i className='fab fa-facebook-f' />
                        </Fab>
                    </Link>

                    <Link to={`http://twitter.com/share?text=${this.props.text}&url=${this.props.url}`}>
                        <Fab className='share-sub-button' condensed={true}>
                            <i className='fab fa-twitter' />
                        </Fab>
                    </Link>
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
