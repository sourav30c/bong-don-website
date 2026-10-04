

// export default function MediaPage() {
//   return (
//     <div className="bg-slate-50 min-h-screen">
//       {/* Header Section */}
//       <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
//         <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
//           Patient Education & Outreach
//         </span>
//         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
//           Media, Vlogs & BongDoc
//         </h1>
//         <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//           Watch expert medical insights, kidney care guidance, and health awareness discussions hosted by Dr. Sourav Sarkar on his official YouTube channel.
//         </p>
//       </section>

//       {/* YouTube Channel Spotlight Banner */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
//         <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
//           <div className="space-y-4 max-w-xl">
//             <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//               YouTube Creator
//             </span>
//             <h2 className="text-3xl font-bold tracking-tight">Subscribe to BongDoc</h2>
//             <p className="text-blue-100 text-sm leading-relaxed">
//               Bridging the gap between complex nephrology and everyday patients. Explore expert medical breakdowns, health tips, and live discussions on YouTube.
//             </p>
//             <div className="pt-2">
//               <a
//                 href="https://www.youtube.com/@Drsouravsarkar007"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl shadow transition"
//               >
//                 Visit YouTube Channel (@Drsouravsarkar007)
//               </a>
//             </div>
//           </div>
//           <div className="w-full md:w-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-2">
//             <p className="text-3xl font-bold">16K+</p>
//             <p className="text-xs text-blue-200 uppercase tracking-wider font-medium">Community Followers</p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Video Embeds Section (3-Column High Clarity Grid) */}
//       <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
//             Featured Videos & Discussions
//           </h2>
//           <p className="text-slate-600 text-sm mt-1">Direct insights into kidney health, stone prevention, personal journeys, and overall wellness.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {/* Video 1 */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/rXsujBAL2N8"
//                 title="কখন এবং কেন একজন নেফ্রোলজিস্ট বা কিডনি বিশেষজ্ঞ দেখাবেন?"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Nephrology Guidance</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">কখন এবং কেন একজন নেফ্রোলজিস্ট বা কিডনি বিশেষজ্ঞ দেখাবেন?</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   When and why should you consult a kidney specialist? An expert breakdown on early detection and reversing renal issues.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://www.youtube.com/watch?v=rXsujBAL2N8" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>

//           {/* Video 2 */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/mgpCiFrfCZs"
//                 title="কোমরে ব্যাথা হচ্ছে ? কিডনি তে পাথর নয় তো?"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Kidney Stone Awareness</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">কোমরে ব্যাথা হচ্ছে ? কিডনি তে পাথর নয় তো? | Kidney Stone</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   Recognizing back pain symptoms, stone sizes, prevention, hydration tips, and when medical intervention is necessary.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://www.youtube.com/watch?v=mgpCiFrfCZs" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>

//           {/* Video 3 */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/sM-fNEXKHAk"
//                 title="একসময় পড়াশোনা ছেড়ে দিতে হয়েছিল | আজ আমি সুপার স্পেশালিস্ট ডাক্তার"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Life Lessons & Journey</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">একসময় পড়াশোনা ছেড়ে দিতে হয়েছিল 🥺 | আজ আমি সুপার স্পেশালিস্ট ডাক্তার</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   An inspiring personal journey overcoming hardships, childhood struggles, and valuable life lessons on perseverance.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://www.youtube.com/watch?v=sM-fNEXKHAk" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>

//           {/* Video 4 */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/aVg2omXIcB8"
//                 title="শারীরিক দুর্বলতার কারণ সমূহ এবং উপসর্গ"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">General Health & Wellness</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">শারীরিক দুর্বলতার কারণ সমূহ এবং উপসর্গ | Causes of Weakness</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   Decoding persistent physical weakness, underlying medical causes, vitamin deficiencies, and when to seek expert help.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://www.youtube.com/watch?v=aVg2omXIcB8" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>



//         </div>
//       </section>

//     </div>
//   );
// }

// export default function MediaPage() {
//   return (
//     <div className="bg-slate-50 min-h-screen">
//       {/* Header Section */}
//       <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
//         <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
//           Patient Education & Outreach
//         </span>
//         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
//           Media, Vlogs & BongDoc
//         </h1>
//         <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//           Watch expert medical insights, kidney care guidance, and health awareness discussions hosted by Dr. Sourav Sarkar on his official YouTube channel.
//         </p>
//       </section>

