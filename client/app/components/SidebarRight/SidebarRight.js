import React from 'react';
import Slider from './Slider';
import ChatContainer from './ChatContainer';

import '../../scss/main.scss';

export default class SidebarRight extends React.Component {
    render() {
        return (
            <div id="sidebar-right" className="col-md-2">
                <ChatContainer />
            </div>
        );
    }
}