import { Component } from "react";
import List from "./components/List/List";
import Button from "./components/Button/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: JSON.parse(localStorage.getItem("likes")) || [0, 0, 0, 0, 0, 0],
      winner: null,
    };
  }

  handleLike = (index) => {
    const newLikes = [...this.state.likes];
    newLikes[index] += 1;

    this.setState({ likes: newLikes }, () => {
      localStorage.setItem("likes", JSON.stringify(newLikes));
    });
  };

  handleResetButton = (event) => {
    event.preventDefault();
    localStorage.setItem("likes", JSON.stringify([0, 0, 0, 0, 0, 0]));
    this.setState({ likes: [0, 0, 0, 0, 0, 0], winner: null });
  };

  handleShowWinner = () => {
    const maxLikes = Math.max(...this.state.likes);
    const winnerIndex = this.state.likes.indexOf(maxLikes);
    this.setState({ winner: winnerIndex });
  };

  render() {
    const images = [
      "img1.png",
      "img2.png",
      "img3.png",
      "img4.jpg",
      "img5.jpg",
      "img6.jpg",
    ];

    return (
      <header>
        <List
          images={images}
          onLike={this.handleLike}
          likes={this.state.likes}
        />
        <Button label="Reset votes" onClick={this.handleResetButton} />
        <Button label="Show winner" onClick={this.handleShowWinner} />
        {this.state.winner !== null && (
          <div>
            <h2>Переможець:</h2>
            <img
              src={`/img/${images[this.state.winner]}`}
              alt={`item-${this.state.winner + 1}`}
            />
          </div>
        )}
      </header>
    );
  }
}

export default App;
