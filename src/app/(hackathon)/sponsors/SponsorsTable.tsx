"use client";

import { Modal } from "@/lib/Modal";
import { Sponsor, generateRandomSponsors, getAmountFromTier } from "@/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import { useState } from "react";

const data: Sponsor[] = generateRandomSponsors(10);

const columnHelper = createColumnHelper<Sponsor>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
    footer: "Name",
  }),
  columnHelper.accessor("logo", {
    header: "Logo",
    cell: (info) => (
      <Image src="/vercel.svg" alt="vercel" height={100} width={100} />
    ),
    footer: "Logo",
  }),
  columnHelper.accessor("since", {
    header: "Since",
    footer: "Since",
  }),
  columnHelper.display({
    id: "amount",
    header: "Amount",
    cell: (info) => getAmountFromTier(info.row.original.tier),
    footer: "Amount",
  }),
];

export function SponsorsTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [modal, setModal] = useState<{
    isOpen: boolean;
    sponsor: Sponsor | null;
  }>({
    isOpen: false,
    sponsor: null,
  });

  return (
    <>
      <Modal
        isOpen={modal.isOpen}
        setIsOpen={() =>
          setModal((prev) => ({ ...prev, isOpen: !prev.isOpen }))
        }
        header={<div>{modal.sponsor?.name}</div>}
        body={<></>}
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
                    sponsor: row.original,
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
