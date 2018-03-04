import React from 'react';

import JoinCard from '../components/common/JoinCard';

export default class Index extends React.Component {

    render() {
        return (
            <div>
                <JoinCard />

                <div className="content">
                    Hello World!
                </div>
            </div>
        );
    }
}
