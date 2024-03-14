import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DialogDeleteProps {}

const DialogDelete: FC<DialogDeleteProps> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="text-danger bg-light-danger border-0">
          <i className="bx bxs-trash"></i>
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Data</DialogTitle>
        </DialogHeader>
        <div className="font-semibold">
          Are you sure want to delete this data?
        </div>
        <DialogFooter>
          <Button variant={"destructive"} type="submit">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDelete;
