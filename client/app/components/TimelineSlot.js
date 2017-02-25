import React from 'react';

import '../scss/main.scss';

export default class TimelineSlot extends React.Component {
    constructor(props) {
        super(props);
        this.allowDrop = this.allowDrop.bind(this);
        this.drop = this.drop.bind(this);
    }

    allowDrop(ev) {
        ev.preventDefault();
        console.log("Allowing drop");
    }

    drop(ev) {
        ev.preventDefault();
        ev.target.appendChild(document.getElementById("sound-0"));
        console.log("Dropped target");
    }

    render() {
        return (
            <div className="handle timeline-slot col-md-1"
                 onDrop={this.drop}
                 onDragOver={this.allowDrop}>
            </div>
        );
    }
}


