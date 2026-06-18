import React from "react"
import {
  Users,
  BookOpen,
  Shield,
  Accessibility,
  HeartHandshake,
  BarChart3,
  Globe,
  Plane,
  ExternalLink,
} from "lucide-react"

type Initiative = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  link?: { text: string; url: string }
  poc: { name: string; memberId: string }
}

const initiatives: Initiative[] = [
  {
    icon: Accessibility,
    title: "Accessibility",
    description:
      "Working to ensure SJDM events and resources reach all members. Current priorities include developing remote and hybrid participation models, mitigating visa and travel barriers, and establishing accessibility guidelines for conference spaces and presentations.",
    poc: { name: "Kartik Trivedi", memberId: "member-kartik-trivedi" },
  },
  {
    icon: Shield,
    title: "Code of Conduct",
    description:
      "Maintaining community guidelines to ensure SJDM events and spaces remain respectful and welcoming.",
    poc: { name: "Eva Buechel", memberId: "member-eva-buechel" },
  },
  {
    icon: HeartHandshake,
    title: "Community Connection",
    description:
      "Building connections beyond the annual conference through peer-to-peer matching, international–US networking opportunities, and year-round events such as panels and workshops on grad school, the job market, and industry careers.",
    poc: { name: "Radhika Santhanagopalan", memberId: "member-radhika-santhanagopalan" },
  },
  {
    icon: BarChart3,
    title: "Demographics Tracking",
    description:
      "Collecting and analyzing membership data to understand community composition and guide future initiatives, as well as designing a society-wide climate survey to capture sentiment and participation patterns.",
    link: { text: "View the completed demographics dashboard", url: "https://sjdm.org/dashboard/" },
    poc: { name: "Rochak Khandelwal", memberId: "member-rochak-khandelwal" },
  },
  {
    icon: Users,
    title: "Grad Student Outreach",
    description:
      "Creating programming for graduate students from underrepresented backgrounds, with a current focus on first-generation PhD students navigating academia and structural barriers.",
    poc: { name: "Ryan Gaffney", memberId: "member-ryan-gaffney" },
  },
  {
    icon: BookOpen,
    title: "Mentor Matching",
    description:
      "Each year the program pairs curious mentees with experienced mentors — including faculty and industry professionals — for 30–90 minute conversations on professional development and research. Participation is open to all SJDM members, with both in-person (conference) and virtual options available.",
    poc: { name: "Rich Truncellito", memberId: "member-rich-truncellito" },
  },
  {
    icon: Globe,
    title: "Outreach to Scholars of Color",
    description:
      "Supporting the inclusion and recognition of scholars of color through abstract review programs, outreach partnerships, and targeted recruitment. The subcommittee also explores collaborations such as the PhD Project to expand conference access.",
    poc: { name: "Hannah Perfecto", memberId: "member-hannah-perfecto" },
  },
  {
    icon: Plane,
    title: "Travel Scholarships",
    description:
      "Providing financial support to enable researchers from underrepresented groups to attend the annual SJDM conference.",
    poc: { name: "Crystal Reeck", memberId: "member-crystal-reeck" },
  },
]

export function Initiatives() {
  return (
    <section id="initiatives" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Building an inclusive research community
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The D&I Committee currently operates eight subcommittees, each focused on a distinct aspect of diversity and inclusion within SJDM. The cards below represent each subcommittee's current focus and point of contact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {initiatives.map((initiative) => (
            <div
              key={initiative.title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <initiative.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {initiative.description}
              </p>
              {initiative.link && (
                <a
                  href={initiative.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {initiative.link.text}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <div className="flex-1" />
              <p className="mt-4 pt-4 text-[11px] text-muted-foreground/70 border-t border-border">
                2026–2027 Point of Contact:{" "}
                <a
                  href={`#${initiative.poc.memberId}`}
                  className="hover:text-primary transition-colors"
                >
                  {initiative.poc.name}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
