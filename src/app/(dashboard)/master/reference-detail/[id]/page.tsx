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

async function getData(): Promise<DetailLookup[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      lookupCode: "ACST",
      value1: 23,
      value2: 43,
      value3: 64,
      value4: 87,
      displayLookup: "Test",
    },
  ];
}

interface ReferenceDetailProps {}

const ReferenceDetail: FC<ReferenceDetailProps> = async () => {
  const data = await getData();
  return (
    <>
      {/* <CBreadcrumb
        textFirst={"Master"}
        textSecond={"Reference"}
        textThird={"Detail"}
        urlSecond="/master/reference"
      /> */}

      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/master/reference">Reference</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="">
              <CardTitle>ACST</CardTitle>
              <CardDescription>Type Sub Account</CardDescription>
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
