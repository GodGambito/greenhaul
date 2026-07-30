# GreenHaul Removal Services - Next.js Application

A modern, high-performance, responsive Next.js application for **GreenHaul Removal & Cleaning Services**. Designed for seamless deployment on **Vercel**.

## 🌟 Key Features

- **🌐 Dual Language Support (English & Spanish)**: Instant language switcher in navbar and mobile menu with persistent user preference.
- **✉️ Server Email Contact Form**: Submits quote requests directly to your configured email address (`.env` configured) via a Next.js Server API route using `Nodemailer`. Includes graceful fallback to user mail client.
- **🖼️ Real Before & After Gallery**: High-resolution gallery featuring real project photos with category filters and an interactive image inspection lightbox modal.
- **🧮 Interactive Price Estimator**: Instant project cost calculator allowing clients to estimate job scope and transfer data directly into the contact form.
- **📱 Quick Actions**: One-click action buttons for direct calling `(425) 280-2915` and WhatsApp messaging.
- **⚡ Fully Responsive & SEO Optimized**: Clean green & dark aesthetic with OpenGraph tags, semantic HTML, and dynamic micro-animations.

---

## 📞 Business Information Included

- **Company Name**: GreenHaul Removal Services (GreenHaul Cleaning and Junk Removal Services)
- **Phone Number**: `(425) 280-2915` (Direct call & WhatsApp links)
- **Email**: `greenhaul.removal@gmail.com`
- **Facebook**: `greenhaul removal`
- **Instagram**: `greenhaul.removal`
- **Operating Schedule**:
  - **Monday to Saturday**: 24 Hours Available (`Lunes a Sábado 24 horas`)
  - **Sunday**: By Appointment (`Domingo con cita previa`)
- **Service Areas**: Seattle, Everett & surrounding communities in Puget Sound

---

## 🛠️ Environment Variables Configuration (.env)

Create a `.env.local` file (or set environment variables in Vercel project settings):

```env
# Recipient Email for Contact Form Quotes
CONTACT_EMAIL=greenhaul.removal@gmail.com

# Optional SMTP Configuration (for live email sending via Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=greenhaul.removal@gmail.com
SMTP_PASS=your_gmail_app_password
```

---

## 🚀 How to Push to GitHub & Deploy to Vercel

### 1. Push to GitHub
```bash
git push -u origin main
```
*(If the repository on GitHub already contains a commit, run `git push -u origin main --force`)*

### 2. Deploy on Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." -> "Project"**.
2. Import the `GodGambito/greenhaul` repository.
3. In **Environment Variables**, add:
   - Key: `CONTACT_EMAIL` | Value: `greenhaul.removal@gmail.com`
   - *(Optional)* `SMTP_USER` and `SMTP_PASS` if you want automatic background emails sent via Nodemailer.
4. Click **Deploy**.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```
