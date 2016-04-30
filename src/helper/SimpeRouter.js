/***
 * Simple Router
 *
 * Use #hashtag to support simple filter router
 */

import {EventEmitter} from 'events';

class SimpleRouter extends EventEmitter {

    constructor() {
        super();

        this.currentPath = this.getPath();
        this.routers = {}

        this.dispatch();
    }

    getPath() {
        if(location.hash.length <= 0) {
            return "/";
        }
        return location.hash.slice(1);
    }

    register(path, handler) {
        this.routers[path] = handler;
    }

    linkTo(path) {
        window.history.pushState({}, null, `#${path}`);
        this.dispatch();
    }

    dispatch() {
        let path = this.currentPath = this.getPath();

        if(this.routers[path] != undefined) {
            this.routers[path](); // Direct call handler
            this.emit("page:changed", path);
            return;
        }

        if(this.routers['/notFound'] != undefined) {
            this.routers[path](); // If no router matched, try not found handler
            this.emit("page:notFound");
            return;
        }

        return;
    }

}

export default SimpleRouter = new SimpleRouter();
