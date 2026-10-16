"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Flame,
  Beef,
  Pizza,
  Sandwich,
  Clock,
  MapPin,
  Phone,
  Star,
  ChevronRight,
} from "lucide-react";

/* ---------------- DATA (with online images) ---------------- */

const fastFood = [
  {
    name: "Smash Double Burger",
    desc: "Twin beef patties, molten cheddar, house sauce",
    price: "Rs. 850",
    tag: "Bestseller",
    icon: Beef,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
  {
    name: "Loaded Chicken Fries",
    desc: "Crispy fries, grilled chicken, jalapeño cheese",
    price: "Rs. 620",
    icon: Sandwich,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
  },
  {
    name: "Wood-Fired Pizza",
    desc: "Hand-tossed, 48-hr fermented dough, fresh mozzarella",
    price: "Rs. 1,250",
    tag: "Chef's Pick",
    icon: Pizza,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
  },
  {
    name: "Crispy Zinger Wrap",
    desc: "Spicy fillet, garlic mayo, crunchy slaw",
    price: "Rs. 580",
    icon: Sandwich,
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
  },
];

const bbq = [
  {
    name: "Signature Seekh Platter",
    desc: "6 skewers, mint chutney, naan & salad",
    price: "Rs. 1,450",
    tag: "Must Try",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
  },
  {
    name: "Malai Boti Tikka",
    desc: "Creamy marinated chicken, charcoal grilled",
    price: "Rs. 1,100",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
  },
  {
    name: "Beef Chapli Kebab",
    desc: "Peshawari style, served with roghni naan",
    price: "Rs. 950",
    icon: Beef,
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
  },
  {
    name: "Full BBQ Family Deal",
    desc: "Mixed grill for 4 — seekh, tikka, kebab, naan",
    price: "Rs. 3,900",
    tag: "Value Deal",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
];

/* ---------------- ICONS ---------------- */

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/* ---------------- LOGO ---------------- */

function Logo({ size = 44 }: { size?: number }) {
  return (
    <div
      className="relative rounded-full overflow-hidden shrink-0 ring-1 ring-white/10 bg-black"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="Tahzeeb Cafe Logo"
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority
      />
    </div>
  );
}

/* ---------------- ANIMATED BRAND NAME ---------------- */

function AnimatedBrandName() {
  const line1 = "TAHZEEB".split("");
  const line2 = "CAFE".split("");

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
        }}
        className="flex items-center justify-center"
      >
        {line1.map((letter, i) => (
          <motion.span
            key={`t-${i}`}
            variants={{
              hidden: { opacity: 0, y: 60, rotateX: -90 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { type: "spring", stiffness: 120, damping: 14 },
              },
            }}
            className="inline-block text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.9 } },
        }}
        className="flex items-center justify-center gap-3 sm:gap-5"
      >
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-white/60 origin-right"
        />
        {line2.map((letter, i) => (
          <motion.span
            key={`c-${i}`}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 120, damping: 14 },
              },
            }}
            className="inline-block text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.3em] text-white/90"
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-white/60 origin-left"
        />
      </motion.div>
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={42} />
          <span className="text-xl font-bold tracking-tight text-white">
            Tahzeeb<span className="text-neutral-500">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
          <a href="#menu" className="hover:text-white transition">
            Menu
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105"
        >
          Order Now <ChevronRight className="w-4 h-4" />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-4 h-0.5 bg-white" />
          </div>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-neutral-300"
        >
          <a href="#menu" onClick={() => setOpen(false)}>
            Menu
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 50%), radial-gradient(circle at 70% 70%, rgba(180,180,180,0.25), transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-neutral-300 text-xs font-medium tracking-wide mb-10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          NOW OPEN · DASKA
        </motion.div>

        <AnimatedBrandName />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-10 max-w-xl mx-auto text-neutral-400 text-base sm:text-lg leading-relaxed"
        >
          Daska&apos;s boldest BBQ & fast food experience. Charcoal-grilled,
          hand-crafted, served sizzling hot — every single time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="group flex items-center gap-2 bg-white hover:bg-neutral-200 text-black font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-white/10"
          >
            Explore Menu
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 text-white font-semibold transition-all backdrop-blur-sm"
          >
            Reserve a Table
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto text-neutral-500"
        >
          {[
            { n: "12K+", l: "Happy Customers" },
            { n: "4.9★", l: "Google Rating" },
            { n: "40+", l: "Menu Items" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl font-bold text-white">{s.n}</div>
              <div className="text-xs mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}

/* ---------------- MENU CARD ---------------- */

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  tag?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  image: string;
};

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900/80 to-black border border-white/10 hover:border-white/40 transition-all overflow-hidden"
    >
      {item.tag && (
        <div className="absolute top-4 right-4 z-30 text-[10px] font-bold tracking-wider uppercase bg-white text-black px-2.5 py-1 rounded-full shadow-lg shadow-white/20">
          {item.tag}
        </div>
      )}

      <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-800">
        {!imgError ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/10 via-neutral-800 to-neutral-900">
            <item.icon className="w-20 h-20 text-white/60" strokeWidth={1.2} />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />

        <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-black/70 backdrop-blur border border-white/20 flex items-center justify-center">
          <item.icon className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-white group-hover:text-neutral-300 transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
          {item.desc}
        </p>

        <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-lg font-bold text-white">{item.price}</span>
          <button className="text-xs font-semibold text-neutral-400 group-hover:text-white flex items-center gap-1 transition">
            Order <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- MENU SECTION ---------------- */

function MenuSection() {
  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 font-semibold">
            Our Menu
          </span>
          <h2 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-white">
            Crafted to{" "}
            <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
              Crave
            </span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-neutral-400">
            From sizzling charcoal BBQ to loaded fast food — every bite is an
            experience.
          </p>
        </motion.div>

        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center">
              <Pizza className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Fast Food
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fastFood.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              BBQ &amp; Grill
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bbq.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black to-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 font-semibold">
            Our Story
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Where tradition <br />
            meets the{" "}
            <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
              grill.
            </span>
          </h2>
          <p className="mt-6 text-neutral-400 leading-relaxed">
            Tahzeeb Cafe was born from a simple obsession — serving Daska the
            most authentic charcoal BBQ and the boldest fast food, without
            compromise. Every skewer is hand-marinated, every bun is freshly
            baked, and every plate leaves our kitchen sizzling.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { icon: Clock, t: "Open Daily", s: "12 PM — 2 AM" },
              { icon: Star, t: "Top Rated", s: "4.9/5 on Google" },
            ].map((f) => (
              <div key={f.t} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">{f.t}</div>
                  <div className="text-sm text-neutral-500">{f.s}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-3xl overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 via-black to-black" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(circle at 70% 70%, rgba(180,180,180,0.3), transparent 50%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Logo size={220} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur border border-white/10">
            <div className="text-xs uppercase tracking-widest text-neutral-400">
              Since 2024
            </div>
            <div className="text-white font-bold mt-1">
              Grilling Daska&apos;s favourites.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT (with exact Daska location) ---------------- */

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 font-semibold">
            Visit Us
          </span>
          <h2 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-white">
            Come Hungry.{" "}
            <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
              Leave Happy.
            </span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-neutral-400">
            Find us on Pasrur Road, Daska — open daily till 2 AM.
          </p>
        </motion.div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            {
              icon: MapPin,
              t: "Location",
              s: "Pasrur Rd, near Hascol Pump, Barkat Town, Daska",
            },
            { icon: Phone, t: "Call Us", s: "+92 300 1234567" },
            { icon: Clock, t: "Timings", s: "Daily · 12 PM to 2 AM" },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/40 transition-all text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-white/5 border border-white/15 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-white">{c.t}</div>
              <div className="text-sm text-neutral-400 mt-2">{c.s}</div>
            </motion.div>
          ))}
        </div>

        {/* Google Map — Tahzeeb Cafe Daska */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900"
        >
          <div className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between gap-3 bg-gradient-to-b from-black/85 to-transparent pointer-events-none">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-neutral-400">
                  Our Location
                </div>
                <div className="text-sm font-bold text-white truncate">
                  Tahzeeb Cafe · Daska, Punjab
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Tahzeeb+cafe,+Pasrur+Rd,+Pasrur+Bypass,+near+Hascol+pump,+Barkat+Town,+Daska"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto shrink-0 text-xs font-semibold bg-white text-black px-3 py-1.5 rounded-full hover:bg-neutral-200 transition flex items-center gap-1"
            >
              Open in Maps
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          <iframe
            title="Tahzeeb Cafe - Pasrur Rd, Daska"
            src="https://maps.google.com/maps?q=Tahzeeb+cafe,+Pasrur+Rd,+Pasrur+Bypass,+near+Hascol+pump,+Barkat+Town,+Daska&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </motion.div>

        {/* Address strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-5 p-4 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-3"
        >
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="text-sm">
            <div className="font-semibold text-white">
              Tahzeeb Cafe · Pasrur Rd, Daska
            </div>
            <div className="text-neutral-400 mt-1">
              Pasrur Bypass, near Hascol Pump, Barkat Town, Daska, Punjab,
              Pakistan
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="tel:+923001234567"
            className="group flex items-center gap-2 bg-white hover:bg-neutral-200 text-black font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-white/10"
          >
            <Phone className="w-5 h-5" />
            Order Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo size={36} />
            <span className="text-lg font-bold text-white">
              Tahzeeb<span className="text-neutral-500">.</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
          <p>© {year ?? ""} Tahzeeb Cafe · All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            <span className="text-neutral-600">Crafted by</span>
            <a
              href="https://techbuddies.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-semibold text-neutral-400 hover:text-white transition"
            >
              TechBuddies
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- PAGE ---------------- */

export default function Home() {
  return (
    <div className="bg-black text-white antialiased selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <MenuSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}