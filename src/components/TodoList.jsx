/***
 * Todo Application
 */

import React from 'react';

import Header from './Header.jsx';
import TodoItem from './TodoItem.jsx';
import ListView from './ListView.jsx';

export default class Todo extends React.Component {
    render() {
        return (
            <div id="todo-list" class="todo-list">
                <Header/>
                <section id="main" role="main">
                    <TodoItem />
                    <ListView />
                </section>
            </div>
               )
    }
}
