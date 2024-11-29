import { Laugh, Code, Sparkles } from "lucide-react";

const Header = ({ laughMeter, techScore, uiScore }) => (
  <div className="w-full max-w-6xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-6 mb-8 hover:shadow-2xl transition-shadow mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient text-center md:text-left">
        Center Divs 🏆
      </h1>
      <div className="flex flex-wrap justify-center md:justify-end gap-4">
        <div className="flex items-center space-x-2">
          <Laugh className="text-green-500 animate-bounce w-6 h-6" />
          <span className="text-lg md:text-xl font-bold text-green-700">
            {laughMeter * 20}%
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Code className="text-blue-500 animate-pulse w-6 h-6" />
          <span className="text-lg md:text-xl font-bold text-blue-700">
            {techScore}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Sparkles className="text-purple-500 animate-spin-slow w-6 h-6" />
          <span className="text-lg md:text-xl font-bold text-purple-700">
            {uiScore}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
