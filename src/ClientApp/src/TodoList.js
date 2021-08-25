import React from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    componentDidMount() {
        fetch("api/todo")
            .then(res => res.json())
            .then(
                items => {
                    this.setState({
                        items: items
                    });
                }
            )
    }

    handleFormSubmit(value) {

        let data = { name: value };

        fetch("api/todo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(item => {

                let items = this.state.items.slice();
                items.push(item);
                this.setState({
                    items: items
                });

            })
    }

    handleItemChange(id, completed) {

        let items = this.state.items.slice();
        let item = items.find(x => x.id === id);
        item.completed = completed;

        this.setState({
            items: items
        });

        fetch(`api/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        });
    }

    handleItemDelete(id) {

        let items = this.state.items.slice().filter(x => x.id !== id);

        this.setState({
            items: items
        });

        fetch(`api/todo/${id}`, {
            method: 'DELETE'
        });
    }

    render() {

        const items = this.state.items.map((item, index) => (
            <TodoItem id={item.id} key={index} name={item.name} completed={item.completed} onChange={this.handleItemChange} onDelete={this.handleItemDelete} />
        ));

        return (
            <div className="card todo-list">
                <div className="card-body">
                    <h4 className="card-title">Todo List</h4>
                    <Form onSubmit={this.handleFormSubmit} />
                    <ul className="list-unstyled">
                        {items}
                    </ul>
                </div>
            </div>
        );

    }

}
export default TodoList;