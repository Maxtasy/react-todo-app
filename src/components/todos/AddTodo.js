import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ""
    }

    onChange = event => {
        this.setState({ title: event.target.value});
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    }

    render() {
        return (
            <form className="add-item-form" onSubmit={this.onSubmit}>
                <input 
                    className="title-input" 
                    type="text" 
                    name="title" 
                    placeholder="New item..." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input className="submit-button" type="submit" value="Submit" />
            </form>
        )
    }
}

export default AddTodo
