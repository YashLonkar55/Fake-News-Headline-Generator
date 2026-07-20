function GenerateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
    >
      Generate Headline
    </button>
  );
}

export default GenerateButton;