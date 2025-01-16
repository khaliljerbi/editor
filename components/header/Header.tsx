import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

function Header() {
  return (
    <nav className="h-[70px] flex items-center justify-between px-4">
      <Link href="/" className="flex gap-2 items-center justify-center">
        <PlayCircle className="h-6 w-6" />
        Playground
      </Link>
      <div className="flex gap-2 items-center justify-center">
        <SignedOut>
          <SignInButton>
            <Button variant="outline">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button className="bg-emerald-800 text-white hover:bg-emerald-800/80">
              Sign up
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

export default Header;
