"use client";

import { Attendee, generateAttendees } from "@/types";
import {
  CellContext,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const data: Attendee[] = generateAttendees();

const columnHelper = createColumnHelper<Attendee>();

function TableCheckbox({
  cellContext,
}: {
  cellContext: CellContext<Attendee, boolean>;
}) {
  const [isChecked, setIsChecked] = useState(cellContext.getValue());

  const onChange = () => {
    setIsChecked(!isChecked);
    console.log(
      `Changing ${cellContext.column.id} to ${!isChecked} for hacker with id ${
        cellContext.row.original.id
      }`
    );
  };

  return <input type="checkbox" checked={isChecked} onChange={onChange} />;
}

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
    cell: (info) => <TableCheckbox cellContext={info} />,
    footer: "Accepted",
  }),
  columnHelper.accessor("isConfirmed", {
    header: "Confirmed",
    cell: (info) => <TableCheckbox cellContext={info} />,
    footer: "Confirmed",
  }),
  columnHelper.accessor("isCheckedIn", {
    header: "Checked In",
    cell: (info) => <TableCheckbox cellContext={info} />,
    footer: "Checked In",
  }),
];

export function HackersTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
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
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b">
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
    </div>
  );
}
