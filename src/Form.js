import React from "react";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
        event.preventDefault(); 
        this.props.onSubmit(this.state.value);
        this.setState({value: ""});
      }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="input-group">
                <input type="text" placeholder="What do you need to do?" className="form-control" value={this.state.value} onChange={this.handleChange} required={true}></input>
                <button className="btn btn-primary" type="submit">Add</button>
            </div>
        </form>
        );

    }

}

export default Form;