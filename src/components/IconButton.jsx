/***
 * Icon Button
 */

import React from 'react';

export default class IconButton extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false
        };
    }

    render() {
        let iconClass = ["fa"]
        iconClass.push(`fa-${this.props.icon}`)
        return (
            <button onClick={this.props.onClick} className={this.props.className}>
                <i className={iconClass.join(" ")}></i>
            </button>
        )
    }
}
