import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, services, socialLinks } from "@/data/site";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Insights", to: "/insights" },
] as const;

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-navy-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <span className="text-lg font-extrabold tracking-tight">CASEP GROUP</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            {company.tagline}
          </p>
          <p className="mt-4 text-sm text-navy-foreground/60">
            Proudly Ghanaian. Built for a connected world.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/90">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-navy-foreground/70 transition-colors hover:text-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/90">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="text-sm text-navy-foreground/70 transition-colors hover:text-cyan"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/90">
            Connect
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
            <li>
              <Link to="/contact" className="transition-colors hover:text-cyan">
                Contact
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-cyan">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan" aria-hidden="true" />
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-cyan">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan" aria-hidden="true" />
              {company.location}
            </li>
          </ul>
          <ul className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-navy-foreground/20 text-navy-foreground/80 transition-colors hover:border-cyan hover:text-cyan"
                >
                  <SocialIcon name={social.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CASEP GROUP. All Rights Reserved.</p>
          <p>{company.tagline}</p>
          <p className="text-navy-foreground/40">Designed &amp; developed by CASEP GROUP</p>
        </div>
      </div>
    </footer>
  );
}
