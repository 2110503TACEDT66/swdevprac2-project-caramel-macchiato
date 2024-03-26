import getSpace from "@/libs/getSpace";
import React from "react";
import { FaClock } from "react-icons/fa";

interface Props {
  params: { id: string };
}

export default async function SpaceDetail({ params }: Props) {
  const space = await getSpace(params.id);
  return (
    <div className="flex justify-center my-20  gap-20 ">
      <div className="bg-gray-200 w-96 h-80 rounded-3xl"></div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold">{space.data.name}</h1>
          <span className="bg-green-400 text-white rounded-lg px-3 max-w-max">
            เปิดอยู่
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock />
          <p>
            {space.data.openTime} - {space.data.closeTime}
          </p>
        </div>
        <hr />
        <p>{space.data.address}</p>
        <p>{space.data.tel}</p>
        <div className="flex gap-2 items-center">
          <button className="bg-black px-5 py-2 rounded-full text-white max-w-max ">
            จองเลย
          </button>
          <p>ที่ว่าง: {space.data.remaining}</p>
        </div>
      </div>
    </div>
  );
}
