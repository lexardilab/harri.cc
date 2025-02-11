"use client";

import { CldImage } from "next-cloudinary";
export default function Home() {
  return (
    <main>
      <div className="flex justify-end pr-12 pt-4">
        <CldImage
          src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1739097872/harri.cc/harri_1_kshoj7.jpg" // Use this sample image or upload your own via the Media Explorer
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
  );
}
