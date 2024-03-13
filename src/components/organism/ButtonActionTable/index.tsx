"use client";

import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import DialogEdit from "./DialogEdit";

interface ButtonActionTableProps {}

const ButtonActionTable: FC<ButtonActionTableProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="d-flex order-actions">
      <DialogEdit />
      <a
        type="button"
        className="text-danger bg-light-danger border-0"
        data-bs-toggle="modal"
        data-bs-target="#modalDelete"
      >
        <i className="bx bxs-trash"></i>
      </a>
    </div>
  );
};

export default ButtonActionTable;
