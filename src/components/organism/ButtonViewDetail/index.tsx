"use client";

import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ButtonViewDetailProps {
  url: string;
}

const ButtonViewDetail: FC<ButtonViewDetailProps> = ({ url }) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(url)}
      variant="default"
      className="rounded-full"
    >
      View Detail
    </Button>
  );
};

export default ButtonViewDetail;
