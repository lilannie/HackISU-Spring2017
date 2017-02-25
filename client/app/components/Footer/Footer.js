import React from 'react';

import TimelineSlot from './TimelineSlot';

import '../../scss/main.scss';

export default class Footer extends React.Component {
    static defaultProps = {};

    render() {
        return (
            <footer className="main-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="t-banner col-md-2">
                            <h4 className="t-h2">
                                Project Timeline
                            </h4>
                        </div>
                        <div className="t-toolbar col-md-8">
                            <div className="row">
                                <button className="col-md-1">
                                    <h5 className="t-h5">
                                        Save
                                    </h5>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <TimelineSlot />
                    <TimelineSlot />
                    <TimelineSlot />
                    <TimelineSlot />
                    <TimelineSlot />
                    <TimelineSlot />
                    <TimelineSlot />
                    <TimelineSlot />
                    <TimelineSlot />
                    <TimelineSlot />
                </div>
            </footer>
        );
    }
}

