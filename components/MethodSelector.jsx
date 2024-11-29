const MethodSelector = ({ methods, activeMethod, onSelect }) => (
  <div className="flex flex-wrap border-b-2 border-purple-200">
    {Object.keys(methods).map((method) => (
      <button
        key={method}
        onClick={() => onSelect(method)}
        className={`flex-1 min-w-[150px] py-3 md:py-4 text-sm md:text-base font-semibold transition-all duration-300 ${
          activeMethod === method
            ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md rounded-t-lg"
            : "hover:bg-purple-100 hover:rounded-t-lg"
        }`}
      >
        {methods[method].name}
      </button>
    ))}
  </div>
);

export default MethodSelector;
