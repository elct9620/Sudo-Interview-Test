/***
 * Todo Application
 */

import React from 'react';

import Header from './Header.jsx';
import TodoItem from './TodoItem.jsx';
import AddTodoItem from './AddTodoItem.jsx';
import ListView from './ListView.jsx';
import SimpleStore from '../store/SimpleStore';

export default class Todo extends React.Component {
    constructor() {
        super();
        // TODO: Should not do this in next version
        this.state = new SimpleStore(); // Direct mount SimpleStore as Component state
        this.state.add("Test")
        this.state.add("HIHI")
    }

    _onAdd(value) {
        this.state.add(value)
        this.forceUpdate();
    }

    render() {
        return (
            <div id="todo-list" class="todo-list">
                <Header/>
                <section id="main" role="main">
                    <AddTodoItem placeholder="Type something here..." onAdd={this._onAdd.bind(this)} />
                    <ListView data={this.state.getTasks()}>
                        Oops, there is noting here...
                    </ListView>
                </section>
            </div>
               )
    }
}
