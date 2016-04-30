/***
 * List View
 */

import React from 'react';

import TodoItem from './TodoItem.jsx'

export default class ListView extends React.Component {
    getList() {
        if(this.props.data.length > 0) {
            // TODO: ListView should accept any type component
            return this.props.data.map((item, index) => {
                return <TodoItem {...item} key={index} />
            });
        } else {
            // Empty state show children
            return this.props.children;
        }
    }
    render() {
        return (
            <div class="list">
                {this.getList()}
            </div>
        )
    }
}
