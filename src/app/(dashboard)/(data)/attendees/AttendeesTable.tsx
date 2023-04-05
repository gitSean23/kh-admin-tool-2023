"use client";

import { Modal } from "@/lib/Modal";
import { Attendee } from "@/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { AttendeeForm } from "./AttendeeForm";

const columnHelper = createColumnHelper<Attendee>();

const columns = [
  columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
    header: "Name",
    cell: (info) => info.getValue(),
    footer: "Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
    footer: "Email",
  }),
  columnHelper.accessor("discord", {
    header: "Discord",
    cell: (info) => info.getValue(),
    footer: "Discord",
  }),
  columnHelper.accessor("oAuth", {
    header: "Auth",
    cell: (info) => info.getValue(),
    footer: "Auth",
  }),
  columnHelper.accessor("school", {
    header: "School",
    cell: (info) => info.getValue(),
    footer: "School",
  }),
  columnHelper.accessor("isAccepted", {
    header: "Accepted",
    cell: (info) => (
      <input tabIndex={-1} readOnly checked={info.getValue()} type="checkbox" />
    ),
    footer: "Accepted",
  }),
  columnHelper.accessor("isConfirmed", {
    header: "Confirmed",
    cell: (info) => (
      <input tabIndex={-1} readOnly checked={info.getValue()} type="checkbox" />
    ),
    footer: "Confirmed",
  }),
  columnHelper.accessor("isCheckedIn", {
    header: "Checked In",
    cell: (info) => (
      <input tabIndex={-1} readOnly checked={info.getValue()} type="checkbox" />
    ),
    footer: "Checked In",
  }),
];

export function AttendeesTable({ data }: { data: Attendee[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [modal, setModal] = useState<{
    isOpen: boolean;
    attendee: Attendee | null;
  }>({
    isOpen: false,
    attendee: null,
  });

  return (
    <>
      <Modal
        isOpen={modal.isOpen}
        setIsOpen={() =>
          setModal((prev) => ({ ...prev, isOpen: !prev.isOpen }))
        }
        header={
          <div>
            {modal.attendee?.firstName} {modal.attendee?.lastName}
          </div>
        }
        body={<AttendeeForm attendee={modal.attendee} />}
      ></Modal>
      <div className="mt-6 overflow-auto whitespace-nowrap text-xl">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 first-of-type:text-left"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, i) => (
              <tr
                onClick={() => {
                  setModal({
                    isOpen: true,
                    attendee: row.original,
                  });
                }}
                key={row.id}
                className="cursor-pointer border-b hover:bg-gray-100"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-3 text-center first-of-type:text-left"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 first-of-type:text-left"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </>
  );
}
