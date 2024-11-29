const VisualizationArena = ({ renderDemo }) => (
  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 md:p-8 flex items-center justify-center border-dashed border-4 border-purple-300 hover:shadow-xl transition-all">
    {renderDemo()}
  </div>
);

export default VisualizationArena;
