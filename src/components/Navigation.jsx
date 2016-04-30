/***
 * Navigation
 */

import React from 'react';

import SimpleRouter from '../helper/SimpeRouter';

export default class Navigation extends React.Component {
    linkTo(e) {
        e.preventDefault();

        SimpleRouter.linkTo(e.target.pathname)
    }

    render() {
        return (
            <nav id="main-menu" class="menu">
                <ul>
                    <li><a href="/" onClick={this.linkTo}>All</a></li>
                    <li><a href="/starred" onClick={this.linkTo}>Starred</a></li>
                    <li><a href="/active" onClick={this.linkTo}>Active</a></li>
                    <li><a href="/completed" onClick={this.linkTo}>Complted</a></li>
                </ul>
            </nav>
        )
    }
}
