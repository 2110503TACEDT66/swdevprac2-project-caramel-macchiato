import Image from "next/image";
import React from "react";
import { FaClock } from "react-icons/fa";
import { SpaceItem } from "../../interface";

interface Props {
  data: SpaceItem;
}

export default function Card({ data }: Props) {
  return (
    <div className="relative hover:-translate-y-1 duration-150 cursor-pointer">
      {/* <Image
        src="https://www.terrabkk.com/images/upload/af178899ca2cc98fcf8a7114450d17a7.jpg"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full rounded-3xl "
        unoptimized
        alt=""
      /> */}
      <div
        className="bg-gray-200 w-full h-80 rounded-3xl"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
        }}
      ></div>

      {data.remaining > 0 ? (
        <div className="flex text-sm items-center gap-2 absolute top-5 left-5 bg-white px-3 py-1 rounded-full text-green-700">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          มีที่ว่าง
        </div>
      ) : (
        <div className="flex text-sm items-center gap-2 absolute top-5 left-5 bg-white px-3 py-1 rounded-full text-red-700">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          เต็ม
        </div>
      )}

      <div className="flex justify-between mt-3 mx-2 text-gray-600">
        <h1>{data.name}</h1>
        <div className="flex items-center gap-2">
          <FaClock />
          <p>
            {data.openTime} - {data.closeTime}
          </p>
        </div>
      </div>
    </div>
  );
}
