"use client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import getAllReservation from "@/libs/getallReserve";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { Reservation } from "../../interface";
import DeleteReservation from "@/libs/deleteReserve";
import { useSession } from "next-auth/react";

export default function ReservationItem({
  reservation,
}: {
  reservation: Reservation;
}) {
  const session = useSession();
  const handleDelete = (e: any) => {
    e.preventDefault();
    const result = DeleteReservation(reservation._id, session.data!.user.token);
  };

  return (
    <div key={reservation._id} className="border p-4 my-4">
      <p>Date: {reservation.reserveDate.toString()}</p>
      <p>User: {reservation.user}</p>
      <p>Working Space: {reservation.workingSpace.name}</p>
      <div className="flex justify-end mt-2">
        <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
