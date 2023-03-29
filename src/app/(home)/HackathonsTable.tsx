"use client";

import { Hackathon, dummyHackathonData as data } from "@/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";

const columnHelper = createColumnHelper<Hackathon>();

const columns = [
  columnHelper.accessor("term", {
    header: "Hackathon",
    cell: (info) => `${info.getValue().semester} ${info.getValue().year}`,
    footer: "Hackathon",
  }),
  columnHelper.accessor("attendees", {
    header: "Attendees",
    cell: (info) => info.getValue().length,
    footer: "Attendees",
  }),
  columnHelper.accessor("sponsors", {
    header: "Sponsors",
    cell: (info) => info.getValue().length,
    footer: "Sponsors",
  }),
];

export function HackathonTable() {
  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-6 overflow-auto text-xl">
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
              onClick={() => router.push("/hackathon")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push("/hackathon");
                }
              }}
              role="link"
              key={row.id}
              tabIndex={i} /* Allow row to be focusable */
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
  );
}