//       {/* YouTube Channel Spotlight Banner */}
//       {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
//         <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
//           <div className="space-y-4 max-w-xl">
//             <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//               YouTube Creator
//             </span>
//             <h2 className="text-3xl font-bold tracking-tight">Subscribe to BongDoc</h2>
//             <p className="text-blue-100 text-sm leading-relaxed">
//               Bridging the gap between complex nephrology and everyday patients. Explore expert medical breakdowns, health tips, and live discussions on YouTube.
//             </p>
//             <div className="pt-2">
//               <a
//                 href="https://www.youtube.com/@Drsouravsarkar007"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl shadow transition"
//               >
//                 Visit YouTube Channel (@Drsouravsarkar007)
//               </a>
//             </div>
//           </div>
//           <div className="w-full md:w-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-2">
//             <p className="text-3xl font-bold">16K+</p>
//             <p className="text-xs text-blue-200 uppercase tracking-wider font-medium">Community Followers</p>
//           </div>
//         </div>
//       </section> */}

//       {/* Featured Video Embeds Section (3-Column High Clarity Grid) */}
//       <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
//             Featured Videos & Discussions
//           </h2>
//           <p className="text-slate-600 text-sm mt-1">Direct insights into kidney health, dialysis care, Vitamin D, fatty liver, and overall wellness.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {/* Video 1: Constipation in Kidney / Dialysis Patients */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/5vuvZbpcwIY"
//                 title="কিডনী এবং ডায়ালিসিস রোগীর কোষ্ঠকাঠিন্য? কারণ, সমাধান ও কখন সতর্ক হবেন"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Dialysis Care</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">কিডনী এবং ডায়ালিসিস রোগীর কোষ্ঠকাঠিন্য? কারণ ও সমাধান</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   Managing constipation in kidney and dialysis patients, underlying causes, dietary solutions, and when to seek urgent care.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://youtu.be/5vuvZbpcwIY" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>

//           {/* Video 2: Kidney Cysts */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/TRMY5eaxq8E"
//                 title="kidney cyst কী। কিডনী তে সিস্ট হলে কী করতে হবে?"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Renal Pathology</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">kidney cyst কী। কিডনী তে সিস্ট হলে কী করতে হবে?</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   Understanding renal cysts, simple vs. complex cysts, ultrasound findings, and necessary clinical steps.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://youtu.be/TRMY5eaxq8E" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>

//           {/* Video 3: Vitamin D Deficiency */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/soQYZpmYJYE"
//                 title="শরীরে ভিটামিন D কমে যাবার কারন এবং লক্ষণ"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">General Health</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">শরীরে ভিটামিন D কমে যাবার কারন এবং লক্ষণ</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   Causes and symptoms of Vitamin D deficiency and natural lifestyle adjustments to maintain healthy levels.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://youtu.be/soQYZpmYJYE" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>

//           {/* Video 4: Fatty Liver */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/kTGCRx4cSZc"
//                 title="ফ্যাটি লিভার বা লিভারে চর্বি নিয়ে কিছু কথা"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Internal Medicine</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">ফ্যাটি লিভার বা লিভারে চর্বি নিয়ে কিছু কথা | Fatty Liver</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   Comprehensive insights into fatty liver grades, symptoms, underlying causes, and management protocols.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://youtu.be/kTGCRx4cSZc" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>

//           {/* Video 5: Kidney Stone Awareness */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/mgpCiFrfCZs"
//                 title="কোমরে ব্যাথা হচ্ছে ? কিডনি তে পাথর নয় তো?"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Kidney Stone Awareness</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">কোমরে ব্যাথা হচ্ছে ? কিডনি তে পাথর নয় তো? | Kidney Stone</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   Recognizing back pain symptoms, stone sizes, prevention, hydration tips, and when medical intervention is necessary.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://youtu.be/mgpCiFrfCZs" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>

//           {/* Video 6: When to see a Nephrologist */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/rXsujBAL2N8"
//                 title="কখন এবং কেন একজন নেফ্রোলজিস্ট বা কিডনি বিশেষজ্ঞ দেখাবেন?"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Nephrology Guidance</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">কখন এবং কেন একজন নেফ্রোলজিস্ট বা কিডনি বিশেষজ্ঞ দেখাবেন?</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   When and why should you consult a kidney specialist? An expert breakdown on early detection and reversing renal issues.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://youtu.be/rXsujBAL2N8" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>

