import React from 'react';

import SoundGroup from './SoundGroup';

import '../scss/main.scss';

export default class MainContent extends React.Component {
    render() {
        return (
            <div id="main" className="col-md-8">
                <div id="header" className="row">
                    <div className="container-fluid">
                        <img className="t-logo" src="images/app/logo-3.png" />
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


