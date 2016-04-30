/***
 * Todo Application
 */

import React from 'react';

import Header from './Header.jsx';
import TodoItem from './TodoItem.jsx';
import ListView from './ListView.jsx';
import SimpleStore from '../store/SimpleStore'

export default class Todo extends React.Component {
    constructor() {
        super();
        this.state = new SimpleStore(); // Direct mount SimpleStore as Component state
    }

    render() {
        return (
            <div id="todo-list" class="todo-list">
                <Header/>
                <section id="main" role="main">
                    <TodoItem />
                    <ListView data={this.state.getTasks()}>
                        Oops, there is noting here...
                    </ListView>
                </section>
            </div>
               )
    }
}
