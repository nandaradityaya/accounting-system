"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import ButtonViewDetail from "@/components/organism/ButtonViewDetail";
import ButtonActionTable from "../ButtonActionTable";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DocumentNumbering = {
  id: string;
  perusahaan: string;
  code: string;
  description: string;
  prefix: string;
  sufix: string;
};

export const columns: ColumnDef<DocumentNumbering>[] = [
  {
    accessorKey: "id",
    header: "No",
  },
  {
    accessorKey: "perusahaan",
    header: "Perusahaan",
  },
  {
    accessorKey: "code",
    header: "Code Document",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "prefix",
    header: "Prefix",
  },
  {
    accessorKey: "sufix",
    header: "Sufix",
  },
  {
    id: "actions",
    header: "View Detail",
    enableHiding: false,
    cell: ({ row }) => {
      const docNumbering = row.original;

      return (
        <ButtonViewDetail
          url={"/master/document-numbering-detail/1"}
        ></ButtonViewDetail>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    enableHiding: false,
    cell: ({ row }) => {
      const docNumbering = row.original;

      return <ButtonActionTable></ButtonActionTable>;
    },
  },
];
