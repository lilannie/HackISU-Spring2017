import React from 'react';

import SoundGroup from './SoundGroup';

import '../../scss/main.scss';

export default class MainContent extends React.Component {
    static defaultProps = {
        data: {
            "messages" : [ {
                "authorId" : 0,
                "id" : 0,
                "order" : 0,
                "roomId" : 0,
                "text" : "Hi There!",
                "timeSent" : "2017-02-20-10:00:00"
            }, {
                "id" : 1,
                "order" : 0,
                "roomId" : 1,
                "text" : "Whats up"
            } ],
            "phrases" : [ {
                "id" : 0,
                "name" : "Quick Rifts"
            }, {
                "id" : 1,
                "name" : "Slow Rifts"
            }, {
                "id" : 2,
                "name" : "Fast Tempo"
            }, {
                "id" : 3,
                "name" : "Slow Tempo"
            } ],
            "rooms" : [ {
                "activePhrase" : 1,
                "id" : 0,
                "messages" : [ 0 ],
                "name" : "Annie's Room",
                "songId" : 0,
                "url" : "hi.com"
            }, {
                "activePhrase" : 2,
                "id" : 1,
                "name" : "Annie's 2nd Room",
                "songId" : 1,
                "url" : "other.com"
            } ],
            "songs" : [ {
                "id" : 0,
                "name" : "Rock and Roll",
                "phrases" : [ 0, 1 ]
            }, {
                "id" : 1,
                "name" : "Smooth Blues",
                "phrases" : [ null, null, 2, 3 ]
            } ],
            "sound-groups" : [ {
                "id" : 0,
                "name" : "Drums",
                "sounds" : [ 0, 1 ]
            }, {
                "id" : 1,
                "name" : "Synths",
                "sounds" : [ null, null, 2, 3 ]
            } ],
            "sounds" : [ {
                "file" : "file.mp4",
                "id" : 0,
                "name" : "Trumpet"
            }, {
                "file" : "file.mp4",
                "id" : 1,
                "name" : "Bass"
            } ]
        }

    };

    constructor(props) {
        super(props);
        this.getSoundGroups = this.getSoundGroups.bind(this);
    }

    getSoundGroups() {
        let sounds = this.props.data.sounds;

        return this.props.data['sound-groups'].map(function(group) {
            return (<SoundGroup
                id={'sound-group-'+group.id}
                key={'sound-group-'+group.id}
                group={group}
                sounds={sounds}
            />);
        });
    }
    render() {
        return (
            <div id="main" className="col-md-8">
                <div id="header" className="row">
                    <div className="container-fluid">
                        <img className="t-logo" src="images/app/logo-3.png" />
                    </div>
                </div>
                <div id="body" className="row">
                    {this.getSoundGroups()}
                </div>
            </div>
        );
    }
}


