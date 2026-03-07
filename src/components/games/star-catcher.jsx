// import { useState, useEffect, useRef } from "react";
// import { Star, Trophy } from "lucide-react";

// interface FallingStar {
//   id: number;
//   x: number;
//   y: number;
//   speed: number;
// }

// export function StarCatcher() {
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(30);
//   const [gameActive, setGameActive] = useState(false);
//   const [stars, setStars] = useState<FallingStar[]>([]);
//   const [basketX, setBasketX] = useState(50);
//   const gameAreaRef = useRef<HTMLDivElement>(null);
//   const starIdRef = useRef(0);

//   useEffect(() => {
//     if (gameActive && timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (timeLeft === 0) {
//       setGameActive(false);
//       setStars([]);
//     }
//   }, [timeLeft, gameActive]);

//   useEffect(() => {
//     if (gameActive) {
//       const interval = setInterval(() => {
//         const newStar: FallingStar = {
//           id: starIdRef.current++,
//           x: Math.random() * 90,
//           y: 0,
//           speed: 2 + Math.random() * 2,
//         };
//         setStars((prev) => [...prev, newStar]);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [gameActive]);

//   useEffect(() => {
//     if (gameActive) {
//       const interval = setInterval(() => {
//         setStars((prev) => {
//           const updated = prev
//             .map((star) => ({ ...star, y: star.y + star.speed }))
//             .filter((star) => {
//               if (star.y > 85 && star.y < 95) {
//                 if (Math.abs(star.x - basketX) < 8) {
//                   setScore((s) => s + 1);
//                   return false;
//                 }
//               }
//               return star.y < 100;
//             });
//           return updated;
//         });
//       }, 50);

//       return () => clearInterval(interval);
//     }
//   }, [gameActive, basketX]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (gameAreaRef.current) {
//       const rect = gameAreaRef.current.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 100;
//       setBasketX(Math.max(5, Math.min(95, x)));
//     }
//   };

//   const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
//     if (gameAreaRef.current) {
//       const rect = gameAreaRef.current.getBoundingClientRect();
//       const touch = e.touches[0];
//       const x = ((touch.clientX - rect.left) / rect.width) * 100;
//       setBasketX(Math.max(5, Math.min(95, x)));
//     }
//   };

//   const startGame = () => {
//     setScore(0);
//     setTimeLeft(30);
//     setGameActive(true);
//     setStars([]);
//     setBasketX(50);
//   };

//   return (
//     <div className="bg-white rounded-3xl p-8 shadow-lg">
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-3xl text-purple-900">Star Catcher</h3>
//         <div className="flex items-center space-x-4">
//           <div className="bg-blue-100 px-4 py-2 rounded-full">
//             <span className="text-blue-900">Time: {timeLeft}s</span>
//           </div>
//           <div className="bg-purple-100 px-4 py-2 rounded-full">
//             <span className="text-purple-900">Score: {score}</span>
//           </div>
//         </div>
//       </div>

//       {!gameActive && timeLeft === 30 ? (
//         <div className="text-center py-16">
//           <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
//           <h4 className="text-2xl text-gray-700 mb-6">
//             Catch the falling stars with your basket!
//           </h4>
//           <button
//             onClick={startGame}
//             className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all text-xl shadow-lg"
//           >
//             Start Game
//           </button>
//         </div>
//       ) : !gameActive ? (
//         <div className="text-center py-16">
//           <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
//           <h4 className="text-3xl text-purple-900 mb-2">Game Over!</h4>
//           <p className="text-xl text-gray-700 mb-6">You caught {score} stars!</p>
//           <button
//             onClick={startGame}
//             className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all text-xl shadow-lg"
//           >
//             Play Again
//           </button>
//         </div>
//       ) : (
//         <div
//           ref={gameAreaRef}
//           onMouseMove={handleMouseMove}
//           onTouchMove={handleTouchMove}
//           className="relative bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 rounded-2xl h-[500px] overflow-hidden cursor-none"
//         >
//           {/* Stars */}
//           {stars.map((star) => (
//             <div
//               key={star.id}
//               className="absolute transition-none"
//               style={{
//                 left: `${star.x}%`,
//                 top: `${star.y}%`,
//                 transform: "translate(-50%, -50%)",
//               }}
//             >
//               <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
//             </div>
//           ))}

//           {/* Basket */}
//           <div
//             className="absolute bottom-4 transition-none"
//             style={{
//               left: `${basketX}%`,
//               transform: "translateX(-50%)",
//             }}
//           >
//             <div className="w-16 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-t-full border-4 border-orange-600"></div>
//           </div>

//           {/* Instructions */}
//           <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-2 rounded-full">
//             <p className="text-purple-900">Move your mouse to catch stars!</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
