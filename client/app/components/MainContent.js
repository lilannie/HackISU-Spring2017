import React from 'react';

import SoundGroup from './SoundGroup';

import '../scss/main.scss';

export default class MainContent extends React.Component {
    render() {
        return (
            <div id="main" className="col-md-8">
                <div id="header" className="row">
                    <div className="container-fluid">
                        <h1 className="t-h1">Jam Time</h1>
                    </div>
                </div>
                <div id="body" className="row">
                    <SoundGroup/>
                    <SoundGroup/>
                    <SoundGroup/>
                    <SoundGroup/>
                    <SoundGroup/>
                </div>
            </div>
        );
    }
}


