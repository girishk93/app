import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-6 lg:px-12 flex flex-col justify-center min-h-[calc(100vh-140px)]">
      <div className="max-w-3xl">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 mt-12 text-foreground leading-[1.1] flex flex-col items-start">
          <span>Turning complexity</span>
          <span className="text-3xl sm:text-4xl md:text-5xl text-muted-foreground my-2 ml-[15%] sm:ml-[20%]">into</span>
          <span>
            <span className="text-gradient">clarity</span>
            <span className="font-sans font-normal text-muted-foreground mx-3">&</span>
            <span className="text-gradient">ACTION</span>
          </span>
        </h1>

        <div className="mt-8 mb-12 border-l-2 border-accent/50 pl-6 py-1">
          <p className="font-medium text-lg uppercase tracking-widest text-accent mb-3">
            Girish Kumar
          </p>
          <p className="text-xl md:text-2xl text-foreground font-medium mb-3">
            AI Automation Builder for Business Operations.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I build custom, scalable systems and AI-driven automations that eliminate
            bottlenecks and dramatically improve process efficiency, allowing teams to focus
            on high-leverage growth.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors duration-300 group"
          >
            Let's Talk
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full border border-border hover:border-accent/50 hover:bg-accent/5 transition-colors duration-300"
          >
            Explore Projects
          </Link>
        </div>
      </div>
      
      {/* Featured Projects Highlight */}
      <div className="mt-32 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl font-medium">Featured Case Studies</h2>
          <Link href="/case-studies" className="text-sm font-medium text-accent hover:underline decoration-accent/50 underline-offset-4">
            View all case studies
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
           <Link href="/case-studies/cost-crisis-transformation" className="group block p-8 rounded-2xl border border-border/50 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.15)]">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4 block">Financial Services</span>
              <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">Turning a $500M Cost Crisis into a Customer-First Transformation</h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">Strategic restructuring framework focusing on long-term value creation and operational efficiency.</p>
              <span className="text-sm font-medium flex items-center group-hover:text-accent transition-colors">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </span>
           </Link>
           <Link href="/case-studies/digital-transformation-cpg" className="group block p-8 rounded-2xl border border-border/50 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.15)]">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4 block">CPG Industry</span>
              <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">When Nobody Trusts the Numbers: Fixing a €10M Data Problem</h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">Executed a comprehensive data strategy and digital transformation under a BCG Platinion–Style Engagement.</p>
              <span className="text-sm font-medium flex items-center group-hover:text-accent transition-colors">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </span>
           </Link>
        </div>
      </div>
    </div>
  );
}
