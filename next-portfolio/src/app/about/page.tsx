import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 max-w-5xl">
      <div className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">About Me</h1>
        <div className="h-1 w-20 bg-accent rounded-full" />
      </div>

      <div className="grid md:grid-cols-[1fr_350px] gap-12 lg:gap-24 items-start">
        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
          <p className="text-2xl text-foreground font-medium mb-8 leading-snug">
            Hey, I’m Girish. I’m a student, a creator, and someone who just really loves figuring out how to make businesses run smoother.
          </p>
          
          <p className="mb-6 leading-relaxed">
            Right now, I’m doing my Master's in Management at Toulouse Business School. But before coming to France, I was actually managing an operations team back in India. We handled the hiring workflows for over 15 different companies. That experience really opened my eyes to how much time businesses waste on chaotic, repetitive tasks—and how much happier clients are when you step in and fix those bottlenecks.
          </p>

          <p className="mb-6 leading-relaxed">
            Lately, I’ve been taking that operational mindset and applying it to the digital world. I help businesses upgrade their online presence by building custom websites and setting up automations, like WhatsApp AI chatbots using n8n. My goal is to take complex tech and make it simple, accessible, and actually useful for everyday business owners.
          </p>

          <div className="my-10 p-6 border-l-2 border-accent bg-accent/5 rounded-r-xl">
            <p className="text-foreground font-medium text-lg italic mb-0">
              "I’m currently looking for a 6-12 month internship in operations or business automation. If you need help untangling a messy process, or just want to connect, feel free to reach out!"
            </p>
          </div>

          <p className="mb-6 leading-relaxed">
            Outside of all that, I'm usually studying International Financial Management, trying to learn French, or documenting my journey on my YouTube and Instagram channels. And if I'm not doing any of those, I'm probably at the gym.
          </p>
        </div>

        <div className="relative sticky top-32">
          {/* We assume profile-photo-new.jpg was copied over. If not, fallback to profile-photo.jpg */}
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-border shadow-2xl">
            <Image 
              src="/profile-photo-new.jpg"
              alt="Girish Kumar"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-border/50 bg-card text-center">
              <p className="text-2xl font-serif font-medium text-accent mb-1">15+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Clients Handled</p>
            </div>
            <div className="p-4 rounded-xl border border-border/50 bg-card text-center">
              <p className="text-2xl font-serif font-medium text-accent mb-1">MSc</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
