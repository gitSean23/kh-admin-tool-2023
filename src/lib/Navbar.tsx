"use client";

import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { KHLogo } from "./KHLogo";

export function Navbar() {
  return (
    <div className="flex items-center justify-between border-b py-4 px-6">
      <a href="/">
        <KHLogo />
      </a>
      <Menu as="div">
        <Menu.Button className="flex h-10 w-10 items-center">
          <UserCircleIcon className="" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 mr-2 w-36 origin-top-right divide-y divide-gray-400 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-50 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-200" : ""
                  } group flex w-full items-center rounded-sm px-2 py-2 text-sm text-gray-900`}
                  onClick={() => {}}
                >
                  Log Out
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
