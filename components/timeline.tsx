"use client"

import { useState } from "react"

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

const TODAY      = new Date().getMonth() + 1 // current month, 1-indexed
const CONFERENCE = 11 // November

type Phase   = { label: string; start: number; end: number; completed?: boolean; link?: string }
type GanttRow = { name: string; phases: Phase[]; poc: { name: string; memberId: string } }

// Alphabetical. Dates marked "// temp" are placeholders pending confirmed timelines.
const rows: GanttRow[] = [
  {
    name: "Accessibility",
    poc: { name: "Kartik Trivedi", memberId: "member-kartik-trivedi" },
    phases: [
      { label: "Community survey",           start: 4, end: 6  },
      { label: "Remote & mic protocols",     start: 6, end: 8  },
      { label: "Barrier assessment",         start: 11, end: 12 },
    ],
  },
  {
    name: "Code of Conduct",
    poc: { name: "Eva Buechel", memberId: "member-eva-buechel" },
    phases: [
      { label: "Scoping & stakeholders", start: 4, end: 7  },
      { label: "Policy integration",     start: 8, end: 12 },
    ],
  },
  {
    name: "Community Connection",
    poc: { name: "Radhika Santhanagopalan", memberId: "member-radhika-santhanagopalan" },
    phases: [
      { label: "Planning & coordination", start: 7, end: 8  }, // temp
      { label: "Programming & events",    start: 9, end: 11 },
    ],
  },
  {
    name: "Demographics Tracking",
    poc: { name: "Rochak Khandelwal", memberId: "member-rochak-khandelwal" },
    phases: [
      { label: "Demographics dashboard", start: 4, end: 6, completed: true },
      { label: "Survey & data systems",  start: 6, end: 12 }, // survey continues → Jan 2027
    ],
  },
  {
    name: "Grad Student Outreach",
    poc: { name: "Ryan Gaffney", memberId: "member-ryan-gaffney" },
    phases: [
      { label: "Program development", start: 5, end: 8  }, // temp
      { label: "Events & outreach",   start: 9, end: 11 }, // temp
    ],
  },
  {
    name: "Mentor Matching",
    poc: { name: "Rich Truncellito", memberId: "member-rich-truncellito" },
    phases: [
      { label: "Resource development",    start: 5,  end: 6,  completed: true, link: "/mentoring-resources" },
      { label: "Algorithm & survey dev.", start: 7,  end: 8  },
      { label: "Matching & Meetings",     start: 9,  end: 11 },
      { label: "Feedback",                start: 12, end: 12 },
    ],
  },
  {
    name: "Outreach to Scholars of Color",
    poc: { name: "Hannah Perfecto", memberId: "member-hannah-perfecto" },
    phases: [
      { label: "Abstract review",  start: 5, end: 6  },
      { label: "Strategy & scope", start: 7, end: 11 }, // temp
    ],
  },
  {
    name: "Travel Scholarships",
    poc: { name: "Crystal Reeck", memberId: "member-crystal-reeck" },
    phases: [
      { label: "Process review", start: 4, end: 5 },
      { label: "Award cycle",    start: 8, end: 9 },
    ],
  },
]

const ROW_H = 68  // px
const BAR_H = 28  // px — tall enough for 9 px text

function pct(month: number) {
  return `${((month - 1) / 12) * 100}%`
}

type HoverState = { ri: number; pi: number; start: number; end: number } | null

