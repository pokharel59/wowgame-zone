import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-300 rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-yellow-200 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600">Where Fun Never Ends!</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl text-purple-900">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                WOW GAMES
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0">
              Experience the ultimate gaming paradise! From thrilling arcade games to exciting virtual reality adventures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/games"
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span className="text-xl">Play Games Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#about"
                className="bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-yellow-100 transition-all shadow-lg hover:shadow-xl text-xl"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1614738499301-d2eed34f7b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBhcmNhZGUlMjBnYW1lcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjY4NDc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Kids playing games"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
