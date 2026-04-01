import { LinkedInIcon, YouTubeIcon, InstagramIcon, MailIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  return (
    <footer className="mt-24 py-12 border-t border-border/50 relative overflow-hidden text-center md:text-left">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif text-xl font-medium mb-1">Girish Kumar</p>
          <p className="text-sm text-muted-foreground">Strategy · Automation · Impact</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:girish.k2713@gmail.com"
            aria-label="Email"
            className="w-10 h-10 border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            <MailIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/girish-kumar137"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:shadow-[0_0_15px_-3px_rgba(10,102,194,0.4)] transition-all duration-300"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/girishkumar.18?igsh=MXF6eGxrZWE2OGRibA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:shadow-[0_0_15px_-3px_rgba(228,64,95,0.4)] transition-all duration-300"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCbvGoq2CQMPkPJ9bGWRk1bg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-[#FF0000] hover:border-[#FF0000]/50 hover:shadow-[0_0_15px_-3px_rgba(255,0,0,0.4)] transition-all duration-300"
          >
            <YouTubeIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="mt-8 text-xs text-muted-foreground/60 text-center">
        © {new Date().getFullYear()} Girish Kumar. All rights reserved.
      </div>
    </footer>
  );
}
