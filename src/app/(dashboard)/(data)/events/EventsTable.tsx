"use client";

import { Modal } from "@/lib/Modal";
import { Event } from "@/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { EventForm } from "./EventForm";

const columnHelper = createColumnHelper<Event>();

const columns = [
  columnHelper.accessor((row) => `${row.start_date} - ${row.end_date}`, {
    header: "Time",
    cell: (info) => info.getValue(),
    footer: "Time",
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
    footer: "Name",
  }),
  columnHelper.accessor("location", {
    header: "Location",
    cell: (info) => info.getValue(),
    footer: "Location",
  }),
];

export function EventsTable({ data }: { data: Event[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [modal, setModal] = useState<{
    isOpen: boolean;
    event: Event | null;
  }>({
    isOpen: false,
    event: null,
  });

  return (
    <>
      <Modal
        isOpen={modal.isOpen}
        setIsOpen={() =>
          setModal((prev) => ({ ...prev, isOpen: !prev.isOpen }))
        }
        header={<div>{modal.event?.name}</div>}
        body={<EventForm event={modal.event} />}
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
                    event: row.original,
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
