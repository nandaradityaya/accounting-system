"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface CBreadCrumbProps {
  textFirst: string;
  textSecond: string;
  textThird?: string;
  urlSecond?: string;
}

const CBreadcrumb: React.FC<CBreadCrumbProps> = ({
  textFirst,
  textSecond,
  textThird,
  urlSecond,
}) => {
  const router = useRouter();
  return (
    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
      <div className="breadcrumb-title pe-3">{textFirst}</div>
      <div className="ps-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 p-0">
            <li className="breadcrumb-item">
              <a type="button" onClick={() => router.push("/master/reference")}>
                <i className="bx bx-home-alt text-primary"></i>
              </a>
            </li>

            {!textThird && (
              <li className="breadcrumb-item active" aria-current="page">
                {textSecond}
              </li>
            )}

            {textThird && (
              <li className="breadcrumb-item">
                <a href={urlSecond}>{textSecond}</a>
              </li>
            )}

            {textThird && (
              <li className="breadcrumb-item active" aria-current="page">
                {textThird}
              </li>
            )}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default CBreadcrumb;
