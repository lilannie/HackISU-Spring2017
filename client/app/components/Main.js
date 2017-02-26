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
            rootRef: undefined
        }
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('react');
        const number = rootRef.child('number');
        number.on('value', snap => {
            this.setState({
                number: snap.val()
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

