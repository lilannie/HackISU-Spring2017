import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, browserHistory} from 'react-router';

import Main from 'Main';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}/>
    </Router>,
    document.getElementById('app')
);


