import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross1 } from "react-icons/rx";
import { useSession } from "next-auth/react";
import Reserve from "@/libs/confirmReserve";
import { SpaceItem } from "../../interface";
interface Props {
  isOpen: boolean;
  handleClose: any;
  data: SpaceItem;
}

export default function Modal({ isOpen, handleClose, data }: Props) {
  const session = useSession();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const result = Reserve(data._id, session.data!.user.token, "2011-11-10");
    
    handleClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 mt-14 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <a
                  className="fixed right-7 top-7 z-10 cursor-pointer rounded-full bg-white p-2 text-2xl text-gray-800 shadow-lg "
                  onClick={handleClose}
                >
                  <RxCross1 />
                </a>
                <div className="px-5 pt-8 pb-3 ">
                  <h1 className="font-bold text-4xl">ยืนยันการจอง</h1>
                  <hr className="my-3" />
                  <p>{data.name}</p>
                  <p>{data.address}</p>
                  <p>{data.tel}</p>
                  <button
                    className="bg-black px-5 py-2 rounded-full text-white max-w-max "
                    onClick={handleSubmit}
                  >
                    ยืนยัน
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
