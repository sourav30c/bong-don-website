import Link from 'next/link';

export default function MediaPreviewSection() {
    // We can feature top 3 videos for the homepage preview
    const featuredVideos = [
        {
            id: "5vuvZbpcwIY",
            category: "DIALYSIS CARE",
            title: "কিডনী এবং ডায়ালিসিস রোগীর কোষ্ঠকাঠিন্য? কারণ ও সমাধান",
            description: "Managing constipation in kidney and dialysis patients, underlying causes, and dietary solutions.",
            duration: "3:57"
        },
        {
            id: "TRMY5eaxq8E",
            category: "RENAL PATHOLOGY",
            title: "kidney cyst কী। কিডনী তে সিস্ট হলে কী করতে হবে?",
            description: "Understanding renal cysts, simple vs. complex cysts, ultrasound findings, and necessary clinical steps.",
            duration: "3:54"
        },
        {
            id: "kTGCRx4cSZc",
            category: "INTERNAL MEDICINE",
            title: "ফ্যাটি লিভার বা লিভারে চর্বি নিয়ে কিছু কথা | Fatty Liver",
            description: "Comprehensive insights into fatty liver grades, symptoms, underlying causes, and management protocols.",
            duration: "4:57"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Section Header with YouTube Button */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
                    <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                            In His Own Words
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Learn & Live Well with Dr Sourav Sarkar
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                            Bite-sized, evidence-led talks on kidney health, dialysis care, and living well — straight from the BongDoc channel.
                        </p>
                    </div>

                    <div>
                        <Link
                            href="/media"
                            className="inline-flex items-center gap-2 border border-slate-300 hover:border-blue-600 hover:text-blue-600 text-slate-800 font-semibold px-6 py-3 rounded-full text-sm transition shadow-sm"
                        >
                            <span>Visit YouTube Channel</span>
                            <span>&rarr;</span>
                        </Link>
                    </div>
                </div>

                {/* 3-Column Video Preview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredVideos.map((video, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                        >
                            {/* Video Embed Container */}
                            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
                                <iframe
                                    className="w-full h-full absolute inset-0 object-cover"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                                <div>
                                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                                        {video.category}
                                    </span>
                                    <h3 className="text-base font-bold text-slate-900 mt-1 line-clamp-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs leading-relaxed mt-2 line-clamp-2">
                                        {video.description}
                                    </p>
                                </div>

                                {/* <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                                    <span className="text-xs text-slate-400 font-medium">BongDoc Outreach</span>
                                    <a
                                        href={`https://youtu.be/${video.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5"
                                    >
                                        <span>▶ Play on YouTube</span>
                                        <span>&rarr;</span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}