/**
 * THIS IS THE ENTRY POINT
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Root from './root';


ReactDOM.render(<AppContainer><Root/></AppContainer>, document.getElementById('root'));
if (module.hot) {
    module.hot.accept('./root', () => {
        alert('rerender')
        ReactDOM.render(
            <AppContainer>
                <Root />
            </AppContainer>
            , document.getElementById('root'));
    });

}
