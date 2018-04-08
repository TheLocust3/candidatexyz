import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../base/Button';

class Share extends React.Component {

    render() {
        return (
            <div className='share-menu'>
                <Button className='material-icons share-button' fab={true} aria-label='Share'>
                    <span className='mdc-fab__icon'>
                        share
                    </span>
                </Button>

                <div className='share-sub-buttons'>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${this.props.url}`}><Button className='share-sub-button' fab={true} condensed={true}>
                        <i className='fab fa-facebook-f' />
                    </Button></a>

                    <a href={`http://twitter.com/share?text=${this.props.text}&url=${this.props.url}`}><Button className='share-sub-button' fab={true} condensed={true}>
                        <i className='fab fa-twitter' />
                    </Button></a>
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
