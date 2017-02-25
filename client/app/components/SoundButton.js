import React from 'react';

import '../scss/main.scss';

export default class SoundButton extends React.Component {
    defaultProps = {
        soundName: 'Jazz Bass'
    };

    state = {
        soundName: 'Jazz Bass'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sound-button-container col-md-2">
                <button className="sound-button btn">
                    <i className="fa fa-music fa-2x"></i>
                    <h4>{this.state.soundName}</h4>
                </button>
            </div>
        );
    }
}

