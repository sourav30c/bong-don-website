// import ScrollReveal from '@/components/ui/ScrollReveal';

// const videos = [
//   {
//     id: "5vuvZbpcwIY",
//     category: "Dialysis Care",
//     title: "কিডনী এবং ডায়ালিসিস রোগীর কোষ্ঠকাঠিন্য? কারণ ও সমাধান",
//     description: "Managing constipation in kidney and dialysis patients, underlying causes, dietary solutions, and when to seek urgent care.",
//     youtubeUrl: "https://youtu.be/5vuvZbpcwIY"
//   },
//   {
//     id: "TRMY5eaxq8E",
//     category: "Renal Pathology",
//     title: "kidney cyst কী। কিডনী তে সিস্ট হলে কী করতে হবে?",
//     description: "Understanding renal cysts, simple vs. complex cysts, ultrasound findings, and necessary clinical steps.",
//     youtubeUrl: "https://youtu.be/TRMY5eaxq8E"
//   },
//   {
//     id: "soQYZpmYJYE",
//     category: "General Health",
//     title: "শরীরে ভিটামিন D কমে যাবার কারন এবং লক্ষণ",
//     description: "Causes and symptoms of Vitamin D deficiency and natural lifestyle adjustments to maintain healthy levels.",
//     youtubeUrl: "https://youtu.be/soQYZpmYJYE"
//   },
//   {
//     id: "kTGCRx4cSZc",
//     category: "Internal Medicine",
//     title: "ফ্যাটি লিভার বা লিভারে চর্বি নিয়ে কিছু কথা | Fatty Liver",
//     description: "Comprehensive insights into fatty liver grades, symptoms, underlying causes, and management protocols.",
//     youtubeUrl: "https://youtu.be/kTGCRx4cSZc"
//   },
//   {
//     id: "mgpCiFrfCZs",
//     category: "Kidney Stone Awareness",
//     title: "কোমরে ব্যাথা হচ্ছে ? কিডনি তে পাথর নয় তো? | Kidney Stone",
//     description: "Recognizing back pain symptoms, stone sizes, prevention, hydration tips, and when medical intervention is necessary.",
//     youtubeUrl: "https://youtu.be/mgpCiFrfCZs"
//   },
//   {
//     id: "rXsujBAL2N8",
//     category: "Nephrology Guidance",
//     title: "কখন এবং কেন একজন নেফ্রোলজিস্ট বা কিডনি বিশেষজ্ঞ দেখাবেন?",
//     description: "When and why should you consult a kidney specialist? An expert breakdown on early detection and reversing renal issues.",
//     youtubeUrl: "https://www.youtube.com/watch?v=rXsujBAL2N8"
//   },
//   {
//     id: "sM-fNEXKHAk",
//     category: "Life Lessons & Journey",
//     title: "একসময় পড়াশোনা ছেড়ে দিতে হয়েছিল 🥺 | আজ আমি সুপার স্পেশালিস্ট ডাক্তার",
//     description: "An inspiring personal journey overcoming hardships, childhood struggles, and valuable life lessons on perseverance.",
//     youtubeUrl: "https://youtu.be/sM-fNEXKHAk"
//   },
//   {
//     id: "aVg2omXIcB8",
//     category: "General Health & Wellness",
//     title: "শারীরিক দুর্বলতার কারণ সমূহ এবং উপসর্গ | Causes of Weakness",
//     description: "Decoding persistent physical weakness, underlying medical causes, vitamin deficiencies, and when to seek expert help.",
//     youtubeUrl: "https://youtu.be/aVg2omXIcB8"
//   }
// ];

// export default function MediaPage() {
//   return (
//     <div className="bg-slate-50 min-h-screen">

//       {/* Header Section */}
//       <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
//         <ScrollReveal>
//           <div className="space-y-4">
//             <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 shadow-sm animate-pulse">
//               Patient Education & Digital Outreach
//             </span>
//             <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
//               Media, Vlogs & BongDoc
//             </h1>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//               Watch expert medical insights, kidney care guidance, and health awareness discussions hosted by Dr. Sourav Sarkar on his official YouTube channel.
//             </p>
//           </div>
//         </ScrollReveal>
//       </section>

//       {/* Featured Video Embeds Section (Animated Grid Cards) */}
//       <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
//         <ScrollReveal>
//           <div className="mb-10">
//             <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Video Library</span>
//             <h2 className="text-3xl font-extrabold text-slate-900 border-l-4 border-blue-600 pl-3.5 mt-1">
//               Featured Videos & Discussions
//             </h2>
//             <p className="text-slate-600 text-sm mt-1.5">Direct insights into kidney health, dialysis care, Vitamin D, fatty liver, and overall wellness.</p>
//           </div>
//         </ScrollReveal>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {videos.map((video, index) => (
//             <ScrollReveal key={video.id + index} className="h-full">
//               <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
//                 <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//                   <iframe
//                     className="w-full h-full absolute inset-0 object-cover"
//                     src={`https://www.youtube.com/embed/${video.id}`}
//                     title={video.title}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>

//                 <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
//                   <div>
//                     <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
//                       {video.category}
//                     </span>
//                     <h3 className="text-base font-bold text-slate-900 mt-2.5 line-clamp-2 group-hover:text-blue-600 transition-colors">
//                       {video.title}
//                     </h3>
//                     <p className="text-slate-600 text-xs leading-relaxed mt-2 line-clamp-2">
//                       {video.description}
//                     </p>
//                   </div>

