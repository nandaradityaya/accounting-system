import CBreadcrumb from "@/components/custom/Breadcrumb";
import React from "react";

const Reference = () => {
  return (
    <>
      <CBreadcrumb
        textFirst={"Master"}
        textSecond={"Reference"}
        // textThird={"Reference"}
        urlSecond="/"
        textThird={""}
      />
    </>
  );
};

export default Reference;
