import React, {Component, PropTypes} from 'react';
import {Router} from 'react-router';

import {store} from './store';
import {appHistory} from './history_config';
import AppRoutes from './routes';
import {Provider} from 'react-redux';


export default class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router history={appHistory}>
                        {AppRoutes}
                    </Router>
                </Provider>
            </div>
        );
    }
}