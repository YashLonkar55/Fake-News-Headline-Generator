function HeadlineCard({ headline }) {
    if (!headline) return null;

    return (
        <div className="bg-slate-900 rounded-2xl p-8 w-full max-w-3xl shadow-xl">
            <h2 className="text-red-500 font-bold text-xl mb-4">
                🚨 BREAKING NEWS
            </h2>

            <p className="text-2xl leading-relaxed">
                {headline}
            </p>
        </div>
    );
}

export default HeadlineCard;