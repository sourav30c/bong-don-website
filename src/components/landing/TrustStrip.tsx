export default function TrustStrip() {
    const affiliations = [
        "International Society of Nephrology (ISN)",
        "Indian Society of Organ Transplantation (ISOT)",
        "Manipal Hospitals Network",
        "Apollo Multispecialty Affiliation",
        "Association of Physicians of India (API)"
    ];

    return (
        <div className="bg-white border-y border-slate-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
                    Affiliated With & Member Of Premier Medical Bodies
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-80">
                    {affiliations.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 px-5 py-3 rounded-xl transition text-slate-700 hover:text-blue-700 text-sm font-medium shadow-sm"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}