//           {/* Video 7: Personal Journey & Perseverance */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/sM-fNEXKHAk"
//                 title="একসময় পড়াশোনা ছেড়ে দিতে হয়েছিল | আজ আমি সুপার স্পেশালিস্ট ডাক্তার"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Life Lessons & Journey</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">একসময় পড়াশোনা ছেড়ে দিতে হয়েছিল 🥺 | আজ আমি সুপার স্পেশালিস্ট ডাক্তার</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   An inspiring personal journey overcoming hardships, childhood struggles, and valuable life lessons on perseverance.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://youtu.be/sM-fNEXKHAk" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>

//           {/* Video 8: Causes of Weakness */}
//           <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
//             <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
//               <iframe
//                 className="w-full h-full absolute inset-0 object-cover"
//                 src="https://www.youtube.com/embed/aVg2omXIcB8"
//                 title="শারীরিক দুর্বলতার কারণ সমূহ এবং উপসর্গ"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">General Health & Wellness</span>
//                 <h3 className="text-lg font-bold text-slate-900 mt-1">শারীরিক দুর্বলতার কারণ সমূহ এবং উপসর্গ | Causes of Weakness</h3>
//                 <p className="text-slate-600 text-sm mt-2">
//                   Decoding persistent physical weakness, underlying medical causes, vitamin deficiencies, and when to seek expert help.
//                 </p>
//               </div>
//               <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//                 <span>Source: BongDoc</span>
//                 <a href="https://youtu.be/aVg2omXIcB8" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }

