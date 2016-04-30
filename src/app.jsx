/***
 * Todo List Application
 *
 * @author Zheng Xian Qiu
 */

import './style.scss'; // Load global stylesheet
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList.jsx';

// Render React Component After document loaded
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<TodoList/>, document.getElementById('app'));
});
