import { Link } from "react-router-dom";
import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-white p-2 rounded-full shadow-md group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-8 h-8 text-purple-600" />
            </div>
            <span className="text-3xl font-black text-white drop-shadow-lg">
              WOW GAMES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-yellow-100 transition-colors px-4 py-2 rounded-full hover:bg-white/20"
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-white hover:text-yellow-100 transition-colors px-4 py-2 rounded-full hover:bg-white/20"
            >
              About Us
            </a>
            <a
              href="#offers"
              className="text-white hover:text-yellow-100 transition-colors px-4 py-2 rounded-full hover:bg-white/20"
            >
              What We Offer
            </a>
            <Link
              to="/games"
              className="bg-white text-purple-600 px-6 py-3 rounded-full hover:bg-yellow-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Play Games
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-white p-2 rounded-full shadow-md"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-purple-600" />
            ) : (
              <Menu className="w-6 h-6 text-purple-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block text-white hover:text-yellow-100 transition-colors px-4 py-2 rounded-full hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#about"
              className="block text-white hover:text-yellow-100 transition-colors px-4 py-2 rounded-full hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#offers"
              className="block text-white hover:text-yellow-100 transition-colors px-4 py-2 rounded-full hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              What We Offer
            </a>
            <Link
              to="/games"
              className="block bg-white text-purple-600 px-6 py-3 rounded-full hover:bg-yellow-100 transition-all text-center shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Play Games
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
