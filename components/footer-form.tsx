"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Element } from "react-scroll";
import { toast } from "react-hot-toast";
import axios from "axios";

import { footerFormSchema } from "@/constants/schemas/footer-form-schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function FooterForm() {
  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof footerFormSchema>>({
    resolver: zodResolver(footerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof footerFormSchema>) {
    try {
      setIsSending(true);

      const res = await axios.post("/api/send-email", values);

      toast.success(res.data.message || "Mensagem enviada com sucesso!");
      form.reset();
    } catch (error) {
      toast.error("Erro ao enviar. Tente novamente.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <Form {...form}>
      <Element name="contact" className="mb-4 w-full max-w-md sm:mb-0">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="poppins-font text-base font-medium text-light-primary">
                  Nome
                </FormLabel>
                <FormControl>
                  <Input disabled={isSending} {...field} />
                </FormControl>
                <FormMessage className="poppins-font text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="poppins-font text-base font-medium text-light-primary">
                  E-mail
                </FormLabel>
                <FormControl>
                  <Input disabled={isSending} {...field} />
                </FormControl>
                <FormMessage className="poppins-font text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel className="poppins-font text-base font-medium text-light-primary">
                  Mensagem
                </FormLabel>
                <FormControl>
                  <Input disabled={isSending} {...field} />
                </FormControl>
                <FormMessage className="poppins-font text-sm" />
              </FormItem>
            )}
          />

          {/* BOTÃO PREMIUM */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSending}
              className="relative overflow-hidden poppins-font font-semibold text-sm sm:text-base bg-gold-primary text-[#0e0e0e] px-6 py-3 rounded-md group disabled:opacity-70"
            >
              <span className="relative z-10">
                {isSending ? "Enviando..." : "Enviar mensagem"}
              </span>

              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700" />
              </span>
            </button>
          </div>

        </form>
      </Element>
    </Form>
  );
}
