import React from 'react';
import FadeIn from 'react-fade-in';

import { history } from '../../../constants';

// Shamelessly stolen from https://github.com/gkaemmer/react-fade-in/blob/master/src/FadeIn.js
class FadeInElements extends React.Component {

    constructor(props) {
        super(props);

        this.state = { completeRender: false, timer: true, maxIsVisible: 0 };
    }

    get delay() {
        return this.props.delay || 50;
    }
    
    get transitionDuration() {
        return this.props.transitionDuration || 400;
    }

    fadeTimer() {
        clearInterval(this.interval);

        const count = React.Children.count(this.props.children);
        let i = 0;

        this.interval = setInterval(() => {
            i++;
            if (i > count) clearInterval(this.interval);
    
            this.setState({ maxIsVisible: i });
        }, this.delay);
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

        const transitionDuration = this.transitionDuration;
        return (
          <div>
                {React.Children.map(this.props.children, (child, i) => {
                    return (
                        <div
                            style={{
                                transition: `opacity ${transitionDuration}ms`,
                                position: "relative",
                                opacity: this.state.maxIsVisible > i ? 1 : 0
                            }}
                        >
                            {child}
                        </div>
                    );
                })}
          </div>
        );
    }
}

export default FadeInElements;
