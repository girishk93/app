import { ArrowRight } from "lucide-react";

const projects = [
  {
    slug: "n8n-automation",
    name: "n8n Workflow Automation",
    category: "Workflow Automation",
    description: "Built production workflow automations integrating webhooks, AI agents, and messaging APIs — turning manual processes into self-running systems.",
    tools: ["n8n", "Webhooks", "APIs"],
    result: "Turned manual processes into self-running systems",
  },
  {
    slug: "whatsapp-ai",
    name: "WhatsApp AI Agent",
    category: "Conversational AI",
    description: "Developed an AI-powered conversational agent on WhatsApp using n8n, Claude AI, and Evolution API — handling real conversations autonomously.",
    tools: ["n8n", "Claude AI", "Evolution API"],
    result: "Autonomous real-time conversation handling",
  },
  {
    slug: "openclaw-ai",
    name: "OpenClaw AI Platform",
    category: "AI Infrastructure",
    description: "Deployed and configured AI agent infrastructure with memory systems, multi-model routing, and cloud-based hosting for production use.",
    tools: ["Cloud Hosting", "Multi-model AI", "Memory Systems"],
    result: "Production-ready AI agent infrastructure",
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 max-w-7xl">
      <div className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground mb-2">Beyond Strategy — What I Build</p>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          I don't just analyze problems on slides — I build working systems. Here's what I've been shipping with n8n, AI agents, and cloud infrastructure.
        </p>
        <div className="h-1 w-20 bg-accent rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.slug} className="flex flex-col p-8 rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.15)] group">
            <div className="mb-6 flex-grow">
               <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 block">
                 {project.category}
               </span>
               <h3 className="text-2xl font-medium mb-3 group-hover:text-accent transition-colors">
                 {project.name}
               </h3>
               <p className="text-muted-foreground mb-6 leading-relaxed">
                 {project.description}
               </p>
               
               <div className="mb-6">
                 <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Tech Stack</p>
                 <div className="flex flex-wrap gap-2">
                   {project.tools.map(tool => (
                     <span key={tool} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                       {tool}
                     </span>
                   ))}
                 </div>
               </div>

               <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                 <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Impact</p>
                 <p className="text-sm font-medium text-foreground">{project.result}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
