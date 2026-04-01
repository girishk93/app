import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// For demonstration, simulating a fetch function
const getCaseStudy = (slug: string) => {
  const data: Record<string, any> = {
    "cost-crisis-transformation": {
      title: "Turning a $500M Cost Crisis into a Customer-First Transformation",
      industry: "Financial Services / Strategy",
      problem: "A major enterprise was facing a $500M cost crisis due to bloated operations, redundant processes, and a disconnect between the customer experience and the back-office.",
      solution: "Implemented a strategic restructuring framework that focused on long-term value creation rather than short-term cost cutting. Aligned front-line customer needs with back-end automation.",
      process: [
        "Conducted a top-down audit of operational expenditures to identify waste.",
        "Mapped the end-to-end customer journey to isolate friction points.",
        "Designed a new operational model leveraging automation to reduce manual overhead.",
        "Created a transition roadmap prioritizing high-impact, low-effort changes."
      ],
      results: "Identified $120M in immediate savings while improving customer satisfaction scores by 15%. Structured the remaining $380M transformation over a 3-year phased rollout.",
      tools: ["Operational Audit", "Journey Mapping", "Financial Modeling"],
    },
    "digital-transformation-cpg": {
       title: "Data Strategy & Digital Transformation",
       industry: "Consumer Packaged Goods · BCG Platinion–Style Engagement",
       problem: "The client faced a €10M data problem where nobody trusted the numbers. Siloed systems and manual reporting led to conflicting KPIs and strategic paralysis.",
       solution: "Executed a comprehensive data strategy and digital transformation, establishing a single source of truth and revitalizing trust in the organization's metrics.",
       process: [
         "Performed a root-cause analysis on data discrepancies across departments.",
         "Established a unified data governance framework and taxonomy.",
         "Architected a new data pipeline to automate reporting and eliminate manual Excel tracking.",
         "Trained key stakeholders on the new dashboards to ensure adoption."
       ],
       results: "Resolved the €10M discrepancy, enabling confident executive decision-making. Reduced weekly reporting time by 40 hours across the management team.",
       tools: ["Data Governance", "Process Engineering", "Change Management"],
    }
  };
  return data[slug] || null;
};

// Next.js 15 page props type
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudy({ params }: PageProps) {
  const resolvedParams = await params;
  const study = getCaseStudy(resolvedParams.slug);

  if (!study) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
         <h1 className="text-3xl font-medium mb-4">Case Study Not Found</h1>
         <Link href="/case-studies" className="text-accent underline">Go back to Case Studies</Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-6 lg:px-12 py-16 md:py-24 max-w-4xl">
      <Link href="/case-studies" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12 group">
        <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Case Studies
      </Link>

      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-wider text-accent mb-4 block">
          {study.industry}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
          {study.title}
        </h1>
        
        <div className="flex flex-wrap gap-2 mt-8">
           {study.tools.map((tool: string) => (
             <span key={tool} className="text-xs font-medium px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border">
               {tool}
             </span>
           ))}
        </div>
      </div>

      <div className="space-y-16">
         <section>
            <h2 className="text-2xl font-medium mb-6 flex items-center">
              <span className="text-accent mr-3">01.</span> The Problem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {study.problem}
            </p>
         </section>

         <div className="w-full h-px bg-border/50" />

         <section>
            <h2 className="text-2xl font-medium mb-6 flex items-center">
              <span className="text-accent mr-3">02.</span> The Solution
            </h2>
            <p className="text-lg text-foreground font-medium leading-relaxed">
              {study.solution}
            </p>
         </section>

         <div className="w-full h-px bg-border/50" />

         <section>
            <h2 className="text-2xl font-medium mb-6 flex items-center">
              <span className="text-accent mr-3">03.</span> The Process
            </h2>
            <ul className="space-y-4">
              {study.process.map((step: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-medium mr-4 mt-1">{index + 1}</span>
                  <span className="text-muted-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
         </section>

         <div className="w-full h-px bg-border/50" />

         <section className="bg-accent/5 p-8 md:p-12 rounded-2xl border border-accent/20">
            <h2 className="text-2xl font-medium mb-4 text-foreground">
              Business Impact & Results
            </h2>
            <p className="text-xl md:text-2xl text-accent font-medium leading-relaxed">
              {study.results}
            </p>
         </section>
      </div>

      <div className="mt-24 text-center">
         <p className="text-lg text-muted-foreground mb-6">Need similar results for your business?</p>
         <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            Let's Discuss Your Project
          </Link>
      </div>
    </article>
  );
}
