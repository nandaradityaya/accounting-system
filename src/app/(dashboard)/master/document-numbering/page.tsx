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

import { DocumentNumbering, columns } from "./DataTable/columns";
import { DataTable } from "./DataTable/data-table";
import BreadCrumbComponent from "@/components/organism/Breadcrumb";

async function getData(): Promise<DocumentNumbering[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      perusahaan: "PT. Advantage SCM",
      code: "DEPR",
      description: "Depresiasi",
      prefix: "DEPR",
      sufix: "THN",
    },
  ];
}

const DocumentNumbering = async () => {
  const data = await getData();
  return (
    <>
      <BreadCrumbComponent
        textFirst={"Master"}
        urlFirst={"/master/document-numbering"}
        textSecond={"Document Numbering"}
      />

      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="">
              <CardTitle>List of Document</CardTitle>
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

export default DocumentNumbering;
