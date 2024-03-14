import CBreadcrumb from "@/components/custom/Breadcrumb";
import React, { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DialogAddNew from "../DialogAddNew";
import { DetailLookup } from "../DataTable/columns";
import { columns } from "../DataTable/columns";
import { DataTable } from "../DataTable/data-table";
import BreadCrumbComponent from "@/components/organism/Breadcrumb";

async function getData(): Promise<DetailLookup[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      period: "202408",
      lastNumber: 23,
    },
  ];
}

interface ReferenceDetailProps {}

const ReferenceDetail: FC<ReferenceDetailProps> = async () => {
  const data = await getData();
  return (
    <>
      <BreadCrumbComponent
        textFirst={"Master"}
        urlFirst={"/master/document-numbering"}
        textSecond={"Document Numbering"}
        urlSecond={"/master/document-numbering"}
        textThird={"Detail"}
      />

      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="">
              <CardTitle>JNH</CardTitle>
              <CardDescription>Journal Harian</CardDescription>
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
    </>
  );
};

export default ReferenceDetail;
