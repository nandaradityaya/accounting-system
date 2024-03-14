import CBreadcrumb from "@/components/custom/Breadcrumb";
import React from "react";
import DialogAddNew from "./DialogAddNew";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Reference, columns } from "./DataTable/columns";
import { DataTable } from "./DataTable/data-table";

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

const Reference = async () => {
  const data = await getData();
  return (
    <>
      {/* <CBreadcrumb
        textFirst={"Master"}
        textSecond={"Reference"}
        // textThird={""}
        urlSecond="/"
      /> */}
      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Reference</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="">
              <CardTitle>List of Lookup</CardTitle>
            </div>
            <div className="flex items-center">
              <DialogAddNew />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
      {/* <div className="card radius-10">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="font-weight-bold mb-0">List of Lookup</h5>
            <div className="ms-auto">
              <DialogAddNew />
            </div>
          </div>

          <DataTable columns={columns} data={data} />
        </div>
      </div> */}
    </>
  );
};

export default Reference;
