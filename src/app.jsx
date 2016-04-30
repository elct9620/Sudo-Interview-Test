/***
 * Todo List Application
 *
 * @author Zheng Xian Qiu
 */

import './style.scss'; // Load global stylesheet
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList.jsx';
import SimpleRouter from './helper/SimpeRouter';

// Simple register router, do nothing because TodoList will check it path to switch filter
SimpleRouter.register('/', () => {});
SimpleRouter.register('/completed', () => {});
SimpleRouter.register('/stared', () => {});
SimpleRouter.register('/active', () => {});

// Render React Component After document loaded
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<TodoList/>, document.getElementById('app'));
});
