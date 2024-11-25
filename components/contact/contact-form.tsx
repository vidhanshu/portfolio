"use client";

import * as z from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import Section from "../section";
import { Button } from "../ui/button";
import WindowScreen from "../common/window-screen";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { sendContactEmail } from "@/actions/send-contact-email";

const contactFormSchema = z.object({
  fullName: z.string().trim().min(3, { message: "Full name must be at least 3 characters long" }),
  company: z.string().trim().optional(),
  website: z.string().trim().optional(),
  email: z.string().email().trim(),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});
type ContactFormSchemaValue = z.infer<typeof contactFormSchema>;
const ContactForm = () => {
  const form = useForm<ContactFormSchemaValue>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      company: "",
      email: "",
      fullName: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormSchemaValue) => {
    const { email, fullName, message, company, website } = values;
    const { error, message: resMsg } = await sendContactEmail({ email, message, name: fullName, company, website });
    if (error) return toast.error(resMsg);
    toast.success(resMsg);
    form.reset();
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Section>
      <WindowScreen containerProps={{ className: "mx-auto mb-14 w-full max-w-[600px] relative" }} title="write-me">
        <>
          {/* ं shooting star before */}
          <div className="w-[1px] inset-x-0 mx-auto -top-32 h-32 bg-gradient-to-t from-primary/70 to-primary/5 absolute" />
          {/* ं shooting star after */}
          <div className="w-[1px] inset-x-0 mx-auto -bottom-32 h-32 bg-gradient-to-b from-primary/70 to-primary/5 absolute" />
        </>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="pb-4 md:p-4 space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="text-muted-foreground">01. </span>full-name <span className="text-rose-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <input disabled={isSubmitting} className="block border text-lg rounded-sm p-4 w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="text-muted-foreground">02. </span>company
                  </FormLabel>
                  <FormControl>
                    <input disabled={isSubmitting} className="block border text-lg rounded-sm p-4 w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="text-muted-foreground">03. </span>website
                  </FormLabel>
                  <FormControl>
                    <input type="url" className="block border text-lg rounded-sm p-4 w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="text-muted-foreground">04. </span>email <span className="text-rose-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <input type="email" className="block border text-lg rounded-sm p-4 w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="text-muted-foreground">04. </span>your-message <span className="text-rose-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <textarea disabled={isSubmitting} rows={4} className="block border text-lg rounded-sm p-4 w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button disabled={isSubmitting} className={cn(isSubmitting && "cursor-wait")} icon={Send} type="submit" variant="outline">
                Submit form
              </Button>
            </div>
          </form>
        </Form>
      </WindowScreen>
    </Section>
  );
};

export default ContactForm;
