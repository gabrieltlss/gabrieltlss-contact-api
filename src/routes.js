const dotenv = require("dotenv");
dotenv.config();
const { Router } = require("express");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const router = Router();

router.post("/enviar", async (req, res) => {
    const { name, email, message } = req.body;

    const cleanName = name.trim().replace(/\s+/g, " ");

    if (cleanName === "" || email === "" || message === "") {
        return res.status(400).json({ inputError: "Preencha todos os campos." });
    }

    if (cleanName.match(/[^\p{L} ]/ug) !== null) {
        return res.status(400).json({ inputError: "Nome inválido! Apenas letras e espaços simples são permitidos." });
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)) {
        return res.status(400).json({ inputError: "E-mail inválido!" });
    }

    if (
        message.length < 10 ||
        message.length > 500 ||
        !message.match(/^[\p{L}\d\s.,!?'"():;-]+$/u)
    ) {
        return res.status(400).json({ inputError: "Campo de texto inválido!" });
    }

    const msg = {
        to: process.env.EMAIL,
        from: process.env.EMAIL,
        replyTo: email,
        subject: 'Contato - Gabriel Teles',
        text: `Nome: ${cleanName}\nMessage: ${message}`,
        html: `<h2>${cleanName}</h2>
        <p>${message}</p>`,
    }

    try {
        await sgMail.send(msg);
        res.json({ message: "E-mail enviado com sucesso." });
    } catch (error) {
        res.status(500).json({ error: "E-mail não enviado." });
    }
});

router.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

module.exports = router;