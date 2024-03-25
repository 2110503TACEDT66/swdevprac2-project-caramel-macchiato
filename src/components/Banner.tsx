"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Banner() {
  const [index, setIndex] = useState(0);

  const coverImages = ["cover.jpg", "cover2.jpg", "cover3.jpg", "cover4.jpg"];

  const router = useRouter();

  const { data: session } = useSession();

  return (
    <div className="flex justify-start items-center relative h-[90vh]  ">
      <Image
        src={`/img/${coverImages[index]}`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full p-4 rounded-3xl"
        objectFit="cover"
        fill
        alt=""
        onClick={() => setIndex((index + 1) % 4)}
      />
      {session ? (
        <h1 className="absolute top-10 right-10 text-white ">
          Welcome {session.user.name}
        </h1>
      ) : (
        ""
      )}
      <div className="absolute text-white space-y-6 p-28">
        <h1 className=" text-8xl font-semibold ">
          Vaccine <br />
          Service Center
        </h1>
        <p className="text-white text-3xl font-thin">
          ขอเชิญชวนประชาชนเข้ารับการฉีดวัคซีนเข็มกระตุ้น
        </p>
        <Link
          href="/booking"
          className="bg-[#3ED786]  text-white text-xl  py-2 px-5 rounded-xl inline-block duration-150 hover:bg-green-600"
        >
          จองคิวเลย!
        </Link>
      </div>
      <button
        className="absolute bottom-10 right-10 bg-white px-5 py-1 rounded-full duration-150 hover:scale-105"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/hospital");
        }}
      >
        Select Hospital
      </button>
    </div>
  );
}
