import React from "react";
import {Link} from 'react-router';
import { connect } from 'react-redux';

import Field from "./Field.js";
require("./App.css");

@connect(
    (state) => ({
        routing: state.routing,
    }),
    (dispatch) => ({})
)
export default class App extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to={'counter'}>Counter</Link></li>
                    <li><Link to={'field'}>Field</Link></li>
                    <li><Link to={'redux'}>Redux</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

