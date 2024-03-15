import BreadCrumbComponent from "@/components/organism/Breadcrumb";
import Loading from "@/components/organism/Loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { FC, useEffect, useState } from "react";
import { Suspense } from "react";
import { Period, columns } from "./DataTable/columns";
import { DataTable } from "./DataTable/data-table";
import DialogAddNew from "./DialogAddNew";

async function getData(): Promise<Period[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      company: "PT. Advantage SCM",
      fiskalYear: "2021",
      period: "Maret",
      noPeriod: 12,
      startDate: "12",
      endDate: "12",
      status: "Open",
      statusFiskal: "Active",
    },
  ];
}

interface PeriodProps {}

const Period: FC<PeriodProps> = async ({}) => {
  const data = await getData();
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000); // Menunggu 2 detik sebelum menghilangkan loading

  //     return () => clearTimeout(timer); // Membersihkan timer saat komponen dilepas
  //   }, []);

  return (
    <Suspense fallback={<Loading />}>
      {/* {isLoading ? <Loading /> : <Card>Test</Card>} */}
      <BreadCrumbComponent
        textFirst={"Master"}
        urlFirst={"/master/period"}
        textSecond={"Period"}
      />

      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="">
              <CardTitle>List of Period</CardTitle>
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
    </Suspense>
  );
};

export default Period;
