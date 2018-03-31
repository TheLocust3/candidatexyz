import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

class Share extends React.Component {

    render() {
        return (
            <div className='share-menu'>
                <button className='mdc-fab material-icons share-button' aria-label='Share' data-mdc-auto-init='MDCRipple'>
                    <span className='mdc-fab__icon'>
                        share
                    </span>
                </button>

                <div className='share-sub-buttons'>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${this.props.url}`}><button className='mdc-fab mdc-fab--mini share-sub-button' data-mdc-auto-init='MDCRipple'>
                        <i className='fab fa-facebook-f' />
                    </button></a>

                    <a href={`http://twitter.com/share?text=${this.props.text}&url=${this.props.url}`}><button className='mdc-fab mdc-fab--mini share-sub-button' data-mdc-auto-init='MDCRipple'>
                        <i className='fab fa-twitter' />
                    </button></a>
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
