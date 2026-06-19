import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Mentoring Resources — SJDM Diversity & Inclusion",
  description: "A guide to successful mentoring for SJDM Mentor Matching participants — for both mentors and mentees.",
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">{children}</p>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-2xl font-medium mb-4">{children}</h2>
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-serif text-lg font-medium mb-3 mt-8">{children}</h3>
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}

function AccentBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}

function ResourceLink({ href, children, external = true }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-start gap-2 group"
    >
      <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
      <span className="text-sm underline underline-offset-2 group-hover:text-primary transition-colors">{children}</span>
    </a>
  )
}

export default function MentoringResourcesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Hero */}
          <div className="mb-14">
            <SectionLabel>Mentor Matching</SectionLabel>
            <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Mentoring Resources
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              This guide is for participants in the SJDM Mentor Matching program, both mentors and mentees.
              It synthesizes guidance from across a range of research-backed resources to help you make the
              most of your mentoring relationship. Original sources and additional reading are linked at the bottom of this page.
            </p>
          </div>

          <div className="space-y-16 text-foreground/90 leading-relaxed">

            {/* ── What makes mentoring work ── */}
            <section>
              <SectionLabel>For Everyone</SectionLabel>
              <H2>What Makes Mentoring Work</H2>
              <p className="mb-4">
                The best mentoring relationships share a common structure, regardless of field or career
                stage. Research across academia, medicine, and business consistently identifies the same
                foundations: mutual respect, clear expectations, honest communication, and a genuine
                investment in the mentee's growth.
              </p>
              <p className="mb-4">
                According to Chopra and Saint (2017),
                the best mentorships "are more like the relationship between a parent and adult child than
                between a boss and employee. They're characterized by mutual respect, trust, shared values,
                and good communication, and they find their apotheosis in the mentee's transition to mentor."
              </p>
              <p className="mb-6">
                University mentoring handbooks from Emory, Michigan, and others identify several recurring
                elements of successful relationships:
              </p>
              <ul className="space-y-3 pl-2">
                <Bullet><strong>Align expectations early.</strong> Mismatched assumptions about what the relationship will involve are the most common source of friction. Both parties should be explicit about goals, time commitments, and what success looks like — ideally in the first meeting.</Bullet>
                <Bullet><strong>Establish a communication cadence.</strong> Decide up front how often you'll connect, what channel to use, and what constitutes an urgent matter. Reliability matters more than frequency.</Bullet>
                <Bullet><strong>Make accountability mutual.</strong> Mentors set the professional standard; mentees honor it. Both parties should come prepared, respect each other's time, and follow through on commitments.</Bullet>
                <Bullet><strong>Think beyond a single mentor.</strong> Few individuals can meet every mentoring need. Mentees benefit from a small network of mentors with complementary expertise: e.g., one for research feedback, another for career navigation, still another for emotional support or a sense of community.</Bullet>
                <Bullet><strong>Address problems early.</strong> Disagreements and misalignments are nearly inevitable. Smart mentors don't allow small friction to fester; smart mentees raise concerns rather than silently withdrawing.</Bullet>
              </ul>
            </section>

            {/* ── Areas of mentorship ── */}
            <section>
              <SectionLabel>Mapping the Relationship</SectionLabel>
              <H2>Areas Where Mentoring Can Help</H2>
              <p className="mb-4">
                Not every mentoring relationship addresses the same needs. The National Center for Faculty
                Development and Diversity identifies nine areas where mentoring support can be valuable.
                Before or during your first meeting, both parties should read this list and identify which
                areas feel most relevant to them.
              </p>
              <p className="mb-2 text-sm text-muted-foreground">
                <strong>Mentors:</strong> identify the areas where you can offer the strongest support.{" "}
                <strong>Mentees:</strong> identify where you most need support.
              </p>
              <div className="mt-6 space-y-5">
                {[
                  { title: "Professional Development", body: "Help with time management, conflict resolution, project administration, strategic decisions about service and the job market, and communication." },
                  { title: "Emotional Support", body: "Mentees are often navigating significant transitions (e.g., from graduate student to postdoc, from academia to industry). Having a mentor who can acknowledge the stress of those transitions matters." },
                  { title: "A Sense of Community", body: "Mentees may be seeking an intellectual, professional, or social community where they feel genuine belonging. A mentor can help facilitate those connections." },
                  { title: "Accountability", body: "The academic and research environment doesn't always provide natural accountability for research, writing, and communication. A mentor can provide structure and check-ins that keep mentees on track." },
                  { title: "Institutional Sponsorship", body: "Mentees may need advocates within their home institutions (e.g., faculty or senior professionals willing to speak for their interests in contexts where the mentee isn't present)." },
                  { title: "Access to Networks", body: "Research doesn't happen in isolation. Mentors can help mentees connect with collaborators, navigate funding opportunities, and access opportunity structures that aren't always visible from the outside." },
                  { title: "Project-Specific Feedback", body: "Substantive feedback on proposals, methods, manuscript drafts, and new research ideas from someone with relevant expertise." },
                  { title: "Role Models", body: "Mentees benefit from seeing how people who have navigated similar paths made their decisions and built their careers." },
                  { title: "Safe Space", body: "At any career stage, having a space to process experiences honestly — without being invalidated or judged — has real value." },
                ].map(({ title, body }) => (
                  <div key={title} className="pl-4 border-l-2 border-border">
                    <p className="font-medium text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Discussion guide ── */}
            <section>
              <SectionLabel>Starting the Conversation</SectionLabel>
              <H2>Discussion Questions</H2>
              <p className="mb-6">
                The following questions are drawn from the SJDM Mentor Matching Program discussion guide.
                They're meant as a starting point for a self-directed dialogue; use them as prompts,
                not a script. You don't need to cover them all.
              </p>

              <H3>Getting Acquainted</H3>
              <ul className="space-y-2 pl-2">
                {[
                  "Why did you sign up to participate in the Mentor Matching program?",
                  "What is one piece of advice you received that has really stuck with you? Who gave it to you, and why do you think it's stayed?",
                  "How do you know when you need help? What steps do you take once you recognize the need?",
                ].map(q => <Bullet key={q}>{q}</Bullet>)}
              </ul>

              <H3>Learning about Each Other's Research</H3>
              <ul className="space-y-2 pl-2">
                {[
                  "Is there a specific question that motivated you to pursue research as a career?",
                  "Briefly describe one current project you're excited about. What stage is it at, and what are your next steps?",
                  "Do you have a favorite research finding or paper? Why does it stand out to you?",
                ].map(q => <Bullet key={q}>{q}</Bullet>)}
              </ul>

              <H3>Identifying Mentee Needs and Accountability</H3>
              <ul className="space-y-2 pl-2">
                {[
                  "Which of the nine areas of mentorship (above) do you want the most support in? Which the least?",
                  "Do you have specific mentors already filling some of those areas, or are there gaps?",
                  "How do you hold yourself accountable to your own goals? How can a mentor help with that?",
                ].map(q => <Bullet key={q}>{q}</Bullet>)}
              </ul>

              <H3>Identifying Mentor Strengths and Style</H3>
              <ul className="space-y-2 pl-2">
                {[
                  "Which areas of mentoring do you feel strongest in? Where could you grow?",
                  "Are there areas where you know your support would be limited — and if so, how would you direct a mentee to get help elsewhere?",
                  "How would you describe your mentoring style? What does showing up to support someone look like for you?",
                ].map(q => <Bullet key={q}>{q}</Bullet>)}
              </ul>

              <H3>If You Continue beyond This Match</H3>
              <p className="text-sm text-muted-foreground mb-3">If both parties want to stay connected after the initial meeting, discuss:</p>
              <ul className="space-y-2 pl-2">
                {[
                  "Preferred communication channel (email, phone, Zoom) and frequency for check-ins vs. substantive meetings.",
                  "How much lead time mentors need to provide feedback, and how quickly mentees should respond to outreach.",
                  "Whether future meetings should be standing or ad hoc.",
                ].map(q => <Bullet key={q}>{q}</Bullet>)}
              </ul>
            </section>

            {/* ── For Mentors ── */}
            <section>
              <SectionLabel>Guidance for Mentors</SectionLabel>
              <H2>Being an Effective Mentor</H2>

              <H3>Set Clear Ground Rules</H3>
              <p className="mb-4">
                The Michigan Faculty Mentoring Handbook and Emory's mentoring guides both emphasize that
                the mentor is responsible for establishing the structure of the relationship. Don't assume
                a mentee knows what to expect. Discuss scope, frequency, preferred communication style,
                and how you'd like materials sent to you before your conversations.
              </p>
              <p>
                In the HBR framework, the most successful relationships are those where the mentee "fully
                understands and shares their mentor's vision for success." That shared understanding
                doesn't emerge on its own; it's established explicitly and early.
              </p>

              <H3>Prioritize Mentee Development</H3>
              <p className="mb-4">
                While research collaborations may advance
                a mentor's own work, <em>mentee training and progress should be prioritized as a primary
                  goal of the collaboration.</em>
              </p>
              <p>
                The Equity-Minded Mentoring Toolkit adds that effective mentors practice
                "mentee-centered" rather than "mentor-centered" mentoring: remaining curious about the
                mentee's specific context, challenges, and goals rather than projecting their own
                experiences onto the relationship.
              </p>

              <H3>Avoid Mentorship Malpractice</H3>
              <p className="mb-4">
                Because mentors occupy the dominant position in the relationship, it's easy to wield
                that power inappropriately, even without realizing it. Chopra and Saint identify a
                cluster of behaviors to actively avoid:
              </p>
              <ul className="space-y-2 pl-2">
                <AccentBullet>Taking credit for a mentee's ideas or taking the lead on their projects</AccentBullet>
                <AccentBullet>Requiring mentees to advance your research rather than developing their own</AccentBullet>
                <AccentBullet>Slowing a mentee's progress by being slow to return feedback</AccentBullet>
                <AccentBullet>Discouraging mentees from seeking other mentors, which isolates them from broader support</AccentBullet>
                <AccentBullet>Allowing mentees to repeat self-destructive patterns without intervening</AccentBullet>
              </ul>

              <H3>Practice Culturally Aware Mentoring</H3>
              <p>
                The Equity-Minded Mentoring Toolkit and the CIMER's Culturally Aware Mentoring curriculum
                both identify a set of practices that are especially important when mentoring across
                difference. These include: recognizing how your own background shapes your assumptions
                about what "good" scholarship or professional behavior looks like, remaining curious
                about structural barriers your mentee may face that you didn't, and being willing to
                advocate for your mentee in spaces where the mentee isn't present.
              </p>

              <H3>Encourage the Next Step</H3>
              <p>
                The goal of good mentoring, per Chopra and Saint, is ultimately the mentee's transition
                to mentor. Keep this arc in mind: As a mentee gains confidence and expertise,
                a mentor's role should gradually shift from active guidance toward sponsorship,
                co-mentoring, and eventually collegial collaboration.
              </p>
            </section>

            {/* ── For Mentees ── */}
            <section>
              <SectionLabel>Guidance for Mentees</SectionLabel>
              <H2>Getting the Most from Mentoring</H2>

              <H3>Come Prepared and Stay Proactive</H3>
              <p className="mb-4">
                Every source in this collection agrees on one point: The mentee drives the relationship.
                Mentors are investing their limited time; mentees should come to every meeting with an
                agenda, follow up on commitments before the next conversation, and be the one to
                initiate contact. As the Emory mentoring guide puts it, "effective mentees don't wait
                to be taught — they actively seek what they need."
              </p>
              <p>
                Practically: send a short agenda before meetings, give mentors sufficient lead time to
                review any materials (a week or more for a manuscript draft), and don't let a missed
                meeting go unacknowledged.
              </p>

              <H3>Know What You Need — and Ask for It</H3>
              <p className="mb-4">
                The SJDM discussion guide and the Michigan Student Mentoring Handbook both emphasize that
                one of the most common sources of dissatisfaction in mentoring relationships is
                unexpressed needs. If you need emotional support, not just research feedback, then say so.
                If a piece of advice doesn't fit your situation, explain why.
              </p>
              <p>
                Anne Krook's distinction between a boss and a mentor is useful here: A mentor, unlike
                a boss, isn't evaluating your performance. That difference creates space for more honesty about
                what you actually need, as long as you use it.
              </p>

              <H3>Think About Your Broader Mentoring Network</H3>
              <p className="mb-4">
                The CGS Quick Start Guide for Protégés and the Michigan handbooks both recommend that
                mentees cultivate several mentors over time — not because any one mentor is
                insufficient, but because different people can offer different things. One mentor
                may be ideal for research feedback; another for career navigation; a third for
                emotional support or professional network introductions...
              </p>
              <p>
                The SJDM Mentor Matching program provides a starting point for one of those
                relationships, not a replacement for a full support network.
              </p>

              <H3>Career Topics Worth Discussing</H3>
              <p className="mb-4">
                For mentees navigating academic or industry careers, Anne Krook's resource library
                (linked below) covers a wide range of practical topics that translate well to
                mentoring conversations:
              </p>
              <ul className="space-y-2 pl-2">
                {[
                  "Describing your skills in ways that resonate outside your immediate specialty",
                  "Understanding the difference between a boss and a mentor — and what to ask each",
                  "How to have effective one-on-ones with supervisors, PIs, or thesis advisors",
                  "Navigating the job market (academic or non-academic) from within graduate school",
                  "Managing impostor syndrome as a common (and surmountable) experience",
                ].map(q => <Bullet key={q}>{q}</Bullet>)}
              </ul>
            </section>

            {/* ── SJDM guidelines ── */}
            <section>
              <SectionLabel>SJDM Program Guidelines</SectionLabel>
              <H2>Program-Specific Expectations</H2>
              <p className="mb-6">
                These guidelines apply to all participants in the SJDM Mentor Matching program,
                drawn from the{" "}
                <a
                  href="https://docs.google.com/document/d/1qmlqUnIxqG5H6qcVhT_aUmkDV9dQZckGezA8I73U47c/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  SJDM Mentor Matching Discussion Guide
                </a>.
              </p>
              <ul className="space-y-3 pl-2">
                <Bullet>
                  While research collaborations may advance a mentor's work, <strong>mentee training
                    and progress should be prioritized as the primary goal</strong> of the relationship.
                </Bullet>
                <Bullet>
                  Mentors and mentees may schedule additional meetings on an ad hoc basis for
                  relational support, research feedback, or collaboration beyond the initial match.
                </Bullet>
                <Bullet>
                  All participants are expected to adhere to the{" "}
                  <a href="/code-of-conduct" className="underline underline-offset-2 hover:text-foreground transition-colors">
                    SJDM Code of Conduct
                  </a>{" "}
                  as well as the policies of their individual organizations.
                </Bullet>
              </ul>
            </section>

            {/* ── Further reading ── */}
            <section>
              <SectionLabel>Further Reading</SectionLabel>
              <H2>Resources & Guides</H2>
              <p className="mb-8 text-muted-foreground">
                The following resources informed this guide. All are freely available.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">SJDM Program Materials</p>
                  <div className="space-y-3">
                    <ResourceLink href="https://docs.google.com/document/d/1qmlqUnIxqG5H6qcVhT_aUmkDV9dQZckGezA8I73U47c/edit?tab=t.0">
                      SJDM Mentor Matching Discussion Guide (Google Doc)
                    </ResourceLink>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Articles</p>
                  <div className="space-y-3">
                    <ResourceLink href="/resources/HBR_6_Things_Every_Mentor_Should_Do.pdf">
                      "6 Things Every Mentor Should Do" — Chopra &amp; Saint, <em>Harvard Business Review</em> (2017)
                    </ResourceLink>
                    <ResourceLink href="https://www.nature.com/collections/lhgrjpzydm">
                      Nature Mentoring Resources Collection
                    </ResourceLink>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Mentee Guides</p>
                  <div className="space-y-3">
                    <ResourceLink href="https://graduateschool.charlotte.edu/wp-content/uploads/sites/1427/2025/04/CGS_Mentoring-2016.pdf">
                      CGS Quick Start Guide for Protégés (PDF)
                    </ResourceLink>
                    <ResourceLink href="https://gs.emory.edu/_includes/documents/sections/professional-development/mentoring-guide_student_final.pdf">
                      Emory Graduate School Mentoring Guide — Student Edition (PDF)
                    </ResourceLink>
                    <ResourceLink href="https://rackham.umich.edu/downloads/student-mentoring-handbook.pdf">
                      University of Michigan Student Mentoring Handbook (PDF)
                    </ResourceLink>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Mentor Guides</p>
                  <div className="space-y-3">
                    <ResourceLink href="https://rackham.umich.edu/wp-content/uploads/2024/10/faculty-mentoring-handbook-2024.pdf">
                      University of Michigan Faculty Mentoring Handbook 2024 (PDF)
                    </ResourceLink>
                    <ResourceLink href="https://sites.rowan.edu/sgs/_docs/rowan-university-guide-to-excellence-in-graduate-student-mentorship-2_alt-cover-image.pdf">
                      Rowan University Guide to Excellence in Graduate Mentorship (PDF)
                    </ResourceLink>
                    <ResourceLink href="https://cimerproject.org/mentor-mentee-support-resources/">
                      CIMER Mentor &amp; Mentee Support Resources
                    </ResourceLink>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">DEI-Focused Mentoring</p>
                  <div className="space-y-3">
                    <ResourceLink href="https://equitygraded.org/wp-content/uploads/2024/01/Equity-Minded-Mentoring-Toolkit.pdf">
                      Equity-Minded Mentoring Toolkit (PDF)
                    </ResourceLink>
                    <ResourceLink href="https://cimerproject.org/culturally-aware-mentoring/">
                      CIMER Culturally Aware Mentoring Program
                    </ResourceLink>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Career Development for Mentees</p>
                  <div className="space-y-3">
                    <ResourceLink href="https://annekrook.com/?page_id=570">
                      Anne Krook — Resources for Graduate Students &amp; Postdocs
                    </ResourceLink>
                  </div>
                </div>

              </div>
            </section>

          </div>

          <div className="mt-14 pt-8 border-t border-border">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to the D&amp;I Committee home
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
