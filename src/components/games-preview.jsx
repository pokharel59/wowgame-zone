import { Link } from "react-router-dom";
import { Gamepad2, Puzzle, Zap, Star } from "lucide-react";

export function GamesPreview() {
  const games = [
    {
      title: "Memory Match",
      description: "Test your memory with colorful cards!",
      icon: Puzzle,
      color: "from-pink-400 to-rose-400",
    },
    {
      title: "Tic Tac Toe",
      description: "Classic game, endless fun!",
      icon: Gamepad2,
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Color Match",
      description: "Match the colors as fast as you can!",
      icon: Zap,
      color: "from-purple-400 to-indigo-400",
    },
    {
      title: "Star Catcher",
      description: "Catch the falling stars!",
      icon: Star,
      color: "from-yellow-400 to-orange-400",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-purple-900 mb-4">
            🎮 Mini Games 🎮
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Try our fun mini-games right here on our website! Click any game to start playing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${game.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl text-purple-900 mb-3">{game.title}</h3>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <Link
                  to="/games"
                  className="inline-flex items-center text-purple-600 hover:text-pink-600 transition-colors"
                >
                  Play Now →
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/games"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-5 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl text-xl"
          >
            View All Games
          </Link>
        </div>
      </div>
    </div>
  );
}
