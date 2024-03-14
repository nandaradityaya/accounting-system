"use client";

import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import DialogEdit from "./DialogEdit";
import DialogDelete from "./DialogDelete";

interface ButtonActionTableProps {}

const ButtonActionTable: FC<ButtonActionTableProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="d-flex order-actions">
      <DialogEdit />
      <DialogDelete />
    </div>
  );
};

export default ButtonActionTable;
