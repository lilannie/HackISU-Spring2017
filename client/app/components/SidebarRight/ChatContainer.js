import React from 'react';
import {Chat} from 'chat-template';

import '../../scss/chat.scss';

export default class ChatContainer extends React.Component {
    static defaultProps = {};

    state = {
        historicMessages: [
            {
                message: 'Ready to jam out?!',
                from: 'right',
                backColor: '#ff4d4d',
                textColor: 'black',
                avatar: 'images/avatars/girl.png',
                duration: 9999999999999,
                inbound: true
            },
            {
                message: 'Yeah! This is great we can work together (:',
                from: 'right',
                backColor: '#ff4d4d',
                textColor: 'black',
                avatar: 'images/avatars/guitarguy.png',
                duration: 9999999999999,
                inbound: false
            }
        ],
        messages: [
            {
                message: 'Dude, right. Music is so much better with friends!',
                from: 'right',
                backColor: '#ff4d4d',
                textColor: 'black',
                avatar: 'images/avatars/girl.png',
                duration: 9999999999999,
                inbound: true
            }
        ]
    };

    constructor(props) {
        super(props);

        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(e) {
        e.preventDefault();
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="chat-container">
                <Chat historicMessages={this.state.historicMessages}
                      messages={this.state.messages} turnOffLoop />
            </div>
        );
    }
}