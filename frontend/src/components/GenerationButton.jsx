function GenerateButton({ onClick, loading }) {
  return (
    <div className="generate-btn-wrapper">
      <div className="generate-btn-glow" />
      <button
        id="generate-headline-btn"
        onClick={onClick}
        disabled={loading}
        className={`generate-btn${loading ? " loading" : ""}`}
        aria-label="Generate a fake news headline"
      >
        {loading ? (
          <>
            <span className="btn-spinner" />
            Generating…
          </>
        ) : (
          <>
            <span className="btn-icon">⚡</span>
            Generate Headline
          </>
        )}
      </button>
    </div>
  );
}

export default GenerateButton;