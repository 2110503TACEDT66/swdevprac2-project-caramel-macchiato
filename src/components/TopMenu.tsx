import Image from "next/image";
import Link from "next/link";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SiStarship } from "react-icons/si";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex justify-between items-center px-7 py-4 top-0 fixed z-10 bg-bg w-full">
      <div className="flex gap-5 items-center">
        <SiStarship className="text-blue-500" size={40} />
        <TopMenuItem title="จองเลย" href="/booking" />
      </div>
      <TopMenuItem
        title={session ? "Sign-Out" : "Sign-In"}
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
      />
    </div>
  );
}
