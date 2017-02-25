import React from 'react';
import {Chat} from 'chat-template';

import '../../scss/chat.scss';

export default class ChatContainer extends React.Component {
    static defaultProps = {
        styles: {
            chat: {
                position: 'relative',
                top: 0,
                height: '100%',
                overflow: 'hidden',
                background: 'rgba(77, 77, 77, 0.9)',
                width: '350px',
                padding: '10px 40px 10px 10px'
            },
            inputDiv: {
                height: '40px',
                width: '100%',
                backgroundColor: '#1E1E20',
                borderRadius: '5px'
            },
            input: {
                margin: '8px',
                width: 'calc(100% - 20px)',
                height: 'calc(100% - 20px)',
                borderRadius: '5px',
                background: '#1E1E20',
                color: 'white',
                border: 'none',
                outline: 'none'
            },
        }
    };

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
        ],
        styles: {
            chat: {
                position: 'relative',
                overflow: 'hidden',
                height: '400px',
                background: 'rgba(77, 77, 77, 0.9)',
                width: '350px',
                padding: 10
            },
            inputDiv: {
                height: '40px',
                width: '100%',
                backgroundColor: '#1E1E20',
                borderRadius: '5px'
            },
            input: {
                margin: '8px',
                width: 'calc(100% - 20px)',
                height: 'calc(100% - 20px)',
                borderRadius: '5px',
                background: '#1E1E20',
                color: 'white',
                border: 'none'
            },
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat-container container-fluid">
                <Chat historicMessages={this.state.historicMessages}
                      messages={this.state.messages} turnOffLoop
                      styles={this.props.styles}/>
            </div>
        );
    }
}