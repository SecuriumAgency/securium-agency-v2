"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  firstname: z.string().min(2, "Le prénom est requis"),
  email: z.string().email("Adresse e-mail invalide"),
  phone: z.string().optional(),
  message: z.string().min(10, "Décrivez votre projet en quelques mots (10 caractères min.)"),
  company: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (data.company) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      router.push("/contact/success");
    } catch {
      setSubmitError("Une erreur est survenue. Merci de réessayer ou de nous écrire directement.");
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative bg-zinc-900/40 border border-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 space-y-6"
    >
      {/* Honeypot - masqué visuellement, piège pour les bots */}
      <div className="absolute -left-[9999px] top-0 opacity-0" aria-hidden="true">
        <label htmlFor="company">Ne pas remplir ce champ</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
            Nom
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 transition-colors focus:outline-none focus:border-brand-500"
            placeholder="Votre nom"
            {...register("name")}
          />
          {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="firstname" className="mb-2 block text-sm font-medium text-zinc-300">
            Prénom
          </label>
          <input
            id="firstname"
            type="text"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 transition-colors focus:outline-none focus:border-brand-500"
            placeholder="Votre prénom"
            {...register("firstname")}
          />
          {errors.firstname && <p className="mt-2 text-sm text-red-400">{errors.firstname.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 transition-colors focus:outline-none focus:border-brand-500"
          placeholder="vous@exemple.fr"
          {...register("email")}
        />
        {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-zinc-300">
          Téléphone
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 transition-colors focus:outline-none focus:border-brand-500"
          placeholder="06 12 34 56 78"
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
          Votre projet
        </label>
        <textarea
          id="message"
          className="h-36 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 transition-colors focus:outline-none focus:border-brand-500"
          placeholder="Décrivez votre projet..."
          {...register("message")}
        />
        {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>}
      </div>

      {submitError && <p className="text-sm text-red-400">{submitError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-brand-500 px-8 py-4 font-bold text-black transition-all duration-300 hover:bg-brand-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </form>
  );
}
