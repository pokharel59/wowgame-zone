import { Gamepad2, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white p-2 rounded-full">
                <Gamepad2 className="w-8 h-8 text-purple-600" />
              </div>
              <span className="text-3xl font-black">WOW GAMES</span>
            </div>
            <p className="text-white/90 mb-4">
              Your ultimate destination for gaming fun! Creating unforgettable memories since 2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/90 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="text-white/90 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#offers" className="text-white/90 hover:text-white transition-colors">
                  What We Offer
                </a>
              </li>
              <li>
                <Link to="/games" className="text-white/90 hover:text-white transition-colors">
                  Play Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/90">
                  Mulpani Road, Kathmandu, Nepal (near upper cricket ground)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/90">98877812334</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/90">hello@wowgames.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-2xl mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-white/90">
              <li>
                <div>Monday - Thursday</div>
                <div className="text-white">10:00 AM - 8:00 PM</div>
              </li>
              <li>
                <div>Friday - Saturday</div>
                <div className="text-white">10:00 AM - 10:00 PM</div>
              </li>
              <li>
                <div>Sunday</div>
                <div className="text-white">11:00 AM - 7:00 PM</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/90">
            © 2026 WOW GAMES. All rights reserved. Made with ❤️ for gamers everywhere!
          </p>
        </div>
      </div>
    </footer>
  );
}
