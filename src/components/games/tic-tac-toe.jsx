// import { useState } from "react";
// import { RotateCcw, Trophy } from "lucide-react";

// type Player = "X" | "O" | null;

// export function TicTacToe() {
//   const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
//   const [isXNext, setIsXNext] = useState(true);
//   const [winner, setWinner] = useState<Player | "draw" | null>(null);

//   const checkWinner = (squares: Player[]): Player | "draw" | null => {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (const [a, b, c] of lines) {
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }

//     if (squares.every((square) => square !== null)) {
//       return "draw";
//     }

//     return null;
//   };

//   const handleClick = (index: number) => {
//     if (board[index] || winner) return;

//     const newBoard = [...board];
//     newBoard[index] = isXNext ? "X" : "O";
//     setBoard(newBoard);
//     setIsXNext(!isXNext);

//     const gameWinner = checkWinner(newBoard);
//     if (gameWinner) {
//       setWinner(gameWinner);
//     }
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setIsXNext(true);
//     setWinner(null);
//   };

//   return (
//     <div className="bg-white rounded-3xl p-8 shadow-lg">
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-3xl text-purple-900">Tic Tac Toe</h3>
//         <button
//           onClick={resetGame}
//           className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all"
//         >
//           <RotateCcw className="w-4 h-4" />
//           <span>Reset</span>
//         </button>
//       </div>

//       {winner ? (
//         <div className="bg-gradient-to-r from-yellow-200 to-pink-200 rounded-2xl p-6 mb-6 text-center">
//           <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-2" />
//           {winner === "draw" ? (
//             <h4 className="text-2xl text-purple-900">It's a Draw! 🤝</h4>
//           ) : (
//             <h4 className="text-2xl text-purple-900">Player {winner} Wins! 🎉</h4>
//           )}
//         </div>
//       ) : (
//         <div className="bg-purple-100 rounded-2xl p-4 mb-6 text-center">
//           <p className="text-xl text-purple-900">
//             Current Player: <span className="font-bold">{isXNext ? "X" : "O"}</span>
//           </p>
//         </div>
//       )}

//       <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
//         {board.map((cell, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(index)}
//             className={`aspect-square rounded-2xl text-5xl transition-all transform hover:scale-105 ${
//               cell === "X"
//                 ? "bg-gradient-to-br from-blue-400 to-cyan-400 text-white"
//                 : cell === "O"
//                 ? "bg-gradient-to-br from-pink-400 to-rose-400 text-white"
//                 : "bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-900"
//             }`}
//           >
//             {cell}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
