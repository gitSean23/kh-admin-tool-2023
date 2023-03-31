import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactElement } from "react";

function CloseIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.649259 0.649022C0.808658 0.489671 1.02482 0.400153 1.25021 0.400153C1.4756 0.400153 1.69176 0.489671 1.85116 0.649022L5.50021 4.29807L9.14926 0.649022C9.22767 0.567838 9.32146 0.503083 9.42517 0.458535C9.52887 0.413988 9.64041 0.390539 9.75327 0.389558C9.86613 0.388578 9.97806 0.410084 10.0825 0.452823C10.187 0.495561 10.2819 0.558677 10.3617 0.638485C10.4415 0.718294 10.5046 0.813198 10.5474 0.91766C10.5901 1.02212 10.6116 1.13405 10.6106 1.24691C10.6096 1.35977 10.5862 1.47131 10.5416 1.57501C10.4971 1.67872 10.4323 1.77251 10.3512 1.85092L6.70211 5.49997L10.3512 9.14902C10.506 9.30933 10.5917 9.52404 10.5897 9.74691C10.5878 9.96978 10.4984 10.183 10.3408 10.3406C10.1832 10.4982 9.97002 10.5876 9.74715 10.5895C9.52428 10.5914 9.30957 10.5058 9.14926 10.3509L5.50021 6.70187L1.85116 10.3509C1.69085 10.5058 1.47614 10.5914 1.25327 10.5895C1.0304 10.5876 0.81721 10.4982 0.659613 10.3406C0.502016 10.183 0.412623 9.96978 0.410686 9.74691C0.408749 9.52404 0.494425 9.30933 0.649259 9.14902L4.29831 5.49997L0.649259 1.85092C0.489909 1.69152 0.400391 1.47536 0.400391 1.24997C0.400391 1.02458 0.489909 0.80842 0.649259 0.649022Z"
        fill="#7F7F7F"
      />
    </svg>
  );
}

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  header: ReactElement;
  body: ReactElement;
};

export function Modal({ isOpen, setIsOpen, header, body }: ModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
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

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-5 py-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-white  text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center border-b p-5 text-lg font-medium leading-6 text-gray-900"
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 "
                  >
                    <CloseIcon />
                  </button>
                  {header}
                </Dialog.Title>
                <div className="p-5">{body}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

// const div = (
//   <Transition.Root show={props.open} as={Fragment}>
//     <Dialog
//       as="div"
//       className="relative z-10"
//       initialFocus={cancelButtonRef}
//       onClose={() => props.setOpen(false)}
//     >
//       <Transition.Child
//         as={Fragment}
//         enter="ease-out duration-300"
//         enterFrom="opacity-0"
//         enterTo="opacity-100"
//         leave="ease-in duration-200"
//         leaveFrom="opacity-100"
//         leaveTo="opacity-0"
//       >
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50  transition-opacity" />
//       </Transition.Child>

//       <div className="fixed inset-0 z-10 overflow-y-auto">
//         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             enterTo="opacity-100 translate-y-0 sm:scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//             leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//           >
//             <Dialog.Panel className="relative w-5/6 max-w-[900px] transform overflow-hidden rounded-lg bg-white pb-10 text-left shadow-xl transition-all">
//               <div className="flex h-max w-full flex-col rounded-xl bg-white pb-10">
//                 <div className="flex items-start justify-start gap-4 px-8 py-4 text-xl font-bold">
//                   <button
//                     className="text-attendee-name flex h-8 w-8 items-center justify-center rounded-full bg-gray-200"
//                     onClick={() => {
//                       props.setOpen(false);
//                     }}
//                   >
//                     <CloseIcon />
//                   </button>
//                   {props.headerContent}
//                 </div>
//                 {props.bodyContent}
//               </div>
//             </Dialog.Panel>
//           </Transition.Child>
//         </div>
//       </div>
//     </Dialog>
//   </Transition.Root>
// );
