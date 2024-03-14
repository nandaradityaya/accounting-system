"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import ButtonViewDetail from "@/components/organism/ButtonViewDetail";
import ButtonActionTable from "../ButtonActionTable";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DetailLookup = {
  id: string;
  period: string;
  lastNumber: number;
};

export const columns: ColumnDef<DetailLookup>[] = [
  {
    accessorKey: "id",
    header: "No",
  },
  {
    accessorKey: "period",
    header: "Period",
  },
  {
    accessorKey: "lastNumber",
    header: "Last Number",
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
