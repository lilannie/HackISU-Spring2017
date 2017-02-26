import React from 'react';

import SoundButton from './SoundButton';
import SoundToggle from './SoundToggle';

import '../../scss/main.scss';

export default class SoundGroup extends React.Component {
    static defaultProps = {
        type: 'toggle',
        group: {
            "id": 0,
            "name": "Drums",
            "sounds": [0, 1]
        },
        "sounds": [
            {
                "file": "file.mp4",
                "id": 0,
                "name": "Trumpet"
            },
            {
                "file": "file.mp4",
                "id": 1,
                "name": "Bass"
            },
            {
                "file": "file.mp4",
                id: 2,
                name: 'Synth 1'
            },
            {
                "file": "file.mp4",
                id: 3,
                name: 'Synth 2'
            },
            {
                "file": "file.mp4",
                id: 4,
                name: 'Tweet'
            },
            {
                "file": "file.mp4",
                id: 5,
                name: 'Chirp'
            },
            {
                "file": "file.mp4",
                id: 0,
                name: 'Jazz Bass'
            },
            {
                "file": "file.mp4",
                id: 1,
                name: 'Kick Drum'
            },
        ]
    };

    state = {
        soundsOn: []
    };

    constructor(props) {
        super(props);
        this.getButtons = this.getButtons.bind(this);
        this.getToggles = this.getToggles.bind(this);
    }

    getButtons() {
        let sounds = this.props.sounds;
        return this.props.group.sounds.map(function (id) {
            let sound = sounds[id];

            return (
                <SoundButton
                    key={'sound-' + sound.id}
                    soundId={sound.id}
                    soundName={sound.name}
                    file={sound.file}
                />
            );
        });
    }

    getToggles() {
        let sounds = this.props.sounds;

        return this.props.group.sounds.map(function (item) {
            let sound = sounds[item];
            if (sound != null && sound != undefined) {
                return (
                    <SoundToggle
                        key={'sound-' + sound.id}
                        soundId={sound.id}
                        soundName={sound.name}
                        file={sound.file}
                    />
                );
            }
            else {
                return;
            }

        });
    }

    render() {
        var buttons = (this.getToggles());
        if (this.props.type === 'buttons') {
            buttons = (this.getButtons());
        }
        return (
            <div className="sound-group-container row">
                <div className="sound-group container-fluid">
                    <h3 className="t-h3">
                        {this.props.group.name}
                    </h3>
                    <div className="row">
                        <div className="sound-content">
                            {buttons}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}