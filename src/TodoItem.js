import React from "react";

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.props.onChange(this.props.id, event.target.checked);
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <li className="todo-item border-bottom">
        <div className="form-check">
          <input id={this.props.id} className="form-check-input" type="checkbox" defaultChecked={this.props.completed} onChange={this.handleChange} />
          <label htmlFor={this.props.id} className="form-check-label">
            {this.props.completed
              ? <del>{this.props.name}</del>
              : this.props.name}
          </label>
        </div>
        <div id={this.props.id} onClick={this.handleDelete} className="delete-button" title="Delete this item?">          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-secondary" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </div>
      </li>
    );
  }

}

export default TodoItem;