import React, { Component } from 'react';
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getClassName() {
        if (this.props.todo.completed) {
            return "todo-item completed";
        } else {
            return "todo-item";
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div className={this.getClassName()}>
                <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} defaultChecked={completed}/>
                <h3 className="title">{ title }</h3>
                <button className="delete-button" onClick={this.props.deleteItem.bind(this, id)}><i className="fas fa-trash-alt"></i></button>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
}

export default TodoItem
