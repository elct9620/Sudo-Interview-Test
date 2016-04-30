/***
 * Todo Item
 */

import React from 'react';

import IconButton from './IconButton.jsx';

export default class TodoItem extends React.Component {
    constructor() {
        super();

        this.state = {
            editMode: false,
            task: ""
        };
    }

    _onClick(e) {
        // When click, switch state to editable
        this.setState({editMode: true});

        // Make some delay to focus input
        setTimeout(() => {
            this.refs.input.focus();
        }, 100);
    }

    _onBlur(e) {
        this.setState({editMode: false});
    }

    _onChange(e) {
        this.setState({task: e.currentTarget.value})
    }

    render() {
        let inputProps = {
            ref: "input",
            value: this.state.task || this.props.task,
            className: this.props.completed ? "item__input is-completed" : "item__input",
            disabled: !this.state.editMode,
            onClick: this._onClick.bind(this),
            onBlur: this._onBlur.bind(this),
            onChange: this._onChange.bind(this)
        }

        // TODO: Object state is too complex
        let starIcon = this.props.starred ? "star" : "star-o";
        let starClass = this.props.starred ? "item__control-button is-active" : "item__control-button";
        let completeIcon = this.props.completed ? "check-circle" : "check-circle-o";

        let entryClass = this.props.completed ? "item__entry is-completed" : "item__entry";
        let completeButtonClass = this.props.completed ? "item__complete-button is-completed" : "item__complete-button";

        return (
            <div className="item">
                <div className="item__complete">
                    <IconButton className={completeButtonClass} icon={completeIcon} onClick={this.props.onComplete}/>
                </div>
                <div className={entryClass}>
                    <input type="text" {...inputProps}/>
                </div>
                <div className="item__control">
                    <IconButton className={starClass} icon={starIcon} onClick={this.props.onStar} />
                    <IconButton className="item__control-button" icon="trash-o" onClick={this.props.onDestroy}/>
                </div>
            </div>
        )
    }
}
