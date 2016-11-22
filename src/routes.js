import React from 'react';
import {IndexRoute, Route, Router} from 'react-router';
import {
    App, Counter, Field, ReduxClient} from './components';

console.log(App)

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Counter}/>
        <Route path="counter" component={Counter}>
        </Route>

        <Route path="field" component={Field}>
        </Route>
        <Route path="redux" component={ReduxClient}>
        </Route>
    </Route>
);

