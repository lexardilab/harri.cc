"use client";

import { CldImage } from "next-cloudinary";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <main className="grid lg:grid-cols-2 gap-1 sm:grid-cols-1">
        <div className="lg:pl-12 lg:pt-12 px-2 pb-4 items-center flex justify-center">  
          <h1 className="lg:text-6xl/16 antialiased line-clamp-3 sm:text-xl">
            "A veces no se ve nada en la superficie, pero por debajo de ella
            todo está ardiendo"
          </h1>
        </div>
        <div className="flex lg:justify-end lg:pr-12 px:6">
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
        <div className="flex justify-center items-center py-6 lg:py-6 lg:w-screen">
          <Image
            src="/azpitik.svg"
            width={1000}
            height={100}
            alt="Azpitik Logo"
          />
        </div>
      </main>
      <div>
        <div className="flex justify-center items-center lg:py-6 lg;w-screen">
          <CldImage
            src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1739343501/harri.cc/Camiseta%20Azpitik/ToteBorobil_umlcdy.jpg" // Use this sample image or upload your own via the Media Explorer
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
