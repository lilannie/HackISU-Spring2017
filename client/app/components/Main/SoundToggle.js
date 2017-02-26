import React from 'react';

import '../../scss/soundtoggle.scss';

export default class SoundToggle extends React.Component {
    defaultProps = {        //this.props
        soundId: 0,
        soundName: 'Jazz Bass',
        url: 'clip.mp4',
    };

    state = {
        isSoundOn: true
    };

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        if (this.state.isSoundOn) {
            console.log(this.props.soundName+' is off');
            this.props.toggleOff(this.props.soundId);
            this.setState({isSoundOn: false});
        }
        // Turning on
        else {
            console.log(this.props.soundName+' is on');
            this.props.toggleOn(this.props.soundId);
            this.setState({isSoundOn: true});
        }
    }

    render() {
        return (
            <div className="sound-toggle-container col-md-1">
                <div className="switch">
                    <div className="switch-border1">
                        <div className="switch-border2">
                            <input id={'switch-'+this.props.soundId} type="checkbox"
                                onChange={this.toggle} />
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
