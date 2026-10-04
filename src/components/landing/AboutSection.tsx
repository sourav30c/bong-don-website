
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
                        Professional Profile & Credentials
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                        About Dr. Sourav Sarkar
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        Gold Medalist Consultant Nephrologist & Internal Medicine Specialist dedicated to advanced renal healthcare and patient empowerment.
                    </p>
                </div>

                {/* Main Equal-Height Grid Section (No Separate Cards) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Column: Clinical Philosophy & Table Structure (Span 7) */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-8">

                        {/* Doctor Intro & Bio */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                                Clinical Background & Philosophy
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Dr. Sourav Sarkar is a highly skilled Consultant Nephrologist and Internal Medicine Specialist. Having completed his advanced super-specialization training (DM) at SSKM Hospital, Kolkata, he brings extensive expertise in managing complex renal disorders, dialysis care, and renal replacement therapies.
                            </p>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Recognized as a Gold Medalist with an MRCP (London) qualification, his clinical focus emphasizes early detection of chronic kidney disease (CKD), diabetic nephropathy, and evidence-based patient-centric care.
                            </p>
                        </div>

                        {/* Education & Training (Table Style) */}
                        <div className="space-y-3">
                            <div className="bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-t-xl">
                                Education & Training
                            </div>
                            <div className="bg-white rounded-b-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100 text-sm">
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">DM Nephrology</strong>
                                    <span className="sm:col-span-2 text-slate-600">SSKM (PG) Hospital, Kolkata (Gold Medalist)</span>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">MD General Medicine</strong>
                                    <span className="sm:col-span-2 text-slate-600">Medical College Kolkata, Kolkata</span>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">MBBS (Honours)</strong>
                                    <span className="sm:col-span-2 text-slate-600">Midnapore Medical College and Hospital</span>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">MRCP</strong>
                                    <span className="sm:col-span-2 text-slate-600">Royal College of Physicians, London</span>
                                </div>
                            </div>
                        </div>

                        {/* Professional Experience (Table Style) */}
                        <div className="space-y-3">
                            <div className="bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-t-xl">
                                Professional Experience
                            </div>
                            <div className="bg-white rounded-b-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100 text-sm">
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">Consultant Nephrologist</strong>
                                    <span className="sm:col-span-2 text-slate-600">Galaxy Hospital, Barrackpur</span>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">Senior Nephrology Specialist</strong>
                                    <span className="sm:col-span-2 text-slate-600">Kidney Suraksha, Barasat & Sustho Clinic, Phoolbagan</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Profile Image + Talks, Memberships & Languages (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">

                        {/* Profile Image */}
                        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-slate-200 shadow-md">
                            <Image
                                src="/LandingProfImage_2.jpg"
                                alt="Dr. Sourav Sarkar"
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover object-center"
                                priority
                            />
                        </div>

                        {/* Talks & Publications */}
                        <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                                Talks & Publications
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                25+ scientific publications and clinical discussions in national and international journals on renal replacement, dialysis, and glomerular disorders.
                            </p>
                        </div>

                        {/* Fellowship & Membership */}
                        <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                                Fellowship & Membership
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Member of the Indian Society of Nephrology, Indian Society of Organ Transplant, American Society of Nephrology, and International Society of Nephrology.
                            </p>
                        </div>

                        {/* Languages Spoken */}
                        <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                                Languages Spoken
                            </h4>
                            <p className="text-xs text-slate-700 font-medium">
                                Bengali, Hindi, English
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
