/***
 * Simple Store
 *
 * The simplest way to implement a data store use in-memory javascript object.
 */

import {EventEmitter} from 'events';

// Simple Todo Item
class Todo {
    constructor(task, completed = false, stared = false) {
        this.task = task;
        this.completed = completed;
        this.stared = stared;
    }
}

class SimpleStore extends EventEmitter{
    constructor() {
        super();
        this.tasks = []
    }

    /**
     * Add Task
     *
     * @param string task content
     * @param bool mark task as completed
     * @param bool mark task as stared
     * @return Todo the result, if failed should return null
     */

    add(task, completed = false, stared = false) {
        if(task && task.length > 0) {
            let todo = new Todo(task, completed, stared);
            this.tasks.push(todo);
            this.emit("add", todo);
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
    getTasks(filter = {completed: false, stared: false}) {
        return this.tasks.filter((item) => {
            if(filter.completed && !item.completed) { return false; }
            if(filter.stared && !item.stared) { return false; }
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
                return new Todo(todo.task, todo.completed, !todo.stared);
           }
           return task;
        });
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
                return new Todo(todo.task, !todo.completed, todo.stared);
            }
            return task;
        });
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
        return todo;
    }

}


// Yet another implement use localStorage API
class StorageStore extends SimpleStore {

}

// Export Store Instance
export default SimpleStore = new SimpleStore();
export let StoragetStore = new StorageStore();
