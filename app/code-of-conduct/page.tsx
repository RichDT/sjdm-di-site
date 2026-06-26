import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Code of Conduct — SJDM Diversity & Inclusion",
  description: "The Society for Judgment and Decision Making's Code of Conduct, maintained by the D&I Committee.",
}

export default function CodeOfConductPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Code of Conduct
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-4">
              SJDM Code of Conduct
            </h1>
            <p className="text-sm text-muted-foreground">
              Maintained by the{" "}
              <a href="/#initiatives" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Code of Conduct Subcommittee
              </a>{" "}
              of the SJDM Diversity &amp; Inclusion Committee.
            </p>
          </div>

          <div className="prose-like space-y-8 text-foreground/90 leading-relaxed">

            <p>
              The Society for Judgment and Decision Making (SJDM) is committed to diversity, equity, the
              professional exchange of ideas, and respectful treatment of all members. SJDM is committed to
              providing a productive, safe, and discrimination- and harassment-free environment for all
              attendees, including but not limited to discrimination or harassment on the basis of gender,
              gender identity, gender expression, race, ethnicity, national origin, religion, citizenship
              status, age, sexual orientation, disability, or their intersection. This Code of Conduct sets
              forth our commitment to providing a harassment-free and inclusive environment at
              SJDM-sponsored events (including all scientific meetings) as well as for all individuals
              engaged in SJDM-related business.
            </p>

            <section>
              <h2 className="font-serif text-xl font-medium mb-4">Expected Behavior</h2>
              <p className="mb-3">All members of SJDM are expected to:</p>
              <ul className="space-y-2 pl-6">
                {[
                  "Engage in professional and constructive communication in person and online",
                  "Handle dissent and disagreement with courtesy and civility, remaining open to alternative points of view",
                  "Be proactive to help mitigate or avoid harassment or harm to other SJDM members, including but not limited to reporting such behavior or alerting security personnel if someone may be in imminent danger",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium mb-4">Prohibited Behavior</h2>
              <p className="mb-3">
                SJDM does not tolerate discrimination or harassment in any form. Members are prohibited from:
              </p>
              <ul className="space-y-2 pl-6">
                {[
                  "Intimidating, harassing, lewd, demeaning, bullying, or threatening speech or actions",
                  "Persistent and unwelcome solicitation of emotional or physical intimacy, including but not limited to that which is accompanied by real or implied threat of personal harm",
                  "Physical assault, including unwelcome touching or groping",
                  "Retaliation against an individual for reporting harassment or prohibited conduct",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium mb-4">Reporting of Prohibited Behavior</h2>
              <p className="mb-4">
                SJDM encourages reporting of all perceived incidents of harassment, discrimination,
                retaliation, or other prohibited behaviors taking place in conjunction with SJDM programs
                or activities. Individuals who believe they have been the victim of or witnessed such
                conduct are urged to fill out the following form:
              </p>
              <a
                href="https://chicagobooth.az1.qualtrics.com/jfe/form/SV_9mfIZ8Cq5t08KSa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Submit a Report
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Note that reports can be made anonymously. If there is immediate danger, individuals
                should call <strong>911</strong> to contact local emergency services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium mb-4">Consequences of Prohibited Behavior</h2>
              <p className="mb-4">
                Violation of this Code of Conduct is considered by SJDM to be a serious form of
                professional misconduct. The consequences for violations will be determined by factors
                including the immediacy of the threat to attendees, the severity and frequency of the
                violation, whether the individual has been found to have past violations, and the status
                of the individual (with those in position of authority and leadership held to the highest
                standards of behavior).
              </p>
              <p>
                Agreement to this Code of Conduct constitutes acknowledgement that (1) the possible
                disciplinary actions for its violation include but are not limited to a verbal warning,
                removal from an event without refund, restriction on attending future events, removal from
                membership, and forfeiture of previous awards or honors, and (2) SJDM reserves the right,
                in consultation with the complainant, to take other measures SJDM deems appropriate with
                respect to the conference and/or its journals (e.g., reporting to the Department Chair,
                Dean, Title IX coordinator at the institution of the individual who has engaged in the
                alleged misconduct).
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to the D&amp;I Committee home
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
