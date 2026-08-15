import { createFileRoute } from "@tanstack/react-router";
import { CTASection, InsightsGrid, PageHero } from "@/components/site/blocks";

const title = "Insights — Technology, Cloud & Automation | CASEP GROUP";
const description =
  "Perspectives from CASEP GROUP on digital transformation, business automation, cloud technology, education technology, and software development.";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical Perspectives on Technology and Operations."
        description="Article outlines covering the questions organizations bring to us most often. Published pieces will replace these drafts."
      />
      <InsightsGrid />
      <CTASection />
    </>
  );
}
