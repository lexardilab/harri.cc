import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburguerMenu";
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
        <div><Link href="/">
          <Image
            className="py-6"
            src="/Logo_Harri_2.svg"
            width="50"
            height="40"
            alt=""
          />
        </Link></div>
        <div><HamburgerMenu /></div>
        
      
    </nav>
  );
}
