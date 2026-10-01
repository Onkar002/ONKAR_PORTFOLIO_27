"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const projectTypes = [
  "Website / Landing page",
  "Dashboard / Admin system",
  "Web application",
  "Kolaborasi / Riset",
  "Lainnya",
];

const initialForm = {
  name: "",
  email: "",
  project: projectTypes[0],
  message: "",
};

const inputClass =
  "w-full bg-transparent border-b border-zinc-700 py-4 text-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors";

export default function Contact() {
  const [active, setActive] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const faqs = [
    {
      question: "Apa bidang keahlian utama Anda?",
      answer:
        "Saya berfokus pada Frontend Development, React.js, Next.js, Tailwind CSS, Framer Motion, GSAP, serta membangun website modern dengan performa tinggi.",
    },
    {
      question: "Apakah Anda tersedia untuk kolaborasi riset atau freelance?",
      answer:
        "Ya. Saya terbuka untuk proyek freelance, startup, kolaborasi produk digital, dan pengembangan aplikasi web modern.",
    },
    {
      question: "Apa tech stack tipikal Anda untuk produksi?",
      answer:
        "Next.js, React.js, JavaScript, TypeScript, Tailwind CSS, Framer Motion, GSAP, Node.js, Express.js, MongoDB, MySQL, Git, dan Vercel.",
    },
    {
      question:
        "Apakah Anda memiliki pengalaman dengan proyek enterprise atau lab?",
      answer:
        "Ya. Saya telah mengembangkan dashboard, website perusahaan, landing page, sistem admin, serta berbagai aplikasi bisnis berbasis web.",
    },
    {
      question: "Bagaimana cara memulai kemitraan atau proyek?",
      answer:
        "Hubungi saya melalui email atau formulir kontak. Kita akan mendiskusikan kebutuhan proyek, timeline, estimasi biaya, dan langkah selanjutnya.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === "success" || status === "error") setStatus("idle");
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Nama wajib diisi.";
    if (!form.email.trim()) next.email = "Email wajib diisi.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Format email tidak valid.";
    if (!form.message.trim()) next.message = "Pesan wajib diisi.";
    else if (form.message.trim().length < 10)
      next.message = "Pesan minimal 10 karakter.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Pesan baru dari ${form.name} - ${form.project}`,
          name: form.name,
          email: form.email,
          project: form.project,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black overflow-hidden py-20">
        <div className="relative flex overflow-hidden">
          <div className="marquee flex whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                <h1
                  className="
                    font-black
                    uppercase
                    text-[#2f2f2f]
                    leading-none
                    tracking-[-0.08em]
                    text-[60px]
                    sm:text-[90px]
                    md:text-[120px]
                    lg:text-[160px]
                    xl:text-[200px]
                    2xl:text-[240px]
                    mr-20
                  "
                >
                  • LET&apos;S BUILD SOMETHING AMAZING
                </h1>

                <h1
                  className="
                    font-black
                    uppercase
                    text-white
                    leading-none
                    tracking-[-0.08em]
                    text-[60px]
                    sm:text-[90px]
                    md:text-[120px]
                    lg:text-[160px]
                    xl:text-[200px]
                    2xl:text-[240px]
                    mr-20
                  "
                >
                  AVAILABLE FOR FREELANCE
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-28 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: intro */}
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Ceritakan proyek Anda
            </h2>
            <p className="mt-6 text-zinc-400 text-lg leading-8 max-w-md">
              Isi formulir ini dan saya akan membalas lewat email. Sertakan
              tujuan proyek, timeline, dan perkiraan anggaran jika sudah ada.
            </p>
            <div className="w-20 h-[3px] bg-zinc-700 mt-8 rounded-full" />
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-400">
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama lengkap"
                  aria-invalid={!!errors.name}
                  className={inputClass}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-zinc-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  aria-invalid={!!errors.email}
                  className={inputClass}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="project" className="block text-sm text-zinc-400">
                Jenis proyek
              </label>
              <select
                id="project"
                name="project"
                value={form.project}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                {projectTypes.map((t) => (
                  <option key={t} value={t} className="bg-black text-white">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-zinc-400">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Jelaskan kebutuhan proyek Anda"
                aria-invalid={!!errors.message}
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim pesan
                    <Send size={20} />
                  </>
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p
                    key="ok"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    role="status"
                    className="flex items-center gap-2 text-emerald-400"
                  >
                    <CheckCircle2 size={20} />
                    Pesan terkirim. Saya akan segera membalas.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    key="err"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    role="alert"
                    className="flex items-center gap-2 text-red-400"
                  >
                    <AlertCircle size={20} />
                    Pesan gagal terkirim. Coba lagi atau kirim lewat email.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="w-20 h-[3px] bg-zinc-700 mx-auto mt-6 rounded-full" />
          </div>

          {/* FAQ List */}
          <div>
            {faqs.map((faq, index) => {
              const open = active === index;

              return (
                <div key={index} className="border-b border-zinc-800">
                  <button
                    onClick={() => setActive(open ? null : index)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-6 py-10"
                  >
                    <span className="text-left text-xl md:text-[34px] font-bold leading-snug">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0"
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-10 md:pr-20 text-zinc-400 text-lg leading-8 max-w-4xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}