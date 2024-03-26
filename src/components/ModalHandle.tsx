"use client"
import React, { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { SpaceItem } from "../../interface";

export default function ModalHandle({ space }: { space: SpaceItem }) {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const session = useSession();

  return (
    <div>
      {space.remaining > 0 ? (
        <button
          className="bg-black px-5 py-2 rounded-full text-white max-w-max "
          onClick={() => {
            if (!session.data) {
              router.push("/api/auth/signin");
            } else {
              setOpen(true);
            }
          }}
        >
          จองเลย
        </button>
      ) : (
        <p className="bg-gray-400 px-5 py-2 rounded-full text-white max-w-max ">
          เต็มแล้ว
        </p>
      )}

      <Modal isOpen={open} data={space} handleClose={() => setOpen(false)} />
    </div>
  );
}
