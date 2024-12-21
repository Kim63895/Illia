import { Component } from "react";

class List extends Component {
  render() {
    const { images, onLike, likes } = this.props;

    return (
      <ul className="listwrapper">
        {images.map((img, index) => (
          <li key={index} className={`item-${index + 1}`}>
            <img
              src={`/img/${img}`}
              alt={`smile-${index + 1}`}
              onClick={() => onLike(index)}
            />
            <p>Likes: {likes[index]}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
