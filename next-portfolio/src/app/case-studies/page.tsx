import Link from "next/link";
import { ArrowRight } from "lucide-react";

const studies = [
  {
    slug: "cost-crisis-transformation",
    title: "Turning a $500M Cost Crisis into a Customer-First Transformation",
    summary: "Strategic restructuring framework focusing on long-term value creation.",
  },
  {
    slug: "digital-transformation-cpg",
    title: "Data Strategy & Digital Transformation",
    summary: "When Nobody Trusts the Numbers: Fixing a €10M Data Problem (Consumer Packaged Goods · BCG Platinion–Style Engagement).",
  }
];

export default function CaseStudiesIndex() {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 max-w-4xl">
      <div className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Case Studies</h1>
        <p className="text-xl text-muted-foreground mb-4">Deep dives into strategy, problem-solving, and ROI.</p>
        <div className="h-1 w-20 bg-accent rounded-full" />
      </div>

      <div className="space-y-8">
        {studies.map((study) => (
          <Link 
            key={study.slug} 
            href={`/case-studies/${study.slug}`}
            className="group block p-8 rounded-2xl border border-border/50 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.15)]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-medium mb-2 group-hover:text-accent transition-colors">
                  {study.title}
                </h2>
                <p className="text-muted-foreground">
                  {study.summary}
                </p>
              </div>
              <div className="shrink-0 flex items-center text-sm font-medium text-accent">
                Read Study <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
