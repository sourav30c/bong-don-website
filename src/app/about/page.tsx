import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Main Content Header */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
            Professional Profile & Credentials
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Meet Dr. Sourav Sarkar
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Gold Medalist Consultant Nephrologist & Internal Medicine Specialist dedicated to advanced renal healthcare, evidence-based treatment, and patient empowerment.
          </p>
        </div>

        {/* Bio Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16 items-start">
          
          {/* Left Column: Doctor Photo & Quick Info Box */}
          <div className="md:col-span-5 space-y-6">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-slate-200 shadow-xl border-4 border-white">
              <Image 
                src="/LandingProfImage.jpg" 
                alt="Dr. Sourav Sarkar" 
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Professional Credentials</h3>
              <div className="text-sm space-y-2 text-slate-600">
                <p><strong className="text-slate-900">Degrees:</strong> MBBS, MD (Medicine), DM (Nephrology)</p>
                <p><strong className="text-slate-900">International:</strong> MRCP (London)</p>
                <p><strong className="text-slate-900">Accolades:</strong> Gold Medalist</p>
                <p><strong className="text-slate-900">Institution:</strong> SSKM (PG) Hospital, Kolkata</p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Philosophy */}
          <div className="md:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Clinical Background & Philosophy</h2>
              <p className="text-slate-600 leading-relaxed">
                Dr. Sourav Sarkar is a highly skilled Consultant Nephrologist and Internal Medicine Specialist. Having completed his advanced super-specialization training (DM) at premier institutions like SSKM Hospital, Kolkata, he brings extensive hands-on expertise in treating complex renal and systemic disorders.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Recognized with a Gold Medal and holding an MRCP (London) qualification, his core clinical practice emphasizes early detection of chronic kidney disease (CKD), management of diabetic and hypertensive nephropathy, critical care nephrology, and personalized patient care plans.
              </p>
            </div>

            {/* Educational Qualifications Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Education & Training</h2>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3 pb-3 border-b border-slate-100">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                  <div>
                    <strong className="text-slate-900 block">DM in Nephrology</strong>
                    <span className="text-sm text-slate-500">Advanced training from SSKM (PG) Hospital, Kolkata. Specializing in renal replacement therapies, dialysis care, and kidney biopsies.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 pb-3 border-b border-slate-100">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                  <div>
                    <strong className="text-slate-900 block">MD in Medicine (Gold Medalist)</strong>
                    <span className="text-sm text-slate-500">Rigorous academic and clinical foundation in general internal medicine and complex adult pathology.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 pb-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                  <div>
                    <strong className="text-slate-900 block">MRCP (London)</strong>
                    <span className="text-sm text-slate-500">International professional membership showcasing adherence to global standards of internal medical practice.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Digital Healthcare Commitment */}
            <div className="bg-blue-900 text-white p-8 rounded-3xl space-y-4 shadow-md">
              <h3 className="text-xl font-bold">Digital Outreach & Patient Education</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Beyond his hospital chambers and clinical duties, Dr. Sarkar is deeply committed to public health awareness. As a digital content creator and host of <strong>BongDoc</strong> on YouTube, he bridges the gap between medical science and everyday patients, making kidney care and health literacy accessible to thousands.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}