//                   <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                     <span className="font-semibold text-slate-400">Source: BongDoc</span>
//                     <a
//                       href={video.youtubeUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300"
//                     >
//                       <span>Watch on YouTube</span>
//                       <span>&rarr;</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const videos = [
  {
    id: "5vuvZbpcwIY",
    category: "Dialysis Care",
    title: "কিডনী এবং ডায়ালিসিস রোগীর কোষ্ঠকাঠিন্য? কারণ ও সমাধান",
    description: "Managing constipation in kidney and dialysis patients, underlying causes, dietary solutions, and when to seek urgent care.",
    youtubeUrl: "https://youtu.be/5vuvZbpcwIY"
  },
  {
    id: "TRMY5eaxq8E",
    category: "Renal Pathology",
    title: "kidney cyst কী। কিডনী তে সিস্ট হলে কী করতে হবে?",
    description: "Understanding renal cysts, simple vs. complex cysts, ultrasound findings, and necessary clinical steps.",
    youtubeUrl: "https://youtu.be/TRMY5eaxq8E"
  },
  {
    id: "soQYZpmYJYE",
    category: "General Health",
    title: "শরীরে ভিটামিন D কমে যাবার কারন এবং লক্ষণ",
    description: "Causes and symptoms of Vitamin D deficiency and natural lifestyle adjustments to maintain healthy levels.",
    youtubeUrl: "https://youtu.be/soQYZpmYJYE"
  },
  {
    id: "kTGCRx4cSZc",
    category: "Internal Medicine",
    title: "ফ্যাটি লিভার বা লিভারে চর্বি নিয়ে কিছু কথা | Fatty Liver",
    description: "Comprehensive insights into fatty liver grades, symptoms, underlying causes, and management protocols.",
    youtubeUrl: "https://youtu.be/kTGCRx4cSZc"
  },
  {
    id: "mgpCiFrfCZs",
    category: "Kidney Stone Awareness",
    title: "কোমরে ব্যাথা হচ্ছে ? কিডনি তে পাথর নয় তো? | Kidney Stone",
    description: "Recognizing back pain symptoms, stone sizes, prevention, hydration tips, and when medical intervention is necessary.",
    youtubeUrl: "https://youtu.be/mgpCiFrfCZs"
  },
  {
    id: "rXsujBAL2N8",
    category: "Nephrology Guidance",
    title: "কখন এবং কেন একজন নেফ্রোলজিস্ট বা কিডনি বিশেষজ্ঞ দেখাবেন?",
    description: "When and why should you consult a kidney specialist? An expert breakdown on early detection and reversing renal issues.",
    youtubeUrl: "https://www.youtube.com/watch?v=rXsujBAL2N8"
  },
  {
    id: "sM-fNEXKHAk",
    category: "Life Lessons & Journey",
    title: "একসময় পড়াশোনা ছেড়ে দিতে হয়েছিল 🥺 | আজ আমি সুপার স্পেশালিস্ট ডাক্তার",
    description: "An inspiring personal journey overcoming hardships, childhood struggles, and valuable life lessons on perseverance.",
    youtubeUrl: "https://youtu.be/sM-fNEXKHAk"
  },
  {
    id: "aVg2omXIcB8",
    category: "General Health & Wellness",
    title: "শারীরিক দুর্বলতার কারণ সমূহ এবং উপসর্গ | Causes of Weakness",
    description: "Decoding persistent physical weakness, underlying medical causes, vitamin deficiencies, and when to seek expert help.",
    youtubeUrl: "https://youtu.be/aVg2omXIcB8"
  }
];

export default function MediaPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Header Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <ScrollReveal>
          <div className="space-y-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 shadow-sm">
              Patient Education & Digital Outreach
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Media, Vlogs & BongDoc
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Watch expert medical insights, kidney care guidance, and health awareness discussions hosted by Dr. Sourav Sarkar on his official YouTube channel.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured Video Embeds Section */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Video Library</span>
            <h2 className="text-3xl font-extrabold text-slate-900 border-l-4 border-blue-600 pl-3.5 mt-1">
              Featured Videos & Discussions
            </h2>
            <p className="text-slate-600 text-sm mt-1.5">Direct insights into kidney health, dialysis care, Vitamin D, fatty liver, and overall wellness.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => {
            const isPlaying = activeVideo === video.id;

            return (
              <ScrollReveal key={video.id} className="h-full">
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group">

                  {/* Video Media Box with Lazy Thumbnail Loading */}
                  <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
                    {isPlaying ? (
                      <iframe
                        className="w-full h-full absolute inset-0 object-cover"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div
                        onClick={() => setActiveVideo(video.id)}
                        className="absolute inset-0 cursor-pointer group/thumb flex items-center justify-center"
                      >
                        {/* YouTube Thumbnail */}
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105 absolute inset-0"
                          loading="lazy"
                        />
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-slate-950/20 transition-colors group-hover/thumb:bg-slate-950/10"></div>

                        {/* Official YouTube Red Rounded Play Button */}
                        <div className="relative z-10 w-16 h-11 bg-red-600 group-hover/thumb:bg-red-700 text-white rounded-xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover/thumb:scale-110">
                          <svg className="w-5 h-5 translate-x-0.5 fill-current text-white" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                        {video.category}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-2.5 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed mt-2 line-clamp-2">
                        {video.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-slate-400">Source: BongDoc</span>
                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300"
                      >
                        <span>Watch on YouTube</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

    </div>
  );
}