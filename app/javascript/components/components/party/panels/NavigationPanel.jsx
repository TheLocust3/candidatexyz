import React from 'react';

import Header from '../../base/Header';
import TextContent from '../../../containers/content/TextContent';

import PanelWrapper from '../../panels/PanelWrapper';
import BlockContainer from './blocks/BlockContainer';
import BlockFontImage from './blocks/BlockFontImage';
import Block from './blocks/Block';

export default class NavigationPanel extends React.Component {

    render() {
        return (
            <PanelWrapper className='navigation-panel'>
                <BlockContainer>
                    <Block totalBlocks={3} color={1} to='/get-involved'>
                        <BlockFontImage totalBlocks={3} type='group' />
                        <br />

                        <Header type='headline4'>Get Involved</Header>
                    </Block>

                    <Block totalBlocks={3} color={2} to='/events'>
                        <BlockFontImage totalBlocks={3} type='event' />
                        <br />

                        <Header type='headline4'>Events</Header>
                    </Block>

                    <Block totalBlocks={3} color={3} to='/news'>
                        <BlockFontImage totalBlocks={3} type='library_books' />
                        <br />

                        <Header type='headline4'>News</Header>
                    </Block>
                </BlockContainer>
            </PanelWrapper>
        );
    }
}
