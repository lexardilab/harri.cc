"use client";

import { CldImage } from "next-cloudinary";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <main className="grid lg:grid-cols-2 gap-1 sm:grid-cols-1">
        <div className="lg:pt-12 items-center flex">  
        <Image
            src="/azpitik.svg"
            width={1000}
            height={100}
            alt="Azpitik Logo"
          />
        </div>
        <div className="flex lg:justify-center px:6">
          <CldImage
            src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1739097872/harri.cc/harri_1_kshoj7.webp" // Use this sample image or upload your own via the Media Explorer
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
      <div>
        <div className="flex justify-center items-center lg:pt-6 lg;w-screen">
          <CldImage
            src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1739269936/harri.cc/Camiseta%20Azpitik/DSCF0140_rwomwr.webp" // Use this sample image or upload your own via the Media Explorer
            width="1980" // Transform the image: auto-crop to square aspect_ratio
            height="1280"
            alt="Harri.cc"
            crop={{
              type: "auto",
              source: true,
            }}
          />
        </div>
      </div>
    </>
  );
}
