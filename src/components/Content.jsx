"use client";

import { CldImage } from "next-cloudinary";

export default function Content() {
  return (
    <>
      <main className="grid lg:grid-cols-2 gap-1 sm:grid-cols-1 bg-[#f3f3f5]">
        <div className="lg:pl-12 lg:pt-12 px-2  items-center flex justify-center">  
        <CldImage
            src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1739441637/harri.cc/Camiseta%20Azpitik/Tote_Azpitik_Mustard_xkmxp9.webp" // Use this sample image or upload your own via the Media Explorer
            width="700" // Transform the image: auto-crop to square aspect_ratio
            height="700"
            alt="Harri.cc"
            crop={{
              type: "auto",
              source: true,
            }}
          />
        </div>
        <div className="flex lg:justify-end lg:pr-12 px:6">
          <CldImage
            src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1739350565/harri.cc/Camiseta%20Azpitik/Tote_Azpitik_OrangeRust_kryszv.webp" // Use this sample image or upload your own via the Media Explorer
            width="700" // Transform the image: auto-crop to square aspect_ratio
            height="700"
            alt="Harri.cc"
            crop={{
              type: "auto",
              source: true,
            }}
          />
        </div>
        
      </main>
      
    </>
  );
}
