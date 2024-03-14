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
import { addNewLookup } from "@/lib/form-schema";
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
  const form = useForm<z.infer<typeof addNewLookup>>({
    resolver: zodResolver(addNewLookup),
  });

  // const { data: session } = useSession();
  //   const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (val: z.infer<typeof addNewLookup>) => {
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
          <DialogTitle>Edit Lookup</DialogTitle>
          <DialogDescription>
            Change the field to edit Lookup data
          </DialogDescription>
        </DialogHeader>

        <Separator />

        {/* spread form dari variable form kita */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Code..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-4 gap-3">
              <FormField
                control={form.control}
                name="value1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lookup Value 1</FormLabel>
                    <FormControl>
                      <Input placeholder="Value..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="value2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lookup Value 2</FormLabel>
                    <FormControl>
                      <Input placeholder="Value..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="value3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lookup Value 3</FormLabel>
                    <FormControl>
                      <Input placeholder="Value..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="value4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lookup Value 4</FormLabel>
                    <FormControl>
                      <Input placeholder="Value..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="displayLookup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display Lookup</FormLabel>
                  <FormControl>
                    <Input placeholder="Display Lookup..." {...field} />
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
