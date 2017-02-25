import React from 'react';

import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import MainContent from './MainContent';
import Footer from './Footer';

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

