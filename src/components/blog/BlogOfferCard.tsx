import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function BlogOfferCard() {
  return (
    <div className="my-10 relative overflow-hidden rounded-3xl bg-[#030014] border border-[#7000FF]/30 p-8 sm:p-10 shadow-[0_0_40px_rgba(112,0,255,0.15)] group transition-all duration-500 hover:border-[#7000FF]/60 hover:shadow-[0_0_50px_rgba(112,0,255,0.25)] flex flex-col items-center text-center gap-6">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#7000FF]/20 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:bg-[#7000FF]/30" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#FF00BD]/15 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:bg-[#FF00BD]/25" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#7000FF]/20 text-[#FF00BD]">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF00BD]">ArgonTV Premium</span>
        </div>
        
        <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4 tracking-tight !mt-0">
          Experience Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7000FF] to-[#FF00BD]">4K IPTV Streaming</span>
        </h3>
        
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 w-full max-w-2xl mx-auto block !mt-0">
          Upgrade your entertainment with ArgonTV. Enjoy top-tier live sports, movies, and VOD in crystal-clear 4K. Experience zero buffering, anti-freeze technology, and instant delivery directly to all your favorite devices.
        </p>
        
        <Link 
          href="/pricing" 
          className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#7000FF] to-[#FF00BD] hover:from-[#5c00d1] hover:to-[#d1009a] text-white font-extrabold uppercase tracking-wide text-sm rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(112,0,255,0.4)] hover:shadow-[0_0_30px_rgba(112,0,255,0.6)] hover:scale-[1.02] active:scale-[0.98]"
        >
          View Pricing Plans
        </Link>
      </div>
    </div>
  );
}
