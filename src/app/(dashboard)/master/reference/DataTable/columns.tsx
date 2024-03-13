"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import ButtonViewDetail from "@/components/organism/ButtonViewDetail";
import ButtonActionTable from "@/components/organism/ButtonActionTable";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Reference = {
  id: string;
  code: string;
  description: string;
};

export const columns: ColumnDef<Reference>[] = [
  {
    accessorKey: "id",
    header: "No",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "actions",
    header: "View Detail",
    enableHiding: false,
    cell: ({ row }) => {
      const reference = row.original;

      return (
        <ButtonViewDetail url={"/master/reference-detail/1"}></ButtonViewDetail>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    enableHiding: false,
    cell: ({ row }) => {
      const reference = row.original;

      return <ButtonActionTable></ButtonActionTable>;
    },
  },
];
