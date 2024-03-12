"use client";

import React from "react";

import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Reference, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Reference[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      code: "ACST",
      description: "Type Sub Account",
    },
    {
      id: "2",
      code: "ACTP",
      description: "Type Account",
    },
    {
      id: "3",
      code: "BGRP",
      description: "Bisnis Unit Grup",
    },
    {
      id: "4",
      code: "BLN",
      description: "Nama Bulan Indonesia",
    },
    {
      id: "5",
      code: "BUNIT",
      description: "Bisnis Unit",
    },
  ];
}

// eslint-disable-next-line @next/next/no-async-client-component
const ReferencePage = async () => {
  const data = await getData();

  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ReferencePage;
