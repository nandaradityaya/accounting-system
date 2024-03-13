"use client";
import React, { FC } from "react";
import { Button } from "react-bootstrap";

interface CButtonProps {
  children: string;
  action?: () => void;
  className: string;
  loading?: boolean;
}

const CButton: FC<CButtonProps> = ({
  children,
  action,
  className,
  loading,
}) => {
  return (
    <Button className={className} onClick={action}>
      {loading ? "Loading..." : children}
    </Button>
  );
};

export default CButton;
