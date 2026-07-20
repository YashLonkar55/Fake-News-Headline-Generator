import { useState } from "react";

function HeadlineCard({ headline, source }) {
    const [copied, setCopied] = useState(false);

    if (!headline) return null;

    const now = new Date();
    const timestamp = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    function handleCopy() {
        navigator.clipboard.writeText(headline).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }

    return (
        <div className="headline-card" role="article" aria-label="Generated headline">
            <div className="headline-card-glow" />
            <div className="headline-card-inner">

                <div className="card-top-bar">
                    <span className="breaking-badge">
                        <span className="breaking-dot" />
                        Breaking News
                    </span>
                    <span className="card-timestamp">{timestamp}</span>
                </div>

                <hr className="card-divider" />

                <p className="headline-text">{headline}</p>

                <div className="card-footer">
                    <span className="card-source">
                        Source: <span className="card-source-name">{source}</span>
                    </span>
                    <button
                        className={`copy-btn${copied ? " copied" : ""}`}
                        onClick={handleCopy}
                        aria-label="Copy headline to clipboard"
                    >
                        {copied ? "✓ Copied!" : "⎘ Copy"}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default HeadlineCard;