export function Timeline() {
  const [hover, setHover] = useState<HoverState>(null)

  return (
    <section id="timeline" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            The Year Ahead
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-6">
            2026 Activity Calendar
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Key activity windows for each subcommittee, with phases shown within the bar.
            Hover a phase to highlight its span.
          </p>
        </div>

        <div className="overflow-x-auto -mx-6 px-6">
          <div className="min-w-[700px]">
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">

              {/* ── Month header ── */}
              <div className="flex border-b border-border">
                <div className="w-52 flex-shrink-0 border-r border-border px-5 py-3 flex items-end">
                  <span className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground/60">
                    Subcommittee
                  </span>
                </div>
                <div className="flex-1 grid grid-cols-12">
                  {MONTHS.map((m, i) => {
                    const mn            = i + 1
                    const isToday       = mn === TODAY
                    const isConference  = mn === CONFERENCE
                    const inRange       = hover !== null && mn >= hover.start && mn <= hover.end
                    const isBoundary    = hover !== null && (mn === hover.start || mn === hover.end)

                    return (
                      <div
                        key={m}
                        className={[
                          "relative flex flex-col items-center justify-end pb-2.5 pt-2 transition-colors duration-150",
                          inRange       ? "bg-primary/[0.09]"  :
                          isConference  ? "bg-accent/[0.06]"   : "",
                        ].join(" ")}
                      >
                        {/* "Conf." badge — hide while a range is highlighted */}
                        {isConference && !inRange && (
                          <span className="absolute top-1.5 text-[9px] font-semibold tracking-widest uppercase text-accent/70">
                            Conf.
                          </span>
                        )}

                        {/* Month label */}
                        <span className={[
                          "text-[11px] font-medium transition-colors duration-150",
                          isToday   ? "text-accent font-semibold"   :
                          inRange   ? "text-primary font-semibold"  :
                          "text-muted-foreground",
                        ].join(" ")}>
                          {m}
                        </span>

                        {/* Today dot */}
                        {isToday && (
                          <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-accent" />
                        )}

                        {/* Range underline — capped at boundaries, continuous between */}
                        {inRange && (
                          <div className={[
                            "absolute bottom-0 h-[2px] bg-primary/50 transition-opacity duration-150",
                            isBoundary && mn === hover?.start && mn === hover?.end
                              ? "left-2 right-2 rounded-full"         // single-month phase
                              : mn === hover?.start
                              ? "left-2.5 right-0 rounded-l-full"    // left cap
                              : mn === hover?.end
                              ? "left-0 right-2.5 rounded-r-full"    // right cap
                              : "left-0 right-0",                    // middle
                          ].join(" ")} />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* ── Rows ── */}
              {rows.map((row, ri) => {
                const allStart      = Math.min(...row.phases.map(p => p.start))
                const allEnd        = Math.max(...row.phases.map(p => p.end))
                const totalMonths   = allEnd - allStart + 1
                const elapsedMonths = Math.max(0, Math.min(TODAY, allEnd + 1) - allStart)
                const elapsedPct    = `${(elapsedMonths / totalMonths) * 100}%`

                return (
                  <div
                    key={row.name}
                    className={`flex items-center ${ri < rows.length - 1 ? "border-b border-border" : ""}`}
                  >
                    {/* Row label */}
                    <div
                      className="w-52 flex-shrink-0 px-5 border-r border-border flex flex-col justify-center gap-0.5"
                      style={{ height: `${ROW_H}px` }}
                    >
                      <p className="text-sm font-medium leading-snug">{row.name}</p>
                      <p className="text-[10px] text-muted-foreground/70 leading-none">
                        Point of Contact:{" "}
                        <a
                          href={`#${row.poc.memberId}`}
                          className="hover:text-primary transition-colors"
                        >
                          {row.poc.name}
                        </a>
                      </p>
                    </div>

                    {/* Bar area */}
                    <div className="flex-1 relative" style={{ height: `${ROW_H}px` }}>

                      {/* Conference column tint */}
                      <div
                        className="absolute inset-y-0 bg-accent/[0.06] pointer-events-none"
                        style={{ left: pct(CONFERENCE), width: `${(1 / 12) * 100}%` }}
                      />

                      {/* Subtle column separators */}
                      {MONTHS.map((_, idx) => idx > 0 && (
                        <div
                          key={idx}
                          className="absolute inset-y-0 w-px bg-border/40 pointer-events-none"
                          style={{ left: pct(idx + 1) }}
                        />
                      ))}

                      {/* Today marker */}
                      <div
                        className="absolute inset-y-0 w-[1.5px] bg-accent/40 pointer-events-none z-10"
                        style={{ left: pct(TODAY) }}
                      />

                      {/* ── Segmented pill ── */}
                      <div
                        className="absolute top-1/2 -translate-y-1/2 rounded-full overflow-hidden"
                        style={{
                          left:   `calc(${pct(allStart)} + 5px)`,
                          width:  `calc(${(totalMonths / 12) * 100}% - 10px)`,
                          height: `${BAR_H}px`,
                        }}
                      >
                        {/* Track */}
                        <div className="absolute inset-0 bg-primary/[0.13]" />

                        {/* Elapsed fill */}
                        {elapsedMonths > 0 && (
                          <div
                            className="absolute inset-y-0 left-0 bg-primary/70"
                            style={{ width: elapsedPct }}
                          />
                        )}

                        {/* Phase segments — gap-[2px] lets the track show between phases */}
                        <div className="absolute inset-0 flex gap-[2px]">
                          {row.phases.map((phase, pi) => {
                            const isActive = hover?.ri === ri && hover?.pi === pi
                            return (
                              <div
                                key={pi}
                                className="relative flex items-center justify-center overflow-hidden cursor-default min-w-0"
                                style={{ flex: phase.end - phase.start + 1 }}
                                onMouseEnter={() => setHover({ ri, pi, start: phase.start, end: phase.end })}
                                onMouseLeave={() => setHover(null)}
                              >
                                {phase.link && (
                                  <a
                                    href={phase.link}
                                    className="absolute inset-0 z-20 cursor-pointer"
                                    aria-label={phase.label}
                                    onMouseEnter={() => setHover({ ri, pi, start: phase.start, end: phase.end })}
                                    onMouseLeave={() => setHover(null)}
                                  />
                                )}
                                {/* Completed phase fill */}
                                {phase.completed && (
                                  <div className="absolute inset-0 bg-emerald-500/60 pointer-events-none" />
                                )}
                                {/* Hover brightening overlay */}
                                <div
                                  className={[
                                    "absolute inset-0 pointer-events-none transition-opacity duration-150",
                                    phase.completed ? "bg-emerald-400/20" : "bg-primary/[0.22]",
                                    isActive ? "opacity-100" : "opacity-0",
                                  ].join(" ")}
                                />
                                {/* Phase label */}
                                <span className="relative text-[9px] font-medium tracking-wide text-foreground/65 px-2 truncate leading-none select-none">
                                  {phase.completed ? `✓ ${phase.label}` : phase.label}
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                    </div>
                  </div>
                )
              })}

              {/* ── Legend ── */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 py-3.5 border-t border-border bg-secondary/40">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-2 rounded-full bg-primary/70" />
                  <span className="text-[11px] text-muted-foreground">Elapsed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-2 rounded-full bg-primary/[0.13] border border-primary/20" />
                  <span className="text-[11px] text-muted-foreground">Upcoming</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[1.5px] h-3.5 bg-accent/40" />
                  <span className="text-[11px] text-muted-foreground">Today ({MONTHS[TODAY - 1]} {new Date().getFullYear()})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 rounded-[3px] bg-accent/[0.06] border border-accent/15" />
                  <span className="text-[11px] text-muted-foreground">Annual Conference (Nov)</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
