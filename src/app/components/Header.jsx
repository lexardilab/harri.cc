import Image from "next/image";

export default function Header() {
    return (
        <div className="grid grid-cols-4 gap-1 px-1">
            <div><Image src="/produktuak/Azpitik_01.jpg" width="1920" height="100" alt="Logo HArri"></Image></div>
            <div><Image src="/produktuak/GorraFix_01.jpg" width="1920" height="100" alt="Logo HArri"></Image></div>
            <div><Image src="/produktuak/Harri_01.jpg" width="1920" height="100" alt="Logo HArri"></Image></div>
            <div><Image src="/produktuak/Llavero_Harri_01.jpg" width="1920" height="100" alt="Logo HArri"></Image></div>
        </div>
    );
}
