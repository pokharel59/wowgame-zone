import { Heart, Users, Trophy } from "lucide-react";

export function AboutUs() {
  return (
    <div id="about" className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-purple-900 mb-4">
            About WOW GAMES
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're on a mission to bring joy, excitement, and unforgettable memories to gamers of all ages!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-pink-400 to-rose-400 p-4 rounded-2xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-purple-900 mb-2">Our Passion</h3>
                <p className="text-gray-700">
                  We believe gaming should be fun, safe, and accessible to everyone. Whether you're 5 or 95, there's something here for you!
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-4 rounded-2xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-purple-900 mb-2">Community First</h3>
                <p className="text-gray-700">
                  We've built a vibrant community where families and friends can create lasting memories through play.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-400 p-4 rounded-2xl">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-purple-900 mb-2">Award Winning</h3>
                <p className="text-gray-700">
                  Recognized as one of the best game zones in the region, we pride ourselves on excellence and innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl transform -rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1623168923605-8134c97059ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheWdyb3VuZCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjY4NDc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Kids at playground"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 rounded-3xl p-12 text-center">
          <h3 className="text-4xl text-purple-900 mb-4">
            Join the Fun!
          </h3>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            With over 10,000 happy visitors each month, WOW GAMES is the premier destination for gaming entertainment!
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-5xl text-purple-600 mb-2">100+</div>
              <div className="text-gray-700">Games Available</div>
            </div>
            <div>
              <div className="text-5xl text-purple-600 mb-2">5000+</div>
              <div className="text-gray-700">Happy Players</div>
            </div>
            <div>
              <div className="text-5xl text-purple-600 mb-2">50+</div>
              <div className="text-gray-700">Events Monthly</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
