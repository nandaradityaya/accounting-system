import React, { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadCrumbComponentProps {
  textFirst: string;
  textSecond: string;
  textThird?: string;
  urlFirst?: string;
  urlSecond?: string;
}

const BreadCrumbComponent: FC<BreadCrumbComponentProps> = ({
  textFirst,
  textSecond,
  textThird,
  urlFirst,
  urlSecond,
}) => {
  return (
    <Breadcrumb className="mb-3">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={urlFirst}>{textFirst}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        {!textThird && (
          <BreadcrumbItem>
            <BreadcrumbPage>{textSecond}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
        {textThird && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={urlSecond}>{textSecond}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}

        {textThird && (
          <BreadcrumbItem>
            <BreadcrumbPage>{textThird}</BreadcrumbPage>
          </BreadcrumbItem>
        )}

        {/* <BreadcrumbItem>
          <BreadcrumbLink href={urlFirst}>{textFirst}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={urlSecond}>{textSecond}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{textThird}</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbComponent;
