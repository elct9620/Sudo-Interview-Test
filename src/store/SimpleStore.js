/***
 * Simple Store
 *
 * The simplest way to implement a data store use in-memory javascript object.
 */

import {EventEmitter} from 'events';

// Simple Todo Item
class Todo {
    constructor(task, completed = false, starred = false) {
        this.task = task;
        this.completed = completed;
        this.starred = starred;
    }
}

class SimpleStore extends EventEmitter{
    constructor() {
        super();
        this.loadTask();
    }

    loadTask() {
        return [];
    }

    saveTask() {
        // Do nothing
    }

    /**
     * Add Task
     *
     * @param string task content
     * @param bool mark task as completed
     * @param bool mark task as starred
     * @return Todo the result, if failed should return null
     */

    add(task, completed = false, starred = false) {
        if(task && task.length > 0) {
            let todo = new Todo(task, completed, starred);
            this.tasks.push(todo);
            this.emit("add", todo);
            this.saveTask();
            return todo;
        }

        return null;
    }

    /**
     * Get Tasks
     *
     * @param object the filter to select specify marked task
     * @return array the matched task
     */
    getTasks(filter = {completed: false, starred: false}) {
        return this.tasks.filter((item) => {
            if(filter.completed && !item.completed) { return false; }
            if(filter.starred && !item.starred) { return false; }
            if(filter.active && item.completed) { return false; }
            return true;
        });
    }

    /**
     * Toggle Star
     *
     * @param Todo object to toggle star state
     */

    toggleStar(todo) {
        this.tasks = this.tasks.map((task, index) => {
           if(todo == task) {
                return new Todo(todo.task, todo.completed, !todo.starred);
           }
           return task;
        });
        this.saveTask();
        this.emit("update", this.tasks);
    }

    /**
     * Toggle Complete
     *
     * @param Todo object to toggle complete state
     */

    toggleComplete(todo) {
        this.tasks = this.tasks.map((task, index) => {
            if(todo == task) {
                return new Todo(todo.task, !todo.completed, todo.starred);
            }
            return task;
        });
        this.saveTask();
        this.emit("update", this.tasks);
    }

    /**
     * Update
     *
     * @param Todo object to update
     * @param string new task content
     * @return Todo
     */

    update(todo, content) {
        this.tasks = this.tasks.map((task, index) => {
            if(todo == task) {
                return new Todo(content, todo.completed, todo.starred);
            }
            return task;
        });
        this.saveTask();
        this.emit("update", this.tasks);
    }

    /**
     * Destroy
     *
     * @param Todo object to remote
     */

    destroy(todo) {
        let index = this.tasks.indexOf(todo);
        if(index >= 0) {
            this.tasks.splice(index, 1);
            this.emit("destroy", todo);
        }
        this.saveTask();
        return todo;
    }

}


// Yet another implement use localStorage API
class StorageStore extends SimpleStore {
    constructor() {
        super();
    }

    loadTask() {
        let tasksString = window.localStorage.getItem('tasks');
        let tasks = [];
        if(tasks = JSON.parse(tasksString)) {
            tasks = tasks.map((task) => {
                return new Todo(task.task, task.completed, task.starred)
            })
        }
        this.tasks = tasks || [];
    }

    saveTask() {
        window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}

// Export Store Instance
export default SimpleStore = new SimpleStore();
export let storageStore = new StorageStore();
