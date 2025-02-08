import { Component } from "react";

class ErrorBoudary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <a href="/"> Go to the main page</a>;
    }
    return this.props.children;
  }
}
export default ErrorBoudary;
