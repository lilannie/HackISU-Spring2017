import React from 'react';

import SoundButton from './SoundButton';
import SoundToggle from './SoundToggle';

import '../scss/main.scss';

export default class SoundGroup extends React.Component {
    defaultProps = {
        groupTitle: 'Drums',
        sounds: [
            {
                id: 0,
                name: 'Jazz Bass'
            },
            {
                id: 1,
                name: 'Kick Drum'
            },
            {
                id: 2,
                name: 'Synth 1'
            },
            {
                id: 3,
                name: 'Synth 2'
            },
            {
                id: 4,
                name: 'Tweet'
            },
            {
                id: 5,
                name: 'Chirp'
            },
        ]
    };

    state = {
        groupTitle: 'Drums',
        sounds: [
            {
                id: 0,
                name: 'Jazz Bass'
            },
            {
                id: 1,
                name: 'Kick Drum'
            },
            {
                id: 2,
                name: 'Synth 1'
            },
            {
                id: 3,
                name: 'Synth 2'
            },
            {
                id: 4,
                name: 'Tweet'
            },
            {
                id: 5,
                name: 'Chirp'
            },
        ]
    };

    constructor(props) {
        super(props);
        this.getButtons = this.getButtons.bind(this);
        this.getToggles = this.getToggles.bind(this);
    }

    getButtons() {
        return this.state.sounds.map(function (sound){
           return (
                <SoundButton
                    key={'sound-'+sound.id}
                    soundId={sound.id}
                    soundName={sound.name}/>
           );
        });
    }

    getToggles() {
        return this.state.sounds.map(function (sound){
            return (
                <SoundToggle
                    key={'sound-'+sound.id}
                    soundId={sound.id}
                    soundName={sound.name}/>
            );
        });
    }
    render() {
        return (
            <div className="sound-group-container row">
                <div className="sound-group container-fluid">
                    <h3 className="t-h3">
                        {this.state.groupTitle}
                    </h3>
                    {this.getToggles()}
                    <div className="col-md-1" style={{width: '100%'}}></div>
                    {this.getButtons()}
                </div>
            </div>
        );
    }
}