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
            {
                id: 6,
                name: 'Party Beat'
            }
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
            {
                id: 6,
                name: 'Party Beat'
            }
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
                    {this.getButtons()}
                </div>
            </div>
        );
    }
}