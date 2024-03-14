"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import ButtonViewDetail from "@/components/organism/ButtonViewDetail";
import ButtonActionTable from "@/components/organism/ButtonActionTable";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DetailLookup = {
  id: string;
  lookupCode: string;
  value1: number;
  value2: number;
  value3: number;
  value4: number;
  displayLookup: string;
};

export const columns: ColumnDef<DetailLookup>[] = [
  {
    accessorKey: "id",
    header: "No",
  },
  {
    accessorKey: "lookupCode",
    header: "Lookup Code",
  },
  {
    accessorKey: "value1",
    header: "Lookup Value 1",
  },
  {
    accessorKey: "value2",
    header: "Lookup Value 2",
  },
  {
    accessorKey: "value3",
    header: "Lookup Value 3",
  },
  {
    accessorKey: "value4",
    header: "Lookup Value 4",
  },
  {
    accessorKey: "displayLookup",
    header: "Display Lookup",
  },
  {
    id: "actions",
    header: "Action",
    enableHiding: false,
    cell: ({ row }) => {
      const detailLookup = row.original;

      return <ButtonActionTable></ButtonActionTable>;
    },
  },
];
