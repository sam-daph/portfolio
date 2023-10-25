"use client";
import { Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import { useRouter } from "next/navigation";
import { auth } from "@clerk/nextjs";

export const Navbar = () => {


  const router = useRouter();
  const handleButtonIn = () => {
    router.push("/sign-in");
  };
  const handleButtonUp = () => {
    router.push("/sign-up");
  };

  return (
    <div className="navbar  w-full z-50 flex justify-between items-center py-2 px-4">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <Image
            src="/logo1.png"
            width="80"
            height="80"
            alt="logo"
            className="hidden md:block"
          />
        </Link>
      </div>
      <div>
        <Button className="btn" size="sm">
          Upgrade
          <Layers className="h-4 h-4 ml-1" />
        </Button>
      </div>
      <div className="flex items-center gap-x-3">
        <ModeToggle />

        <Button onClick={handleButtonIn} className="btn">
          Sign-in
        </Button>
        {/* <Button onClick={handleButtonUp} className="btn">
          Sign-up
        </Button> */}

        <UserButton />
      </div>
    </div>
  );
};
