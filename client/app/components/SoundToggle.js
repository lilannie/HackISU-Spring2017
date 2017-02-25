import React from 'react';

import '../scss/soundtoggle.scss';

export default class SoundToggle extends React.Component {
    defaultProps = {
        soundId: 0,
        soundName: 'Jazz Bass'
    };

    state = {
        soundName: 'Jazz Bass',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sound-toggle-container col-md-1">
                <div className="switch">
                    <div className="switch-border1">
                        <div className="switch-border2">
                            <input id={'switch-'+this.props.soundId} type="checkbox"/>
                            <label htmlFor={'switch-'+this.props.soundId}></label>
                            <div className="switch-top"></div>
                            <div className="switch-shadow"></div>
                            <div className="switch-handle"></div>
                            <div className="switch-handle-top"></div>
                            <div className="switch-handle-bottom"></div>
                            <div className="switch-handle-base"></div>
                            <div className="switch-led switch-led-green">
                                <div className="switch-led-border">
                                    <div className="switch-led-light">
                                        <div className="switch-led-glow"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className="t-h5">{this.props.soundName}</h5>
            </div>
        );
    }
}

