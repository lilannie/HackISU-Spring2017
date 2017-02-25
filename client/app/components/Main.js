import React from 'react';

import SidebarLeft from './SidebarLeft/SidebarLeft';
import SidebarRight from './SidebarRight/SidebarRight';
import MainContent from './Main/MainContent';
import Footer from './Footer/Footer';

import '../scss/main.scss';

export default class Main extends React.Component {
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

