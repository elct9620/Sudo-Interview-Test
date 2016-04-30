/***
 * List View
 */

import React from 'react';

import TodoItem from './TodoItem.jsx'

export default class ListView extends React.Component {

    // TODO: Below actions should implement using Dispatcher to improve
    _onStar(item) {
        return () => {
            if(typeof this.props.onComplete !== "function") return;
            this.props.onStar(item);
        }
    }

    _onDestroy(item) {
        return () => {
            if(typeof this.props.onComplete !== "function") return;
            this.props.onDestroy(item);
        }
    }

    _onComplete(item) {
        return () => {
            if(typeof this.props.onComplete !== "function") return;
            this.props.onComplete(item);
        }
    }

    _onUpdate(item) {
        return (task) => {
            if(typeof this.props.onUpdate !== "function") return;
            this.props.onUpdate(item, task);
        }
    }

    getList() {
        if(this.props.data.length > 0) {
            // TODO: ListView should accept any type component
            let props = {}
            return this.props.data.map((item, index) => {
                props = {
                    key: index,
                    onStar: this._onStar.call(this, item),
                    onDestroy: this._onDestroy.call(this, item),
                    onComplete: this._onComplete.call(this, item),
                    onUpdate: this._onUpdate.call(this, item)
                }

                props = Object.assign(item, props) // Direct copy props
                return <TodoItem {...props} />
            });
        } else {
            // Empty state show children
            return this.props.children;
        }
    }
    render() {
        return (
            <div className="list-view">
                {this.getList()}
            </div>
        )
    }
}
