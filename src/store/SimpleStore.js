/***
 * Simple Store
 *
 * The simplest way to implement a data store use in-memory javascript object.
 */

// Simple Todo Item
class Todo {
    constructor(task, completed = false, started = false) {
        this.task = task;
        this.completed = completed;
        this.started = started;
    }
}

export default class SimpleStore {
    constructor() {
        this.tasks = []
    }

    /**
     * Add Task
     *
     * @param string task content
     * @param bool mark task as completed
     * @param bool mark task as started
     * @return Todo the result, if failed should return null
     */

    add(task, completed = false, started = false) {
        if(task && task.length > 0) {
            let todo = new Todo(task, completed, started);
            this.tasks.push(todo);
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
    getTasks(filter = {completed: false, started: false}) {
        return this.tasks.filter((item) => {
            if(filter.completed && !item.completed) { return false; }
            if(filter.started && !item.started) { return false; }
            return true;
        });
    }
}

// Yet another implement use localStorage API
export class StorageStore extends SimpleStore {

}

