import React from 'react';

import '../../scss/timeline.scss';

class SegmentSlot extends React.Component {
    static defaultProps = {
        segment: {
            id: 0,
            name: 'Segment Name'
        }
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="segment-slot">
                <div className="row"></div>
            </div>
        );
    }
}
class AddSlot extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="add-slot">
                <i className="fa fa-plus fa-2x"></i>
            </div>
        );
    }
}
export default class TimelineSlot extends React.Component {
    static defaultProps = {
        isEmpty: false,
        isAdd: false,
        segment: {
            id: 0,
            name: 'Segment Name'
        }
    };
    constructor(props) {
        super(props);

    }

    render() {
        if (isEmpty) {
            return (
                <div className="timeline-slot col-md-1">
                </div>
            );
        }
        if (isAdd) {
            return (
                <div className="timeline-slot col-md-1">
                    <AddSlot/>
                </div>
            );
        }
        return (
            <div className="timeline-slot col-md-1">
                <SegmentSlot segement={segment}/>
            </div>
        );
    }
}


