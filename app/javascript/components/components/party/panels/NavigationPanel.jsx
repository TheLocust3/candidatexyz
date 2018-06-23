import React from 'react';

import BlockContent from '../../../containers/content/BlockContent';

import PanelWrapper from '../../panels/PanelWrapper';
import BlockContainer from '../../common/blocks/BlockContainer';

export default class NavigationPanel extends React.Component {

    render() {
        return (
            <PanelWrapper className='navigation-panel'>
                <BlockContainer totalBlocks={3}>
                    <BlockContent identifier='getInvolvedBlock' />

                    <BlockContent identifier='eventsBlock' />

                    <BlockContent identifier='newsBlock' />
                </BlockContainer>
            </PanelWrapper>
        );
    }
}
