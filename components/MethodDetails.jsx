import { Laugh, Copy, Wand2, Gamepad } from "lucide-react";

const MethodDetails = ({
  currentMethod,
  makeLaugh,
  copyToClipboard,
  copiedMethod,
  activeMethod,
}) => (
  <div className="px-4 md:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <h2 className="text-2xl md:text-4xl font-extrabold text-purple-600 text-center md:text-left">
        {currentMethod.name}
      </h2>
      <button
        onClick={makeLaugh}
        className="mt-4 md:mt-0 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all text-sm md:text-base"
      >
        😂 Boost Laughs
      </button>
    </div>

    <div className="relative bg-gray-900 text-white rounded-xl overflow-hidden mb-4 shadow-lg">
      <button
        onClick={() => copyToClipboard(currentMethod.code)}
        className={`absolute top-2 right-2 bg-gray-800 px-3 py-2 rounded-lg text-xs md:text-sm font-medium shadow hover:bg-gray-700 transition-all ${
          copiedMethod === activeMethod ? "bg-green-500 text-white" : ""
        }`}
      >
        {copiedMethod === activeMethod ? "✅ Copied!" : <Copy size={20} />}
      </button>
      <pre className="p-4 md:p-6 overflow-x-auto text-xs md:text-sm font-mono leading-relaxed">
        <code>{currentMethod.code}</code>
      </pre>
    </div>

    <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-4 md:p-6 shadow-md">
      <h3 className="font-bold text-base md:text-lg mb-2 flex items-center">
        <Gamepad className="mr-2 text-purple-500 w-5 h-5 md:w-6 md:h-6" />{" "}
        Challengers
      </h3>
      <ul className="space-y-2">
        {currentMethod.challengers.map((challenger, index) => (
          <li key={index} className="flex items-center text-sm md:text-base">
            <Wand2 className="mr-2 text-purple-500 w-4 h-4 md:w-5 md:h-5" />
            {challenger}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-6 bg-green-50 rounded-lg p-4 italic shadow-md text-center">
      <Laugh className="inline mr-2 text-green-500" />
      &ldquo;{currentMethod.comedyQuote}&rdquo;
    </div>
  </div>
);

export default MethodDetails;
