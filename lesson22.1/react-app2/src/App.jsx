import { Component } from "react";

import Form from "./components/Form/Form";
import List from "./components/List/List";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const jsonTodos = localStorage.getItem("todos");
    const todos = jsonTodos ? JSON.parse(jsonTodos) : [];

    this.setState({
      todos,
    });
  }

  addItem(value) {
    const todos = JSON.parse(localStorage.getItem("todos"));
    let newArray = todos ? [...todos, value] : [value];

    this.setState({
      todos: newArray,
    });
    localStorage.setItem("todos", JSON.stringify(newArray));
  }

  render() {
    return (
      <>
        {/* <Header /> */}
        <main className="container">
          <Form addItem={this.addItem.bind(this)} />
          <List values={this.state.todos} />
        </main>
      </>
    );
  }
}

export default App;
