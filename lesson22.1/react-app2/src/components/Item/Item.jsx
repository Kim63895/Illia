import { Component } from "react";
import Button from "../Button/Button";

class Item extends Component {
  render() {
    return (
      <li className="d-flex justify-content-between mb-2 mt-2 listItem">
        <span>{this.props.text}</span>
        <div>
          <Button title="Done" className="btn btn-success" />
          <Button title="Delete" className="btn btn-danger" />
        </div>
      </li>
    );
  }
}

export default Item;
