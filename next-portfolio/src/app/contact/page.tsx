import { LinkedInIcon, YouTubeIcon, InstagramIcon, MailIcon, GithubIcon } from "@/components/icons/SocialIcons";
import { ArrowUpRight } from "lucide-react";

const links = [
  {
    name: "Email",
    value: "girish.k2713@gmail.com",
    href: "mailto:girish.k2713@gmail.com",
    icon: MailIcon,
    hoverClass: "group-hover:text-cyan-400 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/50"
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/girish-kumar137",
    href: "https://www.linkedin.com/in/girish-kumar137",
    icon: LinkedInIcon,
    hoverClass: "group-hover:text-[#0A66C2] group-hover:bg-[#0A66C2]/10 group-hover:border-[#0A66C2]/50"
  },
  {
    name: "GitHub",
    value: "github.com/girishk93",
    href: "https://github.com/girishk93",
    icon: GithubIcon,
    hoverClass: "group-hover:text-foreground group-hover:bg-foreground/5 group-hover:border-foreground/50",
  },
  {
    name: "Instagram",
    value: "@girishkumar.18",
    href: "https://www.instagram.com/girishkumar.18?igsh=MXF6eGxrZWE2OGRibA==",
    icon: InstagramIcon,
    hoverClass: "group-hover:text-[#E4405F] group-hover:bg-[#E4405F]/10 group-hover:border-[#E4405F]/50"
  },
  {
    name: "YouTube",
    value: "youtube.com/channel/...",
    href: "https://www.youtube.com/channel/UCbvGoq2CQMPkPJ9bGWRk1bg",
    icon: YouTubeIcon,
    hoverClass: "group-hover:text-[#FF0000] group-hover:bg-[#FF0000]/10 group-hover:border-[#FF0000]/50"
  }
];

export default function Contact() {
  return (
    <div className="container mx-auto px-6 lg:px-12 flex items-center min-h-[calc(100vh-140px)] max-w-4xl py-16">
      <div className="w-full">
         <div className="mb-16">
            <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6">Let's Talk</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-snug">
              I’m here for inquiries, collaborations & job opportunities! 💥
            </p>
         </div>

         <div className="grid md:grid-cols-2 gap-6">
            {links.map((link) => (
               <a 
                 key={link.name}
                 href={link.href}
                 target={link.href.startsWith("mailto") ? undefined : "_blank"}
                 rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                 className="flex items-center justify-between p-6 rounded-2xl border border-border bg-card transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
               >
                 <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl border border-border flex items-center justify-center transition-colors duration-300 text-muted-foreground ${link.hoverClass}`}>
                       <link.icon className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="font-medium text-foreground">{link.name}</p>
                       <p className="text-sm text-muted-foreground mt-0.5 truncate max-w-[150px] sm:max-w-[200px]">
                         {link.value}
                       </p>
                    </div>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <ArrowUpRight className="w-4 h-4" />
                 </div>
               </a>
            ))}
         </div>
      </div>
    </div>
  );
}
