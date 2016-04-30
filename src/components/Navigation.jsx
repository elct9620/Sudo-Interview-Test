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
            <nav id="main-menu" className="menu">
                <ul className="menu__list">
                    <li className="menu__item"><a className="menu__link is-active" href="/" onClick={this.linkTo}>All</a></li>
                    <li className="menu__item"><a className="menu__link" href="/starred" onClick={this.linkTo}>Starred</a></li>
                    <li className="menu__item"><a className="menu__link" href="/active" onClick={this.linkTo}>Active</a></li>
                    <li className="menu__item"><a className="menu__link" href="/completed" onClick={this.linkTo}>Complted</a></li>
                </ul>
            </nav>
        )
    }
}
