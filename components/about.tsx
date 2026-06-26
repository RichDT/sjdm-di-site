import Link from "next/link"

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-6">
              Championing diversity in judgment and decision making research
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Diversity and Inclusion Committee was established to ensure that SJDM 
                reflects and serves the full breadth of researchers in our field. We work 
                to identify and address barriers to participation, create supportive 
                programming, and foster a culture of belonging.
              </p>
              <p>
                Our committee members volunteer their time and expertise to advance these
                goals, working collaboratively with SJDM leadership, conference organizers,
                and the broader membership to create lasting, positive change.
              </p>
            </div>
            <Link
              href="/history"
              className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Read the history of the committee
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
          <div className="bg-secondary rounded-2xl p-8 lg:p-12">
            <div className="space-y-8">
              <div>
                <p className="text-4xl font-serif font-medium text-accent">2020</p>
                <p className="text-sm text-muted-foreground mt-1">Committee established</p>
              </div>
              <div className="border-t border-border pt-8">
                <p className="text-4xl font-serif font-medium text-accent">8</p>
                <p className="text-sm text-muted-foreground mt-1">Active subcommittees</p>
              </div>
              <div className="border-t border-border pt-8">
                <p className="text-4xl font-serif font-medium text-accent">12</p>
                <p className="text-sm text-muted-foreground mt-1">Committee members in 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
