/**
 * Add Todo Item
 */

import React from 'react';

import TodoItem from './TodoItem.jsx';
import IconButton from './IconButton.jsx';

// TODO: Is this component possible to combine into TodoItem
export default class AddTodoItem extends TodoItem {

    _onAdd(e) {
        this.props.onAdd(this.state.task);
        this.setState({task: ""}); // Clear input
    }

    _onKeyUp(e) {
        if(e.keyCode == 13) { // Handle Enter
            this._onAdd();
        }
    }

    render() {
        let inputProps = {
            ref: "input",
            value: this.state.task,
            placeholder: this.props.placeholder,
            disabled: !this.state.editMode,
            onClick: this._onClick.bind(this),
            onBlur: this._onBlur.bind(this),
            onChange: this._onChange.bind(this),
            onKeyUp: this._onKeyUp.bind(this)
        }
       return (
            <div className="item">
                <div className="entry">
                    <input type="text" {...inputProps}/>
                </div>
                <div className="control">
                    <IconButton onClick={this._onAdd.bind(this)} icon="plus"/>
                </div>
            </div>
        )
    }
}
