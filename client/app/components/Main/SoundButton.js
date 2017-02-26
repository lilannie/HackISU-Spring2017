import React from 'react';

import '../../scss/main.scss';

export default class SoundButton extends React.Component {
    defaultProps = {
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

        this.setState({isSoundOn: true});
    }

    toggle(e) {
        e.preventDefault();

        let flag = this.state.isSoundOn;
        if (flag) {
            console.log(this.props.soundName+' is off');
            this.props.toggleOff(this.props.soundId);
            this.setState({isSoundOn: false});
        }
        else {
            console.log(this.props.soundName+' is on');
            this.props.toggleOn(this.props.soundId);
            this.setState({isSoundOn: true});
        }
    }

    render() {
        return (
            <div className="sound-button-container col-md-2">
                <button className="sound-button btn"
                        onClick={this.toggle}>
                    <h4 className="t-h4">
                        <i className="fa fa-music"></i>  {this.props.soundName}
                    </h4>
                </button>
            </div>
        );
    }
}

