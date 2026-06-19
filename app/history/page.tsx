import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "History — SJDM Diversity & Inclusion Committee",
  description: "The founding story of the SJDM Diversity & Inclusion Committee, established in 2020.",
}

export default function HistoryPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Our History
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-4">
              How the Committee Began
            </h1>
            <p className="text-sm text-muted-foreground">
              The SJDM Diversity &amp; Inclusion Committee was established in 2020 as a standing
              committee of the Society for Judgment and Decision Making.
            </p>
          </div>

          <div className="space-y-10 text-foreground/90 leading-relaxed">

            <section>
              <h2 className="font-serif text-xl font-medium mb-4">The Founding Moment</h2>
              <p className="mb-4">
                Shortly after taking office as SJDM President in November 2019, Katherine L. Milkman
                convened a Diversity and Inclusion Committee to begin addressing a long-standing need
                within the Society. The committee was tasked with reviewing best practices used by
                other academic societies and developing concrete recommendations to strengthen
                diversity and inclusion in SJDM.
              </p>
              <p className="mb-4">
                The inaugural committee — chaired by Crystal Hall and including Edward Chang,
                Nathan Cheek, Jennifer Lerner, Suzanne Shu, and Todd Rogers — produced a
                thoughtful report with clear recommendations, nearly all of which were adopted by
                the SJDM Executive Board and announced in June 2020.
              </p>
              <p>
                In her announcement, President Milkman wrote:
              </p>
              <blockquote className="my-6 pl-5 border-l-2 border-primary/40 text-muted-foreground italic">
                "As you know, the Society for Judgment and Decision Making is and always has been
                strikingly homogenous, and not just on the dimension of race. Many of you noted at
                our 2019 annual meeting that this is problematic for a multitude of reasons&hellip;
                we will have a standing Committee on Diversity and Inclusion to continue making
                recommendations for years to come."
                <footer className="mt-2 not-italic text-sm text-muted-foreground/70">
                  — Katherine L. Milkman, SJDM President 2019–2020,{" "}
                  <a
                    href="https://sjdm.org/newsletters/20-jun.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    SJDM Newsletter, Vol. 39 No. 2, June 2020
                  </a>
                </footer>
              </blockquote>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium mb-4">The Founding Policies</h2>
              <p className="mb-4">
                The following initiatives were adopted by the Executive Board and announced alongside
                the committee&rsquo;s formal establishment in June 2020:
              </p>
              <ul className="space-y-3 pl-6">
                {[
                  "Creation of a standing Diversity and Inclusion Committee, with members appointed by the president for two-year terms.",
                  "A biennial survey to assess the diversity and needs of SJDM members.",
                  "Adoption of a Code of Conduct regarding harassment and discrimination.",
                  "An Accessibility Chair role for the annual conference, appointed from within the committee.",
                  "A travel scholarship program for students from underrepresented backgrounds attending the annual conference.",
                  "Co-branding and co-organizing a networking event at the annual conference for all underrepresented groups.",
                  "Outreach to institutions primarily serving underrepresented people of color to diversify the pipeline of SJDM scholars.",
                  "A mentor matching program to connect underrepresented junior and senior scholars in SJDM.",
                  "Live streaming of select SJDM conference sessions to expand remote participation.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium mb-4">The Inaugural Committee</h2>
              <p className="mb-4">
                The 2019–2020 founding committee members were:
              </p>
              <ul className="space-y-2 pl-6">
                {[
                  { name: "Crystal Hall", note: "Chair" },
                  { name: "Edward Chang" },
                  { name: "Nathan Cheek" },
                  { name: "Jennifer Lerner" },
                  { name: "Suzanne Shu", note: "Executive Board representative" },
                  { name: "Todd Rogers" },
                ].map(({ name, note }) => (
                  <li key={name} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>
                      {name}
                      {note && <span className="text-muted-foreground text-sm ml-1.5">({note})</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pt-2">
              <h2 className="font-serif text-xl font-medium mb-4">Since 2020</h2>
              <p>
                The committee has grown into a standing body with eight active subcommittees, working
                year-round on accessibility, community connection, demographics tracking, graduate
                student outreach, mentor matching, outreach to scholars of color, travel scholarships,
                and the Code of Conduct. Learn more about the committee&rsquo;s current work on the{" "}
                <a href="/#initiatives" className="underline underline-offset-2 hover:text-foreground transition-colors">
                  Our Work
                </a>{" "}
                section of the home page, or meet the{" "}
                <a href="/#members" className="underline underline-offset-2 hover:text-foreground transition-colors">
                  current committee members
                </a>.
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to the D&amp;I Committee home
            </a>
            <a
              href="https://sjdm.org/newsletters/20-jun.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
            >
              Read the full June 2020 SJDM Newsletter →
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
