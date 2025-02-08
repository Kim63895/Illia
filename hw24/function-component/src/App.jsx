import { useEffect, useState } from "react";
import List from "./components/List/List";
import Button from "./components/Button/Button";
const App = () => {
  const [images, setImages] = useState([
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
  ]);
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem("likes")) || [0, 0, 0, 0, 0, 0]
  );
  const [winner, setWinner] = useState(null);
  const [noWinnerMessage, setNoWinnerMessage] = useState(false);
  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };
  const handleShowWinner = () => {
    const maxLikes = Math.max(...likes);
    if (maxLikes === 0) {
      setWinner(null);
      setNoWinnerMessage(true);
    } else {
      setNoWinnerMessage(false);
      const winnerIndex = likes.indexOf(maxLikes);
      setWinner(winnerIndex);
    }
  };
  const handleResetButton = () => {
    const newLikes = [0, 0, 0, 0, 0, 0];
    localStorage.setItem("likes", JSON.stringify(newLikes));
    setLikes(newLikes);
    setWinner(null);
    setNoWinnerMessage(false);
  };
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);
  return (
    <header>
      <List images={images} onLike={handleLike} likes={likes} />
      <Button label="Reset votes" onClick={handleResetButton} />
      <Button label="Show winner" onClick={handleShowWinner} />
      {winner !== null ? (
        <div>
          <h2>Переможець:</h2>
          <img className="listwrapper" src={`/img/${images[winner]}`} alt={`item-${winner + 1}`} />
        </div>
      ) : noWinnerMessage ?(
        <h4>There is no winner</h4>
      ) : null}
    </header>
  );
};
export default App;
