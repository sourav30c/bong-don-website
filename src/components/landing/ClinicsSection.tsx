import Link from 'next/link';

export default function ClinicsSection() {
    const chambers = [
        {
            name: "Galaxy Hospital",
            location: "Barrackpur, Kolkata",
            type: "Hospital Attachment",
            badgeBg: "bg-blue-100 text-blue-800",
            days: "Monday, Wednesday, Friday",
            timings: "7:00 PM – 10:00 PM",
            mapUrl: "https://www.google.com/maps/place/Galaxy+Multispeciality+Hospital/data=!4m2!3m1!1s0x0:0x59b2522564e90137?sa=X&ved=1t:2428&ictx=111",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.123456789!2d88.375!3d22.755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59b2522564e90137!2sGalaxy+Multispeciality+Hospital!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
        },
        {
            name: "Kidney Suraksha Center",
            location: "Barasat, Kolkata",
            type: "Specialist Center",
            badgeBg: "bg-emerald-100 text-emerald-800",
            days: "Tuesday & Thursday",
            timings: "Evening Hours",
            mapUrl: "https://www.google.com/maps?vet=10CAAQoqAOahcKEwioop7X2J-XAxUAAAAAHQAAAAAQBQ..i&udm&fvr=1&pvq=Cg0vZy8xMXZqa3hrcGNoIgwKBmtpZG5leRACGAM&lqi=Cg5raWRuZXkgYmFyYXNhdEjvqqOewrqAgAhaFhAAGAAYASIOa2lkbmV5IGJhcmFzYXSSARFkaWFnbm9zdGljX2NlbnRlcg&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x39f8a3c1d3677779:0x46075fb441b5d510",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.123456789!2d88.48!3d22.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a3c1d3677779%3A0x46075fb441b5d510!2sBarasat!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
        },
        {
            name: "Sustho Clinic",
            location: "Phoolbagan, Kolkata",
            type: "Clinic Chamber",
            badgeBg: "bg-purple-100 text-purple-800",
            days: "Wednesday (9 AM) & Saturday (7 PM)",
            timings: "Flexible Slots Available",
            mapUrl: "https://www.google.com/maps/place/Dr+Sourav+Sarkar/@22.5714574,88.3948248,21z/data=!4m6!3m5!1s0x3a02770036508a03:0xe02b469cf10f5cfd!8m2!3d22.5744809!4d88.395016!16s%2Fg%2F11lc_zbr61?entry=ttu",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789!2d88.395016!3d22.5744809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770036508a03%3A0xe02b469cf10f5cfd!2sDr%20Sourav%20Sarkar!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
        }
    ];

    return (
        <section className="py-20 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-3 max-w-2xl">
                        <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
                            Chambers & Attachments
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                            Clinic Locations & Schedule
                        </h2>
                        <p className="text-slate-600">
                            Consult Dr. Sourav Sarkar in person at premier hospitals and diagnostic centers across Kolkata and surrounding districts.
                        </p>
                    </div>
                    <div>
                        <Link
                            href="/clinics"
                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl transition shadow text-sm"
                        >
                            View Full Clinics Page &rarr;
                        </Link>
                    </div>
                </div>

                {/* Chambers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {chambers.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition space-y-6 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${item.badgeBg}`}>
                                    {item.type}
                                </span>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                                    <p className="text-slate-500 text-sm">{item.location}</p>
                                </div>

                                <div className="pt-4 border-t border-slate-200 space-y-1.5 text-sm text-slate-700">
                                    <p><strong className="text-slate-900">Days:</strong> {item.days}</p>
                                    <p><strong className="text-slate-900">Timings:</strong> {item.timings}</p>
                                </div>

                                {/* Embedded Map Preview */}
                                <div className="h-40 w-full rounded-2xl overflow-hidden border border-slate-200 relative">
                                    <iframe
                                        title={`${item.name} Map`}
                                        src={item.mapEmbed}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                    ></iframe>
                                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow border border-slate-200 text-xs font-semibold text-blue-600">
                                        <a href={item.mapUrl} target="_blank" rel="noopener noreferrer">
                                            Maps ↗
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-white hover:bg-blue-600 hover:text-white text-slate-800 text-center font-medium py-2.5 rounded-xl border border-slate-200 transition text-sm shadow-sm"
                                >
                                    Book Slot
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}