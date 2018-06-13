import $ from 'jquery';
import React from 'react';

import { history } from '../../../constants';

// Shamelessly stolen from https://github.com/gkaemmer/react-fade-in/blob/master/src/FadeIn.js
class FadeInElements extends React.Component {

    constructor(props) {
        super(props);

        this.state = { completeRender: false, timer: true, maxIsVisible: 0 };
    }

    fadeTimer() {
        clearInterval(this.interval);

        const count = React.Children.count(this.props.children);
        _.range(0, count).map((i) => {
            $(`#fade-in${i}`).hide();
        });
        let i = 0;

        this.interval = setInterval(() => {
            i++;
            $(`#fade-in${i}`).fadeIn(400);
            if (i > count) clearInterval(this.interval);
    
            this.setState({ maxIsVisible: i });
        }, 100);
    }
    
    componentWillMount() {
        history.listen((location) => {
            this.setState({
                completeRender: true,
                maxIsVisible: 0,
                timer: false
            });
        });
    }

    componentDidMount() {
        this.fadeTimer();
    }

    componentDidUpdate() {
        if (this.state.completeRender) {
            this.setState({
                completeRender: false
            });
        } else if (!this.state.timer) {
            this.fadeTimer();

            this.setState({
                timer: true
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {  
        if (this.state.completeRender) {
            return null;
        }

        return React.Children.map(this.props.children, (child, i) => {
            return (
                <div id={`fade-in${i}`}>
                    {child}
                </div>
            );
        });
    }
}

export default FadeInElements;
