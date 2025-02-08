import { Component } from "react";

class Form extends Component {
  sendForm(event) {
    event.preventDefault();
    this.props.addItem(event.target.todo.value);
  }

  render() {
    return (
      <form className="d-flex" onSubmit={this.sendForm.bind(this)}>
        <input name="todo" type="text" className="form-control" />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    );
  }
}

export default Form;
