import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]/g, " ").trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const name = typeof body?.name === "string" ? sanitizeHeaderValue(body.name) : "";
    const firstname = typeof body?.firstname === "string" ? sanitizeHeaderValue(body.firstname) : "";
    const email = typeof body?.email === "string" ? sanitizeHeaderValue(body.email) : "";
    const phone = typeof body?.phone === "string" ? sanitizeHeaderValue(body.phone) : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Les champs nom, email et message sont requis." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("EMAIL_USER / EMAIL_PASS ne sont pas configurées.");
      return NextResponse.json(
        { error: "Le service d'envoi n'est pas configuré." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.fr",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const fullName = [firstname, name].filter(Boolean).join(" ");

    await transporter.sendMail({
      from: "contact@securium-agency.fr",
      to: "contact@securium-agency.fr",
      replyTo: email,
      subject: `Nouvelle demande de contact — ${fullName}`,
      html: `
        <h2>Nouvelle demande via le site Securium Agency</h2>
        <p><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>` : ""}
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur envoi email contact:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi." },
      { status: 500 }
    );
  }
}
