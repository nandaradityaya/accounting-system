"use client";

import { ColumnDef } from "@tanstack/react-table";
import ButtonActionTable from "../ButtonActionTable";
import { Badge } from "@/components/ui/badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Period = {
  id: string;
  company: string;
  fiskalYear: string;
  period: string;
  noPeriod: number;
  startDate: string;
  endDate: string;
  status: string;
  statusFiskal: string;
};

export const columns: ColumnDef<Period>[] = [
  {
    accessorKey: "id",
    header: "No",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "fiskalYear",
    header: "Fiskal Year",
  },
  {
    accessorKey: "period",
    header: "Periode",
  },
  {
    accessorKey: "noPeriod",
    header: "No. Period",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const variant = status === "Closed" ? "secondary" : undefined;
      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    accessorKey: "statusFiskal",
    header: "Status Fiskal",
    cell: ({ row }) => {
      const statusFiskal = row.original.statusFiskal;
      const variant = statusFiskal === "Inactive" ? "secondary" : undefined;
      return <Badge variant={variant}>{statusFiskal}</Badge>;
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