export default function MediaPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 animate-fade-in">
        <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
          Patient Education & Outreach
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Media, Vlogs & BongDoc
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Watch expert medical insights, kidney care guidance, and health awareness discussions hosted by Dr. Sourav Sarkar on his official YouTube channel.
        </p>
      </section>

      {/* YouTube Channel Spotlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl transition-transform duration-500 hover:scale-[1.01]">
          <div className="space-y-4 max-w-xl">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              YouTube Creator
            </span>
            <h2 className="text-3xl font-bold tracking-tight">Subscribe to BongDoc</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Bridging the gap between complex nephrology and everyday patients. Explore expert medical breakdowns, health tips, and live discussions on YouTube.
            </p>
            <div className="pt-2">
              <a
                href="https://www.youtube.com/@Drsouravsarkar007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl shadow transition"
              >
                Visit YouTube Channel (@Drsouravsarkar007)
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-2">
            <p className="text-3xl font-bold">16K+</p>
            <p className="text-xs text-blue-200 uppercase tracking-wider font-medium">Community Followers</p>
          </div>
        </div>
      </section>

      {/* Featured Video Embeds Section (Animated Grid Cards) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
            Featured Videos & Discussions
          </h2>
          <p className="text-slate-600 text-sm mt-1">Direct insights into kidney health, dialysis care, Vitamin D, fatty liver, and overall wellness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Video 1: Constipation in Kidney / Dialysis Patients */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
              <iframe
                className="w-full h-full absolute inset-0 object-cover"
                src="https://www.youtube.com/embed/5vuvZbpcwIY"
                title="কিডনী এবং ডায়ালিসিস রোগীর কোষ্ঠকাঠিন্য? কারণ, সমাধান ও কখন সতর্ক হবেন"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Dialysis Care</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">কিডনী এবং ডায়ালিসিস রোগীর কোষ্ঠকাঠিন্য? কারণ ও সমাধান</h3>
                <p className="text-slate-600 text-sm mt-2">
                  Managing constipation in kidney and dialysis patients, underlying causes, dietary solutions, and when to seek urgent care.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Source: BongDoc</span>
                <a href="https://youtu.be/5vuvZbpcwIY" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
              </div>
            </div>
          </div>

          {/* Video 2: Kidney Cysts */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
              <iframe
                className="w-full h-full absolute inset-0 object-cover"
                src="https://www.youtube.com/embed/TRMY5eaxq8E"
                title="kidney cyst কী। কিডনী তে সিস্ট হলে কী করতে হবে?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Renal Pathology</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">kidney cyst কী। কিডনী তে সিস্ট হলে কী করতে হবে?</h3>
                <p className="text-slate-600 text-sm mt-2">
                  Understanding renal cysts, simple vs. complex cysts, ultrasound findings, and necessary clinical steps.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Source: BongDoc</span>
                <a href="https://youtu.be/TRMY5eaxq8E" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
              </div>
            </div>
          </div>

          {/* Video 3: Vitamin D Deficiency */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
              <iframe
                className="w-full h-full absolute inset-0 object-cover"
                src="https://www.youtube.com/embed/soQYZpmYJYE"
                title="শরীরে ভিটামিন D কমে যাবার কারন এবং লক্ষণ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">General Health</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">শরীরে ভিটামিন D কমে যাবার কারন এবং লক্ষণ</h3>
                <p className="text-slate-600 text-sm mt-2">
                  Causes and symptoms of Vitamin D deficiency and natural lifestyle adjustments to maintain healthy levels.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Source: BongDoc</span>
                <a href="https://youtu.be/soQYZpmYJYE" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
              </div>
            </div>
          </div>

          {/* Video 4: Fatty Liver */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
              <iframe
                className="w-full h-full absolute inset-0 object-cover"
                src="https://www.youtube.com/embed/kTGCRx4cSZc"
                title="ফ্যাটি লিভার বা লিভারে চর্বি নিয়ে কিছু কথা"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Internal Medicine</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">ফ্যাটি লিভার বা লিভারে চর্বি নিয়ে কিছু কথা | Fatty Liver</h3>
                <p className="text-slate-600 text-sm mt-2">
                  Comprehensive insights into fatty liver grades, symptoms, underlying causes, and management protocols.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Source: BongDoc</span>
                <a href="https://youtu.be/kTGCRx4cSZc" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
              </div>
            </div>
          </div>

          {/* Video 5: Kidney Stone Awareness */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
              <iframe
                className="w-full h-full absolute inset-0 object-cover"
                src="https://www.youtube.com/embed/mgpCiFrfCZs"
                title="কোমরে ব্যাথা হচ্ছে ? কিডনি তে পাথর নয় তো?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Kidney Stone Awareness</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">কোমরে ব্যাথা হচ্ছে ? কিডনি তে পাথর নয় তো? | Kidney Stone</h3>
                <p className="text-slate-600 text-sm mt-2">
                  Recognizing back pain symptoms, stone sizes, prevention, hydration tips, and when medical intervention is necessary.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Source: BongDoc</span>
                <a href="https://youtu.be/mgpCiFrfCZs" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
              </div>
            </div>
          </div>

          {/* Video 6: When to see a Nephrologist */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
              <iframe
                className="w-full h-full absolute inset-0 object-cover"
                src="https://www.youtube.com/embed/rXsujBAL2N8"
                title="কখন এবং কেন একজন নেফ্রোলজিস্ট বা কিডনি বিশেষজ্ঞ দেখাবেন?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Nephrology Guidance</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">কখন এবং কেন একজন নেফ্রোলজিস্ট বা কিডনি বিশেষজ্ঞ দেখাবেন?</h3>
                <p className="text-slate-600 text-sm mt-2">
                  When and why should you consult a kidney specialist? An expert breakdown on early detection and reversing renal issues.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Source: BongDoc</span>
                <a href="https://www.youtube.com/watch?v=rXsujBAL2N8" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
              </div>
            </div>
          </div>

          {/* Video 7: Personal Journey & Perseverance */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
              <iframe
                className="w-full h-full absolute inset-0 object-cover"
                src="https://www.youtube.com/embed/sM-fNEXKHAk"
                title="একসময় পড়াশোনা ছেড়ে দিতে হয়েছিল | আজ আমি সুপার স্পেশালিস্ট ডাক্তার"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Life Lessons & Journey</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">একসময় পড়াশোনা ছেড়ে দিতে হয়েছিল 🥺 | আজ আমি সুপার স্পেশালিস্ট ডাক্তার</h3>
                <p className="text-slate-600 text-sm mt-2">
                  An inspiring personal journey overcoming hardships, childhood struggles, and valuable life lessons on perseverance.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Source: BongDoc</span>
                <a href="https://youtu.be/sM-fNEXKHAk" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
              </div>
            </div>
          </div>

          {/* Video 8: Causes of Weakness */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
              <iframe
                className="w-full h-full absolute inset-0 object-cover"
                src="https://www.youtube.com/embed/aVg2omXIcB8"
                title="শারীরিক দুর্বলতার কারণ সমূহ এবং উপসর্গ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">General Health & Wellness</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">শারীরিক দুর্বলতার কারণ সমূহ এবং উপসর্গ | Causes of Weakness</h3>
                <p className="text-slate-600 text-sm mt-2">
                  Decoding persistent physical weakness, underlying medical causes, vitamin deficiencies, and when to seek expert help.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Source: BongDoc</span>
                <a href="https://youtu.be/aVg2omXIcB8" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Watch on YouTube &rarr;</a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}