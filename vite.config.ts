import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import nodemailer from 'nodemailer';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'contact-api',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url?.split('?')[0];
            if (url === '/api/contact' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              req.on('end', async () => {
                try {
                  console.log("Received contact form request");
                  if (!body) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: "Empty request body." }));
                    return;
                  }

                  const { name, email, subject, message } = JSON.parse(body);
                  console.log("Parsed body:", { name, email, subject });

                  if (!name || !email || !subject || !message) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: "All fields are required." }));
                    return;
                  }

                  if (!env.EMAIL_USER || !env.EMAIL_PASS) {
                    console.log("Contact Form Submission (No Credentials):", { name, email, subject, message });
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ message: "Message received! (Email not configured)" }));
                    return;
                  }

                  console.log("Attempting to send email via nodemailer...");
                  const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                      user: env.EMAIL_USER,
                      pass: env.EMAIL_PASS,
                    },
                  });

                  const mailOptions = {
                    from: env.EMAIL_USER,
                    to: env.CONTACT_RECEIVER || env.EMAIL_USER,
                    subject: `Portfolio Contact: ${subject}`,
                    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                    replyTo: email
                  };

                  await transporter.sendMail(mailOptions);
                  console.log("Email sent successfully");
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ message: "Message sent successfully!" }));
                } catch (error) {
                  console.error("Error in contact API:", error);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: "Failed to send message. " + (error instanceof Error ? error.message : "Unknown error") }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
