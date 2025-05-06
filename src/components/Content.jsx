"use client";

import { CldImage } from "next-cloudinary";

export default function Content() {
  return (
    <>
      <main className="grid lg:grid-cols-4 gap-1 sm:grid-cols-1 bg-[#f3f3f5] pt-6">
        <div className="flex items-center justify-center">  
        <CldImage
            src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1746530144/harri.cc/Tote_Azpitik_Plum_ykbg5l.webp" // Use this sample image or upload your own via the Media Explorer
            width="700" // Transform the image: auto-crop to square aspect_ratio
            height="700"
            alt="Harri.cc"
            crop={{
              type: "auto",
              source: true,
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <CldImage
            src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1746530144/harri.cc/Tote_Azpitik_OrangeRust_gesmeq.webp" // Use this sample image or upload your own via the Media Explorer
            width="700" // Transform the image: auto-crop to square aspect_ratio
            height="700"
            alt="Harri.cc"
            crop={{
              type: "auto",
              source: true,
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <CldImage
            src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1746530143/harri.cc/Tote_Azpitik_Mustard_badn9q.webp" // Use this sample image or upload your own via the Media Explorer
            width="700" // Transform the image: auto-crop to square aspect_ratio
            height="700"
            alt="Harri.cc"
            crop={{
              type: "auto",
              source: true,
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <CldImage
            src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1746530142/harri.cc/Tote_Azpitik_Black_rvsr9i.webp" // Use this sample image or upload your own via the Media Explorer
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
