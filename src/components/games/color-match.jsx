import { useState, useEffect } from "react";
import { Timer, Trophy } from "lucide-react";

const colors = [
  { name: "Red", bg: "bg-red-500", text: "text-red-500" },
  { name: "Blue", bg: "bg-blue-500", text: "text-blue-500" },
  { name: "Green", bg: "bg-green-500", text: "text-green-500" },
  { name: "Yellow", bg: "bg-yellow-500", text: "text-yellow-500" },
  { name: "Purple", bg: "bg-purple-500", text: "text-purple-500" },
  { name: "Pink", bg: "bg-pink-500", text: "text-pink-500" },
];

export function ColorMatch() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [displayColor, setDisplayColor] = useState(colors[0]);
  const [colorMatches, setColorMatches] = useState(true);

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
  }, [timeLeft, gameActive]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    generateNewRound();
  };

  const generateNewRound = () => {
    const newCurrentColor = colors[Math.floor(Math.random() * colors.length)];
    const newDisplayColor = colors[Math.floor(Math.random() * colors.length)];
    const matches = Math.random() > 0.5;
    
    setCurrentColor(newCurrentColor);
    setDisplayColor(matches ? newCurrentColor : newDisplayColor);
    setColorMatches(matches);
  };

  const handleAnswer = (answer) => {
    if (!gameActive) return;

    if (answer === colorMatches) {
      setScore(score + 1);
    } else {
      setScore(Math.max(0, score - 1));
    }
    
    generateNewRound();
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl text-purple-900">Color Match</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
            <Timer className="w-5 h-5 text-blue-600" />
            <span className="text-blue-900">{timeLeft}s</span>
          </div>
          <div className="bg-purple-100 px-4 py-2 rounded-full">
            <span className="text-purple-900">Score: {score}</span>
          </div>
        </div>
      </div>

      {!gameActive && timeLeft === 30 ? (
        <div className="text-center py-16">
          <h4 className="text-2xl text-gray-700 mb-6">
            Match the color name with the color shown!
          </h4>
          <button
            onClick={startGame}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all text-xl shadow-lg"
          >
            Start Game
          </button>
        </div>
      ) : !gameActive ? (
        <div className="text-center py-16">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h4 className="text-3xl text-purple-900 mb-2">Game Over!</h4>
          <p className="text-xl text-gray-700 mb-6">Final Score: {score}</p>
          <button
            onClick={startGame}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all text-xl shadow-lg"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="text-center">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-12 mb-8">
            <p className="text-2xl text-gray-700 mb-6">Does the color match?</p>
            <div className={`text-6xl mb-4 ${displayColor.text}`}>
              {currentColor.name}
            </div>
            <p className="text-gray-600">
              (Word color vs Display color)
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleAnswer(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-6 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all text-2xl shadow-lg"
            >
              ✓ Match
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-12 py-6 rounded-full hover:from-red-600 hover:to-rose-600 transition-all text-2xl shadow-lg"
            >
              ✗ No Match
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
