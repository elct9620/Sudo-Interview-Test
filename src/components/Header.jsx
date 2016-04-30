/***
 * Header
 *
 */

import React from 'react';

import Navigation from './Navigation.jsx';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header" role="header">
                <h1 className="header">TODO<span className="header__subtitle">beta</span></h1>
                <Navigation/>
            </header>
        )
    }
}
