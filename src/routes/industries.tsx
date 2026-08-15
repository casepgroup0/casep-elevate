import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  CTASection,
  CaseStudiesGrid,
  IndustriesGrid,
  PageHero,
} from "@/components/site/blocks";

const title = "Industries We Serve — CASEP GROUP";
const description =
  "CASEP GROUP builds technology for education, SMEs, corporate organizations, financial services, NGOs, professional services, startups, and institutions.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology for Different Industries."
        description="Sector realities shape system design. We build around the processes, regulations, and constraints of your industry."
      >
        <Button asChild variant="brand" size="xl">
          <Link to="/contact">Talk to CASEP GROUP</Link>
        </Button>
      </PageHero>
      <IndustriesGrid tone="default" />
      <CaseStudiesGrid />
      <CTASection />
    </>
  );
}
