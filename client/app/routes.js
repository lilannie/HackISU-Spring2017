import React from 'react';
import {Route, Router, browserHistory} from 'react-router';

import Main from 'Main';

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}/>
            </Router>
        );
    }
}