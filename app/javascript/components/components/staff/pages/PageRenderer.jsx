import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import PanelRenderer from '../panels/PanelRenderer';

class PageRenderer extends React.Component {

    render() {
        return (
            <div>
                {this.props.page.panels.map((panel, index) => {
                    return (
                        <div key={index}>
                            <PanelRenderer panel={panel} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

PageRenderer.propTypes = {
    page: PropTypes.object
};

export default PageRenderer;
