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
import { PlusIcon } from "lucide-react";
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
// import { useSession } from "next-auth/react";
// import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

interface DialogAddNewProps {}

const DialogAddNew: FC<DialogAddNewProps> = ({}) => {
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
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Add New</DialogTitle>
          <DialogDescription>
            Fill the field to add new Detail Document
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

export default DialogAddNew;
