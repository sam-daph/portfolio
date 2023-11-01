"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import { useRouter } from "next/navigation";
import { SearchInput } from "./search-input";


export const Navbar = () => {

  const user = useUser();

  const router = useRouter();
  const handleButtonIn = () => {
    router.push("/sign-in");
  };
  const handleButtonUp = () => {
    router.push("/sign-up");
  };

  return (
    <div className="navbar w-full z-50 flex justify-between items-center py-2 px-4">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <p className="logo hidden md:block">SAMDAPH.<span>AI</span></p>
        </Link>
      </div>
      <div>
        <SearchInput />
      </div>

      <div className="flex items-center gap-x-3">
      <ModeToggle />
      <Button onClick={handleButtonIn}>
        Se connecter
      </Button>
    <UserButton afterSignOutUrl="/" />
  
</div>
    </div>
  );
};
