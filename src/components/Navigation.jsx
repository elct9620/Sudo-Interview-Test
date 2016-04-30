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

    isActive(path) {
        return SimpleRouter.getPath() == path;
    }

    getLinkClass(path) {
        let linkClass = ["menu__link"]
        if(this.isActive(path)) {
            linkClass.push("is-active")
        }
        return linkClass.join(" ")
    }

    render() {
        return (
            <nav id="main-menu" className="menu">
                <ul className="menu__list">
                    <li className="menu__item"><a className={this.getLinkClass("/")} href="/" onClick={this.linkTo}>All</a></li>
                    <li className="menu__item"><a className={this.getLinkClass("/starred")} href="/starred" onClick={this.linkTo}>Starred</a></li>
                    <li className="menu__item"><a className={this.getLinkClass("/active")} href="/active" onClick={this.linkTo}>Active</a></li>
                    <li className="menu__item"><a className={this.getLinkClass("/completed")} href="/completed" onClick={this.linkTo}>Complted</a></li>
                </ul>
            </nav>
        )
    }
}
