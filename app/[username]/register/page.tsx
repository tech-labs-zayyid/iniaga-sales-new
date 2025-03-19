"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserPlus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const formSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  phone: z.string().regex(/^(\+62|62|0)8[1-9][0-9]{6,9}$/, "Please enter a valid Indonesian phone number"),
  email: z.string().email("Please enter a valid email address"),
});

export default function RegisterPage({ params }: any) {
  const { username } = params;
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const payload = {
      email: values.email,
      name: values.fullName,
      password: "-",
      username: "-",
      sales_username: username,
      whatsapp_number: values.phone,
      image_url: "-",
      role: "agent",
    };

    try {
      const response = await axios.post("https://apiniaga.zayyid.com/agent/register", payload);
      console.log("Success:", response.data);
      setModalMessage("Registration successful!"); // Pesan sukses
      form.reset();
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      setModalMessage("Failed to register. Please try again."); // Pesan error
    } finally {
      setLoading(false);
      setModalOpen(true); // Buka modal
    }
  }

  return (
    <div className="container max-w-2xl mx-auto py-10 mt-20">
      <Card>
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <UserPlus className="w-6 h-6" />
            <CardTitle className="text-2xl">Agent Registration</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...form.register("fullName")} />
                </FormControl>
                <FormMessage>{form.formState.errors.fullName?.message}</FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel>Phone Number (WhatsApp)</FormLabel>
                <FormControl>
                  <Input placeholder="08123456789" {...form.register("phone")} />
                </FormControl>
                <FormMessage>{form.formState.errors.phone?.message}</FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" type="email" {...form.register("email")} />
                </FormControl>
                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
              </FormItem>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Modal Dialog */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogTitle>Notification</DialogTitle>
          <DialogDescription>{modalMessage}</DialogDescription>
          <Button onClick={() => setModalOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
