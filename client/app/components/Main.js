import React from 'react';
import firebase from 'firebase';

import SidebarLeft from './SidebarLeft/SidebarLeft';
import SidebarRight from './SidebarRight/SidebarRight';
import MainContent from './Main/MainContent';
import Footer from './Footer/Footer';

import {VirtuosoApi} from '../../../public/js/firebase_api';
import '../scss/main.scss';

export default class Main extends React.Component {
    componentDidMount() {

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

