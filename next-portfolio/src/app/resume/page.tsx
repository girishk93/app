import Link from "next/link";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 max-w-4xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Resume</h1>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </div>
        
        <a 
          href="/resume.pdf" 
          download
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
        >
          <Download className="mr-2 w-4 h-4" /> Download PDF
        </a>
      </div>

      <div className="grid md:grid-cols-[1fr_250px] gap-12 flex-col-reverse md:flex-row">
         {/* Main Content */}
         <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-medium mb-8 text-foreground border-b border-border/50 pb-4">Experience</h2>
              
              <div className="space-y-12">
                <div className="relative pl-8 border-l border-border/50">
                   <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_hsl(190_90%_55%)]" />
                   <h3 className="text-xl font-medium text-foreground">Independent Automation Consultant</h3>
                   <p className="text-sm text-accent mb-4 mt-1">Freelance · 2023 - Present</p>
                   <ul className="space-y-3 text-muted-foreground list-disc list-outside ml-4">
                     <li>Designed and implemented custom n8n workflows connecting over 10 different SaaS applications for SMB clients.</li>
                     <li>Developed conversational WhatsApp bots used for customer service triage and HR recruitment phases.</li>
                     <li>Conducted system audits to identify high-leverage bottlenecks, resulting in an average time savings of 20 hours/week per client.</li>
                   </ul>
                </div>

                <div className="relative pl-8 border-l border-border/50">
                   <div className="absolute w-3 h-3 bg-muted rounded-full -left-[6.5px] top-1.5" />
                   <h3 className="text-xl font-medium text-foreground">Operations Manager</h3>
                   <p className="text-sm text-muted-foreground mb-4 mt-1">India · 2021 - 2023</p>
                   <ul className="space-y-3 text-muted-foreground list-disc list-outside ml-4">
                     <li>Oversaw hiring workflows and talent acquisition pipelines for over 15 distinct companies simultaneously.</li>
                     <li>Standardized internal communication protocols reducing email clutter by 40%.</li>
                     <li>Trained a team of 5 operations associates in database management and client onboarding.</li>
                   </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-8 text-foreground border-b border-border/50 pb-4">Education</h2>
              
              <div className="space-y-8">
                 <div>
                   <h3 className="text-xl font-medium text-foreground">Toulouse Business School</h3>
                   <p className="text-sm text-accent mb-2 mt-1">Master's in Management · France (Current)</p>
                   <p className="text-muted-foreground text-sm">Focusing on International Financial Management and strategic operations.</p>
                 </div>
                 <div>
                   <h3 className="text-xl font-medium text-foreground">Bengaluru City University</h3>
                   <p className="text-sm text-muted-foreground mb-2 mt-1">Bachelor's Degree · India</p>
                 </div>
              </div>
            </section>
         </div>

         {/* Sidebar */}
         <div className="space-y-12">
            <div>
               <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">Core Skills</h3>
               <div className="flex flex-wrap gap-2">
                 {["Process Optimization", "Workflow Automation", "Systems Thinking", "Project Management", "Data Governance", "Client Relations"].map(skill => (
                   <span key={skill} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md border border-border">{skill}</span>
                 ))}
               </div>
            </div>

            <div>
               <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">Tech & Tools</h3>
               <div className="flex flex-wrap gap-2">
                 {["n8n", "Make.com", "Zapier", "Python", "SQL", "OpenAI APIs", "Notion", "Figma"].map(tool => (
                   <span key={tool} className="px-3 py-1.5 bg-accent/5 text-foreground text-sm rounded-md border border-accent/20">{tool}</span>
                 ))}
               </div>
            </div>

            <div>
               <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">Languages</h3>
               <ul className="space-y-2 text-sm text-foreground">
                 <li className="flex justify-between"><span>English</span><span className="text-muted-foreground">Fluent</span></li>
                 <li className="flex justify-between"><span>Hindi</span><span className="text-muted-foreground">Fluent</span></li>
                 <li className="flex justify-between"><span>Kannada</span><span className="text-muted-foreground">Native</span></li>
                 <li className="flex justify-between"><span>Telugu</span><span className="text-muted-foreground">Native</span></li>
                 <li className="flex justify-between"><span>Tamil</span><span className="text-muted-foreground">Native</span></li>
                 <li className="flex justify-between"><span>French</span><span className="text-muted-foreground">Learning (A2)</span></li>
               </ul>
            </div>
         </div>
      </div>
    </div>
  );
}
