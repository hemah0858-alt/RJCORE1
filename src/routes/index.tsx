import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Toaster } from "@/Components/ui/sonner";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import {
  Leaf, Shield, Truck, Package, BadgeCheck, Globe2,
  Phone, Mail, MapPin, MessageCircle, ArrowRight, Sprout, Menu, X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroImg from "@/assets/hero-cocopeat.jpg";
import pBlock from "@/assets/product-block.jpg";
import pLowEc from "@/assets/Low ec.jpg";
import pHighEc from "@/assets/High-EC-Cocopeat.jpg";
import pChips from "@/assets/product-chips.jpg";
import pFiber from "@/assets/product-fiber.jpg";
import pGrowbag from "@/assets/product-growbag.jpg";
import pDiscs from "@/assets/product-discs.jpg";
import logo from  "@/assets/RJ Logo.png";
import FiveKgBlock from "@/Components/FiveKgBlock";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RJ Coir — Premium Cocopeat Exporter from India" },
      {
        name: "description",
        content:
          "RJ Coir manufactures and exports premium cocopeat blocks, grow bags, coco chips, fiber and discs from Tamil Nadu, India. Export-quality, custom-packed, on-time shipments worldwide.",
      },
      { property: "og:title", content: "RJ Coir — Premium Cocopeat Exporter from India" },
      {
        property: "og:description",
        content:
          "Premium cocopeat solutions for global agriculture. Manufacturer & exporter based in Tamil Nadu, India.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PRODUCTS = [
  {
    name: "5 kg Cocopeat Blocks",
    variants: [
      { label: "Standard", img: pBlock, desc: "Compressed 5 kg blocks expanding to ~75 L. Easy to ship, store and rehydrate." },
      { label: "Low EC", img: pLowEc, desc: "Washed & buffered for sensitive crops. EC < 0.5 mS/cm." },
      { label: "High EC", img: pHighEc, desc: "Unwashed cocopeat for industrial mulching & soil conditioning." },
    ],
  },
  { name: "Coco Chips", img: pChips, desc: "Chunky coir pieces ideal for orchids, anthuriums and aeration." },
  { name: "Coco Fiber", img: pFiber, desc: "Long natural fibers for mattresses, ropes and erosion control." },
];
const WHATSAPP = "+919791401001";
const PHONE_DISPLAY = "+91 97914 01001";
const EMAIL = "info@rjcoir.com";
const ADDRESS = "RJ Coir Factory, Tenkasi, Tamil Nadu, India";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center">
  <img
    src={logo}
    alt="RJ Coir Logo"
    className="h-14 w-auto"
  />
</a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#about" className="text-muted-foreground hover:text-foreground">About</a>
          <a href="#products" className="text-muted-foreground hover:text-foreground">Products</a>
          <a href="#why" className="text-muted-foreground hover:text-foreground">Why Us</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"

            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-md border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-sm font-medium sm:px-6">
            {[
              ["About", "#about"],
              ["Products", "#products"],
              ["Why Us", "#why"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-muted-foreground hover:text-foreground"
              >
                {label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2 w-full rounded-full sm:hidden">
              <a href="#contact" onClick={() => setOpen(false)}>Request Quote</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <motion.img
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        src={heroImg}
        alt="RJ Coir cocopeat factory in Tamil Nadu, India"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl text-primary-foreground"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur"
          >
            <Sprout className="h-3.5 w-3.5" /> Exporter · Tamil Nadu, India
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 font-display text-3xl font-bold leading-[1.1] sm:text-5xl md:text-6xl"
          >
            Premium Cocopeat <br /> Exporter from India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-5 max-w-xl text-base text-white/85 sm:text-lg"
          >
            High-quality cocopeat products for agriculture and horticulture —
            crafted with care, shipped on time, trusted by growers worldwide.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-3 font-display text-sm italic text-white/70"
          >
            “Premium Cocopeat Solutions for Global Agriculture.”
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">
                Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white hover:text-foreground"
            >
              <a href="#products">View Products</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            About RJ Coir
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Rooted in Tamil Nadu. <br /> Trusted around the world.
          </h2>
          <p className="mt-5 text-muted-foreground">
            RJ Coir is a manufacturer and exporter of premium cocopeat products,
            sourced directly from coconut-growing regions of South India. From
            family-run greenhouses to large-scale commercial farms, growers in
            dozens of countries rely on our consistency, quality and on-time
            delivery.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Manufacturer & exporter of cocopeat products",
              "Based in Tamil Nadu, India",
              "Commitment to quality and timely delivery",
              "Custom specifications & private-label packaging",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { n: "20+", l: "Countries served" },
            { n: "7", l: "Product variants" },
            { n: "100%", l: "Export quality" },
            { n: "On-time", l: "Shipments" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border bg-card p-6 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="font-display text-3xl font-bold text-primary">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ p, i }: { p: any; i: number }) {
  const hasVariants = Array.isArray(p.variants);
  const [variantIndex, setVariantIndex] = useState(0);
  const active = hasVariants ? p.variants[variantIndex] : p;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          key={active.img}
          src={active.img}
          alt={hasVariants ? `${p.name} - ${active.label}` : p.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{p.name}</h3>
          {hasVariants && (
            <select
              value={variantIndex}
              onChange={(e) => setVariantIndex(Number(e.target.value))}
              className="cursor-pointer rounded-full border bg-background px-3 py-1 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {p.variants.map((v: any, idx: number) => (
                <option key={v.label} value={idx}>
                  {v.label}
                </option>
              ))}
            </select>
          )}
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground">{active.desc}</p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Learn More <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

function Products() {
  return (
    <section id="products" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Products
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            A complete coir product range
          </h2>
          <p className="mt-4 text-muted-foreground">
            Available in custom EC levels, particle sizes and packaging to match
            your crop and container needs.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Leaf, t: "Premium raw materials", d: "Hand-picked coconut husks from South Indian coastal farms." },
    { icon: Package, t: "Custom packaging", d: "Private-label, OEM bundles and container-optimized formats." },
    { icon: Globe2, t: "Export-quality products", d: "Tested for EC, pH, moisture and compression consistency." },
    { icon: BadgeCheck, t: "Competitive pricing", d: "Direct-from-factory rates with transparent FOB quotes." },
    { icon: Truck, t: "On-time shipments", d: "Reliable logistics from Tuticorin & Cochin ports." },
    { icon: Shield, t: "Quality you can trust", d: "Batch-wise QC reports with every export consignment." },
  ];
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Why Choose RJ Coir
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Built for serious growers and importers
        </h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, t, d }, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="rounded-2xl border bg-card p-6"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <span
              className="grid h-11 w-11 place-items-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{t}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-secondary text-secondary-foreground py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Request a quote or sample
          </h2>
          <p className="mt-4 max-w-md text-secondary-foreground/80">
            Tell us about your crop, container volume and destination port. We
            usually respond within one business day.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <ContactRow icon={Phone} label="Mobile" value={PHONE_DISPLAY} href={`tel:${WHATSAPP}`} />
            <ContactRow
  icon={FaWhatsapp}
  label="WhatsApp"
  value={PHONE_DISPLAY}
  href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
/>
            <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactRow icon={MapPin} label="Factory" value={ADDRESS} />
          </ul>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-white/10">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <li><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:text-accent">{inner}</a></li>
  ) : (
    <li>{inner}</li>
  );
}

function InquiryForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const country = String(fd.get("country") || "").trim();
    const product = String(fd.get("product") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    if (name.length > 100 || email.length > 255 || message.length > 1000) {
      toast.error("One of the fields is too long.");
      return;
    }

    setLoading(true);
    const body =
      `Inquiry from RJ Coir website%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Company: ${encodeURIComponent(company)}%0A` +
      `Country: ${encodeURIComponent(country)}%0A` +
      `Product: ${encodeURIComponent(product)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A%0A` +
      `Message:%0A${encodeURIComponent(message)}`;
    const url = `https://wa.me/${WHATSAPP.replace("+", "")}?text=${body}`;
    window.open(url, "_blank", "noopener");
    toast.success("Opening WhatsApp to send your inquiry…");
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/10 bg-background p-6 text-foreground sm:p-8"
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Full name" required maxLength={100} />
        <Field name="email" label="Email" type="email" required maxLength={255} />
        <Field name="company" label="Company" maxLength={120} />
        <Field name="country" label="Country" maxLength={80} />
       <div className="sm:col-span-2 grid gap-2">
  <Label htmlFor="product">Product of Interest</Label>

  <select
    id="product"
    name="product"
    className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
  >
    <option value="">Select a Product</option>
    <option value="5 kg Cocopeat Block - Standard">5 kg Cocopeat Block - Standard</option>
    <option value="5 kg Cocopeat Block - Low EC">5 kg Cocopeat Block - Low EC</option>
    <option value="5 kg Cocopeat Block - High EC">5 kg Cocopeat Block - High EC</option>
    <option value="Coco Chips">Coco Chips</option>
    <option value="Coco Fiber">Coco Fiber</option>
  </select>
</div>
        <div className="sm:col-span-2 grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required maxLength={1000} rows={5}
            placeholder="Quantity, destination port, packaging preferences…" />
        </div>
      </div>
      <Button type="submit" disabled={loading} size="lg" className="mt-6 w-full rounded-full">
        {loading ? "Sending…" : "Send inquiry"}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We respond within 1 business day. Your details are not shared.
      </p>
    </form>
  );
}

function Field({
  name, label, type = "text", required, maxLength, placeholder,
}: {
  name: string; label: string; type?: string; required?: boolean;
  maxLength?: number; placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}{required && <span className="text-destructive"> *</span>}</Label>
      <Input id={name} name={name} type={type} required={required} maxLength={maxLength} placeholder={placeholder} />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="RJ Coir Logo"
    className="h-10 w-auto"
  />
</div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} RJ Coir · Tamil Nadu, India · All rights reserved.
        </p>
      </div>
    </footer>
  );
}