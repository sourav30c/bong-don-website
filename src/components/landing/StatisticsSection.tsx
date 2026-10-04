export default function StatisticsSection() {
    const stats = [
        {
            number: "10+",
            label: "Years of Experience",
            subtext: "Dedicated nephrology & internal medicine expertise"
        },
        {
            number: "9,000+",
            label: "Patients Treated",
            subtext: "Successfully consulted & managed globally"
        },
        {
            number: "400+",
            label: "Transplants & Complex Cases",
            subtext: "Advanced renal replacement & transplant care"
        },
        {
            number: "16K+",
            label: "Community Followers",
            subtext: "Patient education via BongDoc digital outreach"
        }
    ];

    return (
        <section className="py-16 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        Clinical Milestone & Impact
                    </h2>
                    <p className="text-blue-200 text-sm">
                        Delivering trusted, evidence-based renal care backed by consistent clinical achievements.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center space-y-2 hover:bg-white/15 transition"
                        >
                            <p className="text-4xl sm:text-5xl font-extrabold text-blue-300 tracking-tight">
                                {item.number}
                            </p>
                            <p className="text-lg font-bold text-white">
                                {item.label}
                            </p>
                            <p className="text-xs text-blue-200">
                                {item.subtext}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}