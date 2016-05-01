/***
 * Todo Application
 */

import React from 'react';

import Header from './Header.jsx';
import TodoItem from './TodoItem.jsx';
import AddTodoItem from './AddTodoItem.jsx';
import ListView from './ListView.jsx';
import {storageStore as StorageStore} from '../store/SimpleStore';
import SimpleRouter from '../helper/SimpeRouter';

export default class Todo extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: StorageStore.getTasks(),
            filter: {completed: false, started: false, active: false},
            fixedTop: false
        };
    }

    componentWillMount() {
        StorageStore.on('add', this._updateTasks.bind(this));
        StorageStore.on('update', this._updateTasks.bind(this));
        StorageStore.on('destroy', this._updateTasks.bind(this));

        SimpleRouter.on("page:changed", this._onPageChange.bind(this));

        document.addEventListener("scroll", this._onScroll.bind(this));
    }

    componentDidMount() {
        SimpleRouter.dispatch(); // Refresh to show current page
    }

    _onScroll(e) {
        if(this.scrollEventHandable === false) return; // Do nothing if last tick not finished
        this.scrollEventHandable = false;

        let scrollTop = document.body.scrollTop;
        let stickyPosition = 110;

        if(scrollTop >= stickyPosition) {
            this.setState({fixedTop: true});
        } else {
            this.setState({fixedTop: false});
        }

        setTimeout(() => {
            this.scrollEventHandable = true;
        }, 100); // Run one tick per 0.1 seconds
    }

    _updateTasks() {
        let filter = this.state.filter;
        this.setState({tasks: StorageStore.getTasks(filter)});
    }

    _onAdd(value) {
        StorageStore.add(value);
    }

    _onStar(task) {
        StorageStore.toggleStar(task);
    }

    _onDestroy(task) {
        StorageStore.destroy(task);
    }

    _onComplete(task) {
        StorageStore.toggleComplete(task);
    }

    _onUpdate(task, content) {
        StorageStore.update(task, content);
    }

    _onPageChange() {
        let path = SimpleRouter.getPath();
        let filter = {completed: false, starred: false, active: false};
        switch(path) {
            case "/completed":
              filter.completed = true;
              break;
            case "/starred":
              filter.starred = true;
              break;
            case "/active":
              filter.active = true;
        }
        // TODO: Should not do this
        this.setState({filter: filter, tasks: StorageStore.getTasks(filter)});
    }

    render() {
        let isFixedClass = this.state.fixedTop ? "is-fixed" : "";
        return (
            <div id="todo-list" class="todo-list">
                <Header fixedTop={this.state.fixedTop}>
                    <AddTodoItem placeholder="Type something..." onAdd={this._onAdd.bind(this)} />
                </Header>
                <section id="main" role="main" className={isFixedClass}>
                    <ListView fixedTop={this.state.fixedTop} data={this.state.tasks} onStar={this._onStar} onDestroy={this._onDestroy} onComplete={this._onComplete} onUpdate={this._onUpdate}>
                        Oops, You got nothing to do.
                    </ListView>
                </section>
            </div>
               )
    }
}
