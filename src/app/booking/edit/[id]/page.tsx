import Modal from "@/components/Modal";
import ModalHandle from "@/components/ModalHandle";
import getSpace from "@/libs/getSpace";
import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import getReservation from "@/libs/getsingleReservation";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface Props {
  params: { id: string };
}

export default async function ReservationDetail({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const reservations = await getReservation(params.id, session.user.token);
  const workingname = reservations.data.workingSpace.name;
  return (
    <main>
      <div >{workingname} {params.id}</div>
    </main>
  );
}
