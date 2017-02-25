import React from 'react';
import Draggable from 'react-draggable';

import '../scss/main.scss';

export default class SoundButton extends React.Component {
    defaultProps = {
        soundName: 'Jazz Bass'
    };

    state = {
        soundName: 'Jazz Bass',
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        zIndex: 0
    };

    constructor(props) {
        super(props);
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    onStart() {
        this.setState(
            {
                activeDrags: ++this.state.activeDrags,
                zIndex: 2
            }
        );
    };

    onStop() {
        this.setState(
            {
                activeDrags: --this.state.activeDrags,
                zIndex: 0
            }
        );
    };

    handleDrag(e, ui) {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: ui.deltaX,
                y: ui.deltaY,
            }
        });
    };

    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition} = this.state;

        return (
        <Draggable
                   onDrag={this.handleDrag} {...dragHandlers}>
            <div className="handle sound-button-container col-md-2"
                 style={{ zIndex: this.state.zIndex}}>
                <button className="sound-button btn">
                    <i className="fa fa-music fa-2x"></i>
                    <h4>{this.state.soundName}</h4>
                </button>
                <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
            </div>
        </Draggable>
        );
    }
}

