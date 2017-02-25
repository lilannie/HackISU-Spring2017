import React from 'react';
import Draggable from 'react-draggable';

import '../scss/main.scss';

export default class SoundButton extends React.Component {
    defaultProps = {
        soundId: 0,
        soundName: 'Jazz Bass'
    };

    state = {
        soundName: 'Jazz Bass',
        activeDrags: 0,
        zIndex: 0,
        controlledPosition: {
            x: 0, y: 0
        }
    };

    constructor(props) {
        super(props);

        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    onStart(e) {
        this.setState({
            activeDrags: ++this.state.activeDrags,
            zIndex: 2
        });
    };

    onStop(e) {
        this.setState({
            activeDrags: --this.state.activeDrags,
            zIndex: 0,
            // controlledPosition: {
            //     x: e.clientX,
            //     y: e.clientY
            // }
        });
    };

    handleDrag(e, pos) {
        const {x, y} = this.state.controlledPosition;
        // this.setState({
        //     controlledPosition: {
        //         x: x,
        //         y: y
        //     }
        // });
    };


    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {controlledPosition} = this.state;

        return (
            <Draggable id={'sound-' + this.props.soundId}
                       onDrag={this.handleDrag}
                       position={controlledPosition}
                       {...dragHandlers}>
                <div className="handle sound-button-container col-md-2"
                     style={{zIndex: this.state.zIndex}}>
                    <button className="sound-button btn">
                        <i className="fa fa-music fa-2x"></i>
                        <h4>{this.state.soundName}</h4>
                    </button>
                    <div>
                        x: {controlledPosition.x.toFixed(0)}, y: {controlledPosition.y.toFixed(0)}
                    </div>
                </div>
            </Draggable>
        );
    }
}

