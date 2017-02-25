import React from 'react';

import TimelineSlot from './TimelineSlot';

import '../scss/main.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="container-fluid">
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
                </div>
            </footer>
        );
    }
}

