"use client";

import { motion } from "framer-motion";

// Web / Browser Wireframe Fallback
export const WebWireframe = ({ index }: { index: number }) => (
  <div className="w-full h-full bg-neutral-50 rounded-lg border border-dashed border-neutral-200 flex flex-col justify-between p-4 transition-colors duration-500">
    <div className="flex justify-between items-center">
      <div className="w-12 h-3 bg-neutral-200 rounded animate-pulse" />
      <div className="flex gap-2">
        <div className="w-8 h-2 bg-neutral-200 rounded" />
        <div className="w-8 h-2 bg-neutral-200 rounded" />
      </div>
    </div>
    
    {index === 0 ? (
      <div className="flex-1 flex items-center justify-center py-4">
        <div className="w-20 h-20 border border-neutral-200 rounded-full flex items-center justify-center relative animate-pulse">
          <div className="w-12 h-12 border border-neutral-200 rounded-full absolute" />
          <div className="w-6 h-6 border border-neutral-200 rounded-full absolute" />
        </div>
      </div>
    ) : (
      <div className="flex-1 flex flex-col gap-2 justify-center py-4 px-6">
        <div className="w-full h-2.5 bg-neutral-200 rounded" />
        <div className="w-3/4 h-2.5 bg-neutral-200 rounded" />
        <div className="w-1/2 h-2.5 bg-neutral-200 rounded" />
      </div>
    )}
    
    <div className="w-16 h-3 bg-neutral-200 rounded mt-auto" />
  </div>
);

// Mobile / Phone Wireframe Fallback
export const MobileWireframe = () => (
  <div className="w-full h-full bg-neutral-50 rounded-lg border border-dashed border-neutral-200 flex flex-col justify-between p-4 transition-colors duration-500">
    <div className="w-8 h-2 bg-neutral-200 rounded" />
    <div className="flex-1 flex flex-col gap-4 justify-center py-4">
      <div className="w-10 h-10 bg-neutral-200 rounded-full mx-auto" />
      <div className="space-y-1.5">
        <div className="w-3/4 h-2 bg-neutral-200 rounded mx-auto" />
        <div className="w-1/2 h-2 bg-neutral-200 rounded mx-auto" />
      </div>
    </div>
    <div className="w-10 h-2 bg-neutral-200 rounded mx-auto" />
  </div>
);

// 1. Browser Frame Component
export const BrowserFrame = ({ title, image, index = 0 }: { title: string; image?: string; index?: number }) => {
  return (
    <div className="w-full h-full bg-neutral-50 rounded-xl border border-neutral-200/60 shadow-sm overflow-hidden relative flex flex-col">
      {/* Browser Header */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-neutral-100/50 border-b border-neutral-200/60">
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <div className="mx-auto bg-white border border-neutral-200/40 rounded px-6 py-0.5 text-[9px] text-neutral-400 font-light truncate max-w-[180px]">
          {title.toLowerCase().replace(/\s+/g, "")}.com
        </div>
      </div>
      {/* Browser Content */}
      <div className="flex-1 bg-white p-3 md:p-4 flex flex-col justify-center overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-105 filter grayscale hover:grayscale-0"
          />
        ) : (
          <WebWireframe index={index} />
        )}
      </div>
    </div>
  );
};

// 2. Phone Frame Component
export const PhoneFrame = ({ title, image }: { title: string; image?: string }) => {
  return (
    <div className="w-[170px] md:w-[190px] aspect-[9/18.5] bg-neutral-900 rounded-[32px] border-4 border-neutral-800 shadow-2xl overflow-hidden relative flex flex-col">
      {/* Speaker and Camera Cutout (Notch) */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-neutral-800 rounded-full z-20 flex items-center justify-center">
        <div className="w-1 h-1 bg-neutral-950 rounded-full mr-1.5" />
        <div className="w-4 h-0.5 bg-neutral-950 rounded-full" />
      </div>
      
      {/* Screen Area */}
      <div className="flex-1 m-0.5 bg-white rounded-[27px] overflow-hidden relative p-3 flex flex-col justify-center border border-neutral-250">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-105 filter grayscale hover:grayscale-0"
          />
        ) : (
          <MobileWireframe />
        )}
      </div>
    </div>
  );
};

// 3. Stacked Web & Mobile Frame Composition
export const WebMobileFrame = ({ title, image, mobileImage, index = 0 }: { title: string; image?: string; mobileImage?: string; index?: number }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-start">
      {/* Background Web Frame */}
      <div className="w-[85%] aspect-[4/3] z-0">
        <BrowserFrame title={title} image={image} index={index} />
      </div>
      
      {/* Foreground Phone Frame Overlapping */}
      <div className="absolute right-0 bottom-[-5px] md:bottom-[-15px] z-10 scale-[0.8] md:scale-95 origin-bottom-right">
        <PhoneFrame title={title} image={mobileImage || image} />
      </div>
    </div>
  );
};
