import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Code2, Rocket, Workflow, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import {
  CTASection,
  CaseStudiesGrid,
  DifferentiatorBand,
  IndustriesGrid,
  InsightsGrid,
  ProcessTimeline,
  ServicesGrid,
  SolutionsGrid,
  StatsBand,
  TechnologyStrip,
  TestimonialsGrid,
  WhyGrid,
} from "@/components/site/blocks";
import aboutImage from "@/assets/about-collab.jpg";
import dashboardImage from "@/assets/school-dashboard.jpg";
import productBg from "@/assets/bg-workspace-2.jpg";
import heroVideoMp4 from "@/assets/hero-bg.mp4";
import heroVideoWebm from "@/assets/hero-bg.webm";
import heroPoster from "@/assets/hero-poster.jpg";
import { products } from "@/data/site";

const title = "CASEP GROUP — Transforming Organizations Through Technology";
const description =
  "CASEP GROUP is a Ghanaian technology company delivering software development, cloud solutions, business automation, and digital transformation for schools, businesses, and organizations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CASEP GROUP",
          description,
          url: "/",
          founder: { "@type": "Person", name: "Caleb Agyei Sey" },
          address: { "@type": "PostalAddress", addressCountry: "GH", addressLocality: "Accra" },
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
  component: Home,
});

const trustStrip = [
  { icon: Code2, label: "Software Development" },
  { icon: Cloud, label: "Cloud Solutions" },
  { icon: Workflow, label: "Business Automation" },
  { icon: Rocket, label: "Digital Transformation" },
];

function Home() {
  const product = products[0]!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-navy-foreground">
        {/* Looping background video. Hidden (in favor of the static poster
            image) when the user has requested reduced motion. */}
        <video
          className="absolute inset-0 hidden h-full w-full object-cover motion-safe:block"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          aria-hidden="true"
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideoMp4} type="video/mp4" />
        </video>
        <img
          src={heroPoster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
        />
        <div className="navy-video-overlay absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -left-32 top-24 z-[1] h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-pulse-glow"
          aria-hidden="true"
        />
        <div className="container-page relative z-10 py-20 lg:py-28">
          <Reveal className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">
              Transforming Organizations Through Technology.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 md:text-lg">
              CASEP GROUP helps schools, businesses, and organizations digitize operations, automate
              processes, and build scalable digital solutions that drive efficiency and growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="xl">
                <Link to="/contact">Let&apos;s Work Together</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/solutions">Explore Our Solutions</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-navy-foreground/60">
              Proudly Ghanaian. Built for a connected world.
            </p>
          </Reveal>
        </div>

        {/* Trust strip */}
        <div className="relative z-10 border-t border-navy-foreground/10 bg-navy-deep/40">
          <ul className="container-page grid gap-4 py-7 sm:grid-cols-2 lg:grid-cols-4">
            {trustStrip.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-cyan" aria-hidden="true" />
                <span className="text-sm font-medium text-navy-foreground/85">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About preview */}
      <Section decorated>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-primary">About CASEP GROUP</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Technology Built Around Your Goals.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              At CASEP GROUP, we believe technology should do more than look good — it should solve
              real problems, improve operations, and create measurable value.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We work with schools, businesses, and organizations to design and implement digital
              solutions that simplify processes, improve efficiency, and create a foundation for
              sustainable growth.
            </p>
            <Button asChild variant="softOutline" size="lg" className="mt-8">
              <Link to="/about">
                Learn More About CASEP GROUP
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={aboutImage}
              alt="A team reviewing a digital transformation plan together in a modern office"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </Section>

      <ServicesGrid tone="surface" />
      <SolutionsGrid />

      {/* Featured product */}
      <section
        className="bg-photo-navy relative overflow-hidden py-20 text-navy-foreground md:py-28"
        style={{ backgroundImage: `url(${productBg})` }}
      >
        <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex rounded-full bg-gradient-brand px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-primary-foreground">
              CASEP GROUP Product
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]">
              School Management, Reimagined.
            </h2>
            <p className="mt-3 text-lg font-medium text-cyan">
              A smarter way to manage modern schools.
            </p>
            <p className="mt-5 text-base leading-relaxed text-navy-foreground/75">
              CASEP GROUP is developing a comprehensive school management platform that brings
              academic administration, fees, communication, and reporting into one centralized
              system.
            </p>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-navy-foreground/80"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="xl">
                <Link to="/products">Explore School Management</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={dashboardImage}
              alt="School management dashboard showing student records, attendance, and fee collection charts"
              width={1600}
              height={1008}
              loading="lazy"
              className="w-full rounded-2xl border border-navy-foreground/15 shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <WhyGrid />
      <IndustriesGrid tone="default" />
      <ProcessTimeline />
      <DifferentiatorBand />
      <TechnologyStrip />
      <CaseStudiesGrid />
      <StatsBand />
      <TestimonialsGrid />
      <InsightsGrid tone="surface" />
      <CTASection />
    </>
  );
}
