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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addNewDocument } from "@/lib/form-schema";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DialogEditProps {}

const DialogEdit: FC<DialogEditProps> = ({}) => {
  const form = useForm<z.infer<typeof addNewDocument>>({
    resolver: zodResolver(addNewDocument),
  });

  // const { data: session } = useSession();
  //   const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (val: z.infer<typeof addNewDocument>) => {
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
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Company..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="prefix"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prefix</FormLabel>
                    <FormControl>
                      <Input placeholder="Prefix..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sufix"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sufix</FormLabel>
                    <FormControl>
                      <Input placeholder="Sufix..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lengthNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Length of Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Length of Number..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resetBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reset By</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Reset By" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Month">Month</SelectItem>
                        <SelectItem value="Day">Day</SelectItem>
                        <SelectItem value="Year">Year</SelectItem>
                        {/* {data?.map((item: CategoryJob) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name}
                        </SelectItem>
                      ))} */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
