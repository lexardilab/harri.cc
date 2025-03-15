import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 lg:px-8">
      <div className="items-center justify-center flex">
        <Link href="/">
          <Image
            className="py-6"
            src="/Logo_Harri_2.svg"
            width="50"
            height="40"
            alt=""
          />
        </Link>
      </div>
      
    </nav>
  );
}
