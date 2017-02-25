import React from 'react';

import '../../scss/main.scss';

export default class SoundButton extends React.Component {
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
            <div className="sound-button-container col-md-2">
                <button className="sound-button btn">
                    <h4 className="t-h4">
                        <i className="fa fa-music"></i>  {this.props.soundName}
                    </h4>
                </button>
            </div>
        );
    }
}

