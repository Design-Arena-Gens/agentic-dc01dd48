import Link from "next/link";

const services = [
  {
    title: "Story-First Films",
    description:
      "Narrative-driven introduction films that blend cinematic visuals with your brand voice.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="h-6 w-6 fill-white"
      >
        <path d="M15.75 5.25H14.5V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1.25H8.25a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm-5.25-.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v1.25h-2.5Zm6 12.75a1.5 1.5 0 0 1-1.5 1.5h-7.5a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h7.5a1.5 1.5 0 0 1 1.5 1.5ZM10.75 8A.75.75 0 0 1 11.5 8.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 10.75 8Zm2.25 0A.75.75 0 0 1 13.75 8.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 13 8Z" />
      </svg>
    ),
  },
  {
    title: "On-Location Shoots",
    description:
      "Capture the soul of your workspace, team, and culture with adaptive, multi-camera production.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="h-6 w-6 fill-white"
      >
        <path d="M18.25 7.5h-.75V4A2.75 2.75 0 0 0 14.75 1.25h-5.5A2.75 2.75 0 0 0 6.5 4v3.5h-.75A3.75 3.75 0 0 0 2 11.25v6.5A3.25 3.25 0 0 0 5.25 21h13.5A3.25 3.25 0 0 0 22 17.75v-6.5A3.75 3.75 0 0 0 18.25 7.5ZM8 4a1.25 1.25 0 0 1 1.25-1.25h5.5A1.25 1.25 0 0 1 16 4v3.5H8Zm12 13.75a1.75 1.75 0 0 1-1.75 1.75H5.25A1.75 1.75 0 0 1 3.5 17.75v-6.5A2.25 2.25 0 0 1 5.75 9h12.5a2.25 2.25 0 0 1 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Launch Campaigns",
    description:
      "We deliver launch-ready assets, captions, and teaser cuts optimized for social media.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="h-6 w-6 fill-white"
      >
        <path d="M20.25 3h-16.5A1.75 1.75 0 0 0 2 4.75v5.5A1.75 1.75 0 0 0 3.75 12h16.5A1.75 1.75 0 0 0 22 10.25v-5.5A1.75 1.75 0 0 0 20.25 3ZM3.5 10.25v-5.5c0-.138.112-.25.25-.25h16.5c.138 0 .25.112.25.25v5.5c0 .138-.112.25-.25.25H3.75a.25.25 0 0 1-.25-.25Zm16.75 3.75h-5.25a.75.75 0 0 0 0 1.5h5.25c.138 0 .25.112.25.25v1.5a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-1.5c0-.138.112-.25.25-.25h8.5a.75.75 0 0 0 0-1.5h-8.5A1.75 1.75 0 0 0 2 17.25v1.5A1.75 1.75 0 0 0 3.75 20.5h16.5A1.75 1.75 0 0 0 22 18.75v-1.5A1.75 1.75 0 0 0 20.25 14Z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Priya Menon",
    role: "Founder, Radiant Labs",
    quote:
      "Amruthsai Studio crafted a launch film that finally captured how our team thinks. It drove 3x engagement in the first week.",
  },
  {
    name: "Ishaan Kapoor",
    role: "Creative Director, Bold & Co.",
    quote:
      "They pair cinematic depth with a startup pace. Every deliverable felt intentional and launch ready.",
  },
];

const stats = [
  { label: "Films Delivered", value: "120+" },
  { label: "Avg. Approval Cycle", value: "3 days" },
  { label: "Launch Uplift", value: "4.2× engagement" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Behance", href: "https://behance.net" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-neutral-900 text-zinc-50">
      <header className="border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold uppercase tracking-tight text-white">
              AS
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                Amruthsai Studio
              </p>
              <p className="text-xs text-white/50">
                Introduction Film & Motion Design
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
            <Link href="#showreel" className="transition hover:text-white">
              Showreel
            </Link>
            <Link href="#process" className="transition hover:text-white">
              Process
            </Link>
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Start a Project
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:py-24">
        <section className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Introducing
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              The definitive introduction video for founders, creators, and
              dreamers ready to be seen.
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Amruthsai Studio designs cinematic introduction films that feel
              handcrafted and purposeful. From script to sound design, we anchor
              every frame in the story you want the world to remember.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Book Your Discovery Call
              </Link>
              <Link
                href="#showreel"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Watch Showreel
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4"
                >
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            id="showreel"
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl"
          >
            <video
              className="aspect-[4/3] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="https://images.pexels.com/photos/1846353/pexels-photo-1846353.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            >
              <source
                src="https://videos.pexels.com/video-files/856384/856384-hd_1920_1080_30fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/60 via-transparent to-black/20" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              Live Showreel
            </div>
          </div>
        </section>

        <section
          id="services"
          className="grid gap-6 md:grid-cols-3 md:gap-8"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-white/70">{service.description}</p>
              <div className="mt-auto pt-4 text-xs uppercase tracking-[0.3em] text-white/40 group-hover:text-white/70">
                Included in every project
              </div>
            </div>
          ))}
        </section>

        <section
          id="process"
          className="grid gap-12 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-[1fr_1.2fr]"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Our Process
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Strategy, production, and delivery in one focused sprint.
            </h2>
            <p className="text-sm text-white/60">
              We operate on a three-week sprint that keeps momentum high and
              approvals painless. Each week unlocks a milestone that you can
              review asynchronously with annotated videos and motion boards.
            </p>
          </div>
          <ol className="grid gap-6 text-sm text-white/70">
            {[
              {
                title: "Week 01 · Narrative Lab",
                description:
                  "Brand immersion workshops, tone-of-voice design, storyboard drafts, and casting if needed.",
              },
              {
                title: "Week 02 · Production",
                description:
                  "On-location or studio shoot with aerial options, motion graphics capture, and on-set direction by Amruthsai.",
              },
              {
                title: "Week 03 · Launch Kits",
                description:
                  "Final edit, grade, sound mix, social cut-downs, graphic overlays, captions, and ready-to-upload master files.",
              },
            ].map((step, index) => (
              <li
                key={step.title}
                className="rounded-3xl border border-white/10 bg-black/40 p-6"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Step {index + 1}
                </span>
                <h3 className="pt-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="pt-2 text-sm text-white/60">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-6 md:grid-cols-2 md:gap-8">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="text-lg text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="pt-6 text-sm text-white/60">
                <p className="font-medium text-white">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </section>

        <section
          id="contact"
          className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/20 via-white/10 to-transparent p-10 md:grid-cols-[1.1fr_1fr]"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Book a Discovery Call
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Ready for your introduction film?
            </h2>
            <p className="text-sm text-white/70">
              Tell us about your launch timeline and the vibe you are chasing.
              We&apos;ll reply within 24 hours with a tailored concept outline
              and availability.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-white/20 px-5 py-2 transition hover:border-white hover:bg-white/10"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
          <form className="grid gap-4 text-sm text-black">
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Name
              </span>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl border border-white/10 bg-black/70 px-4 py-3 text-white placeholder:text-white/30 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              />
            </label>
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Email
              </span>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/10 bg-black/70 px-4 py-3 text-white placeholder:text-white/30 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              />
            </label>
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Project Vision
              </span>
              <textarea
                rows={4}
                placeholder="Share the emotion, audience, and timeline."
                className="w-full rounded-xl border border-white/10 bg-black/70 px-4 py-3 text-white placeholder:text-white/30 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              />
            </label>
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-black"
            >
              Send Introduction
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 text-sm text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Amruthsai Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#process" className="transition hover:text-white">
              Process
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
