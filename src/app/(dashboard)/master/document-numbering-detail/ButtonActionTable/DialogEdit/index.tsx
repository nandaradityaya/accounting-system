"use client";

import React, { FC } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addNewDetailDocument } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface DialogEditProps {}

const DialogEdit: FC<DialogEditProps> = ({}) => {
  const form = useForm<z.infer<typeof addNewDetailDocument>>({
    resolver: zodResolver(addNewDetailDocument),
  });

  // const { data: session } = useSession();
  //   const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (val: z.infer<typeof addNewDetailDocument>) => {
    console.log(val);
  };

  // const onSubmit = async (val: z.infer<typeof teamFormSchema>) => {
  // 	try {
  // 		const body = {
  // 			...val,
  // 			companyId: session?.user.id,
  // 		};

  // 		await fetch("/api/company/teams", {
  // 			method: "POST",
  // 			headers: { "Content-Type": "application/json" },
  // 			body: JSON.stringify(body),
  // 		});

  // 		toast({
  // 			title: "Success",
  // 			description: "Add member success",
  // 		});

  // 		await router.refresh();
  // 	} catch (error) {
  // 		toast({
  // 			title: "Error",
  // 			description: "Please try again",
  // 		});
  // 		console.log(error);
  // 	}
  // };

  return (
    <Dialog>
      <DialogTrigger>
        <a className="text-primary bg-light-primary border-0 me-3">
          <i className="bx bxs-edit"></i>
        </a>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Edit Document</DialogTitle>
          <DialogDescription>
            Change the field to edit Document
          </DialogDescription>
        </DialogHeader>

        <Separator />

        {/* spread form dari variable form kita */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="period"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Period</FormLabel>
                  <FormControl>
                    <Input placeholder="period..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Number..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-right">
              <Button>Save</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogEdit;
