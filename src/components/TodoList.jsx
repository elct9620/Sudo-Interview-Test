/***
 * Todo Application
 */

import React from 'react';

import Header from './Header.jsx';
import TodoItem from './TodoItem.jsx';
import AddTodoItem from './AddTodoItem.jsx';
import ListView from './ListView.jsx';
import StorageStore from '../store/SimpleStore';

export default class Todo extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: StorageStore.getTasks(),
            filter: {completed: false, started: false}
        };
    }

    componentWillMount() {
        StorageStore.on('add', this._updateTasks.bind(this))
    }

    _updateTasks() {
        let filter = this.state.filetr;
        this.setState({tasks: StorageStore.getTasks(filter)});
    }

    _onAdd(value) {
        StorageStore.add(value)
        this._updateTasks();
    }

    render() {
        return (
            <div id="todo-list" class="todo-list">
                <Header/>
                <section id="main" role="main">
                    <AddTodoItem placeholder="Type something here..." onAdd={this._onAdd.bind(this)} />
                    <ListView data={this.state.tasks}>
                        Oops, there is noting here...
                    </ListView>
                </section>
            </div>
               )
    }
}
