import { Laugh, Code, Sparkles } from "lucide-react";

const Header = ({ laughMeter, techScore, uiScore }) => (
  <div className="w-full max-w-6xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-lg p-8 mb-8 transition-shadow duration-300 ease-in-out hover:shadow-2xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient text-center md:text-left">
        Center Divs 🏆
      </h1>
      <div className="flex flex-wrap justify-center md:justify-end gap-6">
        <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
          <Laugh className="text-green-500 animate-bounce w-8 h-8" />
          <span className="text-lg md:text-xl font-bold text-green-800">
            {laughMeter * 20}%
          </span>
        </div>
        <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
          <Code className="text-blue-500 animate-pulse w-8 h-8" />
          <span className="text-lg md:text-xl font-bold text-blue-800">
            {techScore}
          </span>
        </div>
        <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
          <Sparkles className="text-purple-500 animate-spin-slow w-8 h-8" />
          <span className="text-lg md:text-xl font-bold text-purple-800">
            {uiScore}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;