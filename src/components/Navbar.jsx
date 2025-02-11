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
      <div className="w-full pl-2">
        <Link href="/">
          <Image
            className="py-6"
            src="/Logo_Harri_1.svg"
            width="50"
            height="40"
            alt=""
          />
        </Link>
      </div>
      
    </nav>
  );
}
