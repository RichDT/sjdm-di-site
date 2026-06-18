import { Mail, ExternalLink } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Get Involved
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-6">
          Connect with the Committee
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          Have questions, ideas, or want to get involved? We welcome input from all SJDM 
          members. Reach out to learn more about our initiatives or to share your thoughts.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:diversity@sjdm.org"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </a>
          <a
            href="https://sjdm.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-full font-medium text-sm hover:bg-muted transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Visit SJDM.org
          </a>
        </div>
      </div>
    </section>
  )
}
