import { Component } from "react";

class Button extends Component {
  render() {
    const { className, title } = this.props;
    return <button className={className}>{title}</button>;
  }
}

export default Button;
