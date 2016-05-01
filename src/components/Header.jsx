/***
 * Header
 *
 */

import React from 'react';

import Navigation from './Navigation.jsx';

export default class Header extends React.Component {
    render() {
        let isFixedClass = this.props.fixedTop ? "is-fixed" : "";
        return (
            <header id="header" role="header" className={isFixedClass}>
                <h1 ref="header" className="header">TODO<span className="header__subtitle">beta</span></h1>
                <Navigation/>
                {this.props.children}
            </header>
        )
    }
}
