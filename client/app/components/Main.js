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
        this.state = {
            rootRef: undefined,
            roomId: 0,
            data: {
                "phrases": [
                    {
                        "id": 0,
                        "name": "Quick Rifts"
                    },
                    {
                        "id": 1,
                        "name": "Slow Rifts"
                    },
                    {
                        "id": 2,
                        "name": "Fast Tempo"
                    },
                    {
                        "id": 3,
                        "name": "Slow Tempo"
                    }],
                "rooms": [
                    {
                        "activePhrase": 1,
                        "id": 0,
                        "name": "Annie's Room",
                        "songId": 0,
                        "url": "hi.com"
                    },
                    {
                        "activePhrase": 2,
                        "id": 1,
                        "name": "Annie's 2nd Room",
                        "songId": 1,
                        "url": "other.com"
                    }],
                "songs": [
                    {
                        "id": 0,
                        "name": "Rock and Roll",
                        "phrases": [0, 1]
                    },
                    {
                        "id": 1,
                        "name": "Smooth Blues",
                        "phrases": [null, null, 2, 3]
                    }],
                "sound-groups": [
                    {
                        "id": 0,
                        "name": "Drums",
                        "sounds": [0, 1]
                    },
                    {
                        "id": 1,
                        "name": "Synths",
                        "sounds": [null, null, 2, 3]
                    }],
                "sounds": [
                    {
                        "file": "file.mp4",
                        "id": 0,
                        "name": "Trumpet"
                    },
                    {
                        "file": "file.mp4",
                        "id": 1,
                        "name": "Bass"
                    }]
            }
        }
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();

        rootRef.on('value', snap => {
            this.setState({
                data: snap.val()
            });
        });
    }

    render() {
        return (
            <div className="main-container">
                <div className="row">
                    <SidebarLeft />
                    <MainContent />
                    <SidebarRight />
                </div>
                <Footer />
            </div>
        );
    }
}

