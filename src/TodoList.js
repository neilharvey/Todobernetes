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

    handleFormSubmit(value) {

        let items = this.state.items.slice();
        let id = Math.max(items.map(x => x.id).push(0));
        items.push({ id: 1 + id, name: value});

        this.setState({
            items: items
        });
    }

    handleItemChange(id, completed) {

        let items = this.state.items.slice();
        let item = items.find(x => x.id === id);
        item.completed = completed;

        this.setState({
            items: items
        });

    }

    handleItemDelete(id) {

        let items = this.state.items.slice().filter(x => x.id !== id);

        this.setState({
            items: items
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