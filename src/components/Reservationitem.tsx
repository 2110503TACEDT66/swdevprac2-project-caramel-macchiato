import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import getAllReservation from "@/libs/getallReserve";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { Reservation } from "../../interface";

export default function ReservationItem({ reservation }: { reservation: Reservation }) {
  return (
    <div className="border p-4 my-4">
      <p>Date: {reservation.reserveDate}</p>
      <p>User: {reservation.user}</p>
      <p>Working Space: {reservation.workingSpace.name}</p>
      <div className="flex justify-end mt-2">
        <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
