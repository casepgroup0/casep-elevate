import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  CTASection,
  PageHero,
  ProcessTimeline,
  ServicesGrid,
  TechnologyStrip,
} from "@/components/site/blocks";

const title = "Services — Software, Cloud & Automation | CASEP GROUP";
const description =
  "Software development, website development, cloud solutions, business process automation, digital transformation, and technology consulting from CASEP GROUP.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology Solutions Designed for Real-World Impact."
        description="Six service areas covering everything from the first technical assessment to long-term support of live systems."
      >
        <Button asChild variant="brand" size="xl">
          <Link to="/contact">Start a Project</Link>
        </Button>
        <Button asChild variant="onDark" size="xl">
          <Link to="/solutions">Explore Our Solutions</Link>
        </Button>
      </PageHero>
      <ServicesGrid />
      <ProcessTimeline />
      <TechnologyStrip />
      <CTASection />
    </>
  );
}
