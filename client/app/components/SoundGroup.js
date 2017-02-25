import React from 'react';

import SoundButton from './SoundButton';

import '../scss/main.scss';

export default class SoundGroup extends React.Component {
    defaultProps = {
        groupTitle: 'Drums'
    };

    state = {
        groupTitle: 'Drums'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sound-group-container row">
                <div className="sound-group container-fluid">
                    <h3 className="t-h3">
                        {this.state.groupTitle}
                    </h3>
                    <SoundButton />
                    <SoundButton />
                    <SoundButton />
                    <SoundButton />
                    <SoundButton />
                    <SoundButton />
                    <SoundButton />
                    <SoundButton />

                </div>
            </div>
        );
    }
}