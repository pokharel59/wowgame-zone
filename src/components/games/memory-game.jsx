import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const emojis = ["🎮", "🎯", "🎨", "🎪", "🎭", "🎸", "🎺", "🎹"];

export function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
  };

  const handleCardClick = (index) => {
    if (
      flipped.length === 2 ||
      flipped.includes(index) ||
      matched.includes(index)
    ) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;
      
      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
        setFlipped([]);
        
        if (matched.length + 2 === cards.length) {
          setGameWon(true);
        }
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl text-purple-900">Memory Match</h3>
        <div className="flex items-center space-x-4">
          <div className="bg-purple-100 px-4 py-2 rounded-full">
            <span className="text-purple-900">Moves: {moves}</span>
          </div>
          <button
            onClick={initializeGame}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            New Game
          </button>
        </div>
      </div>

      {gameWon && (
        <div className="bg-gradient-to-r from-yellow-200 to-pink-200 rounded-2xl p-6 mb-6 text-center">
          <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-2" />
          <h4 className="text-2xl text-purple-900 mb-2">🎉 You Won! 🎉</h4>
          <p className="text-gray-700">You completed the game in {moves} moves!</p>
        </div>
      )}

      <div className="grid grid-cols-4 gap-4">
        {cards.map((emoji, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          const isMatched = matched.includes(index);

          return (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`aspect-square rounded-2xl text-4xl transition-all transform hover:scale-105 ${
                isFlipped
                  ? isMatched
                    ? "bg-gradient-to-br from-green-400 to-emerald-400"
                    : "bg-gradient-to-br from-blue-400 to-cyan-400"
                  : "bg-gradient-to-br from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500"
              }`}
            >
              {isFlipped ? emoji : "?"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
