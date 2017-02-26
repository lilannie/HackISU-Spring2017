import React from 'react';
import * as firebase from 'firebase';

import SidebarLeft from './SidebarLeft/SidebarLeft';
import SidebarRight from './SidebarRight/SidebarRight';
import MainContent from './Main/MainContent';
import Footer from './Footer/Footer';

import '../scss/main.scss';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.loopCache = {};
        this.state = {
            rootRef: undefined,
            roomId: 0,
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

        }
    }

    addToLoopCache(jsonStr) {
        var loop = JSON.decode(jsonStr);
        this.loopCache[loop.name] = loop;
        console.log("cache " + this.loopCache);
    }

    fetchLoops() {
        console.log("in fetch loops");
        var refs = [
            firebase.storage().ref().child('loops/synth/index.json'),
            firebase.storage().ref().child('loops/beat/index.json'),
            firebase.storage().ref().child('loops/bass/index.json')];

        for (var ref in refs) {
            console.log("ref is " + refs[ref]);
            refs[ref].getDownloadURL().then(function(url){
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open( "GET", url, false );

                xmlHttp.send();

                console.log("got index:  " + xmlHttp.responseText);
                var loopIndexEntries = JSON.parse(xmlHttp.responseText);
                console.log("JUST GOT!  " + loopIndexEntries);
                for (var loopIndex in loopIndexEntries) {
                    console.log("looking for cdn path:  " + loopIndex.filepath);

                    var loopRef = firebase.storage.ref().child(loopIndex.filepath);
                    loopRef.getDownloadURL().then(function(loopUrl) {
                        console.log("getting " + loopUrl);
                        var xmlHttp = new XMLHttpRequest();
                        mlHttp.open( "GET", loopUrl, false );
                        xmlHttp.send();
                        this.addToLoopCache(xmlHttp.responseText);
                    });
                }

            });
        }

    }

    componentDidMount() {
        const root = firebase.database().ref();
        const rootRef = firebase.database().ref();
        this.fetchLoops();

        root.once('value', snap => {
            this.setState({
                data: snap.val()
            });
        });

        root.on('value', snap => {
            this.setState({
                data: snap.val()
            });
        });

        console.log("Initializing Data:");
        console.log(JSON.stringify(this.state.data));
    }

    render() {
        return (
            <div className="main-container">
                <div className="row">
                    <SidebarLeft />
                    <MainContent data={this.props.data} />
                    <SidebarRight />
                </div>
                <Footer />
            </div>
        );
    }
}

