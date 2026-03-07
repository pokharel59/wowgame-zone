import { Gamepad, Headset, Dice3, PartyPopper, Gift, Clock } from "lucide-react";

export function WhatWeOffer() {
  const offers = [
    {
      icon: Gamepad,
      title: "Arcade Games",
      description: "Classic and modern arcade machines for all skill levels",
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: Headset,
      title: "Virtual Reality",
      description: "Immersive VR experiences that transport you to new worlds",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Dice3,
      title: "Board Games",
      description: "Huge collection of board games for strategic fun",
      color: "from-purple-400 to-indigo-400",
    },
    {
      icon: PartyPopper,
      title: "Birthday Parties",
      description: "Unforgettable party packages with exclusive access",
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: Gift,
      title: "Prizes & Rewards",
      description: "Win amazing prizes and collect rewards as you play",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open late on weekends for maximum gaming time",
      color: "from-red-400 to-pink-400",
    },
  ];

  return (
    <div id="offers" className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-purple-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From cutting-edge technology to classic favorites, we have everything you need for an amazing gaming experience!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-br ${offer.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-purple-900 mb-3">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1708924401329-bb17acf6c16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGtpZHMlMjBnYW1pbmd8ZW58MXx8fHwxNzcyNjg0NzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="VR Gaming"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-2xl mb-2">VR Adventures</h4>
                <p>Experience gaming like never before</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1770652453111-c38e37f5e6ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWVzJTIwY2hpbGRyZW4lMjBmdW58ZW58MXx8fHwxNzcyNjg0NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Board Games"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-2xl mb-2">Board Games</h4>
                <p>Strategic fun for everyone</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1687186511607-68b95444ea33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNlbGVicmF0aW9uJTIwYmFsbG9vbnN8ZW58MXx8fHwxNzcyNjY2NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Party Celebrations"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-2xl mb-2">Party Packages</h4>
                <p>Celebrate in style with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
