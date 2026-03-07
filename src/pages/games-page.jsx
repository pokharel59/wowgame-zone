import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { MemoryGame } from "../components/games/memory-game";
// import { TicTacToe } from "../components/games/tic-tac-toe";
import { ColorMatch } from "../components/games/color-match";
// import { StarCatcher } from "../components/games/star-catcher";
import { Gamepad2 } from "lucide-react";
import { useState } from "react";

export function GamesPage() {

  const [activeTab, setActiveTab] = useState("memory");
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Gamepad2 className="w-12 h-12 text-purple-600" />
            <h1 className="text-5xl md:text-6xl text-purple-900">
              Play Free Games
            </h1>
            <Gamepad2 className="w-12 h-12 text-purple-600" />
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Have fun with our collection of interactive mini-games! Perfect for taking a break and challenging yourself.
          </p>
        </div>

        <div defaultValue="memory" className="w-full">
          <div className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white/50 p-2 rounded-2xl">
            <button
              onClick={() => setActiveTab("memory")}
              className={`rounded-xl text-lg py-3 ${activeTab === "memory" ? "bg-gradient-to-r from-green-400 to-teal-400 text-white" : "bg-white"}`}
            >
              Memory Match
            </button>
            {/* <button
              onClick={() => setActiveTab("tictactoe")}
              className={`rounded-xl text-lg py-3 ${activeTab === "tictactoe" ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-white" : "bg-white"}`}
            >
              Tic Tac Toe
            </button> */}
            <button
              onClick={() => setActiveTab("colormatch")}
              className={`rounded-xl text-lg py-3 ${activeTab === "colormatch" ? "bg-gradient-to-r from-purple-400 to-indigo-400 text-white" : "bg-white"}`}
            >
              Color Match
            </button>
            {/* <button
              onClick={() => setActiveTab("starcatcher")}
              className={`rounded-xl text-lg py-3 ${activeTab === "starcatcher" ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-white" : "bg-white"}`}
            >
              Star Catcher
            </button> */}
          </div>

          {activeTab === "memory" && (
            <div className="mt-0">
              <MemoryGame />
            </div>
          )}

          {/* {activeTab === "tictactoe" && (
            <div className="mt-0">
              <TicTacToe />
            </div>
          )} */}

          {activeTab === "colormatch" && (
            <div className="mt-0">
              <ColorMatch />
            </div>
          )}

          {/* {activeTab === "starcatcher" && (
            <div className="mt-0">
              <StarCatcher />
            </div>
          )} */}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 rounded-3xl p-8 text-center">
          <h3 className="text-3xl text-purple-900 mb-4">
            Want More Games?
          </h3>
          <p className="text-xl text-gray-700 mb-6">
            Visit our physical location to experience 100+ arcade games, VR experiences, and more!
          </p>
          <a
            href="/#about"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg text-xl"
          >
            Learn More About Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
