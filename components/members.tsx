const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

type Member = {
  name: string
  affiliation: string
  role?: string
  subcommittee?: string
  years: string
  url?: string
  email?: string
  photo?: string
}

const currentMembers: Member[] = [
  // Chair first, Chair Emerita second, then alphabetical by last name
  {
    name: "Rich Truncellito",
    affiliation: "YouTube UX Research",
    role: "Chair",
    subcommittee: "Mentor Matching",
    years: "2024–Present",
    url: "https://www.linkedin.com/in/rdtruncellito/",
    photo: "/members/rich-truncellito.jpg",
  },
  {
    name: "Crystal Reeck",
    affiliation: "Temple University",
    role: "Chair Emerita",
    subcommittee: "Travel Scholarships",
    years: "2024–Present",
    url: "https://www.fox.temple.edu/directory/crystal-reeck-tug28076",
    photo: "/members/crystal-reeck.jpg",
  },
  {
    name: "Abdullah Althenayyan",
    affiliation: "Columbia Business School",
    years: "2026–Present",
    url: "https://business.columbia.edu/post-grad/people/abdullah-althenayyan",
    photo: "/members/abdullah-althenayyan.jpg",
  },
  {
    name: "Zac Arens",
    affiliation: "Oklahoma State University",
    years: "2026–Present",
    url: "https://experts.okstate.edu/zachary.arens",
    photo: "/members/zac-arens.jpg",
  },
  {
    name: "Eva Buechel",
    affiliation: "HKUST",
    subcommittee: "Code of Conduct",
    years: "2025–Present",
    url: "https://mark.hkust.edu.hk/faculty-and-staff/directory/buechel",
    photo: "/members/eva-buechel.jpg",
  },
  {
    name: "Ryan Gaffney",
    affiliation: "Vanderbilt University",
    subcommittee: "Grad Student Outreach",
    years: "2025–Present",
    url: "https://business.vanderbilt.edu/bio/ryan-gaffney/",
    photo: "/members/ryan-gaffney.png",
  },
  {
    name: "Rochak Khandelwal",
    affiliation: "IIM Bangalore",
    subcommittee: "Demographics Tracking",
    years: "2025–Present",
    url: "https://www.iimb.ac.in/node/9420",
    photo: "/members/rochak-khandelwal.jpg",
  },
  {
    name: "Rocío Martínez",
    affiliation: "IESE Business School",
    years: "2025–Present",
    url: "https://www.iese.edu/phd-in-management/students/rocio-martinez/",
    photo: "/members/rocio-martinez.jpg",
  },
  {
    name: "Hannah Perfecto",
    affiliation: "Washington University in St. Louis",
    subcommittee: "Outreach to Scholars of Color",
    years: "2025–Present",
    url: "https://olin.washu.edu/faculty/hannah-perfecto",
    photo: "/members/hannah-perfecto.png",
  },
  {
    name: "Radhika Santhanagopalan",
    affiliation: "University of Chicago",
    subcommittee: "Community Connection",
    years: "2026–Present",
    url: "https://www.radhikasanthanagopalan.com/",
    photo: "/members/radhika-santhanagopalan.jpg",
  },
  {
    name: "Kartik Trivedi",
    affiliation: "University of New Hampshire",
    subcommittee: "Accessibility",
    years: "2025–Present",
    url: "https://kartiktrivedi.in/",
    photo: "/members/kartik-trivedi.jpg",
  },
  {
    name: "Nina Wang",
    affiliation: "York University",
    years: "2026–Present",
    url: "https://szeyuhninawang.com/",
    photo: "/members/nina-wang.jpg",
  },
]

const pastMembers: Member[] = [
  // Inaugural Chair first, then Chair Emerita, then alphabetical by last name
  {
    name: "Crystal Hall",
    affiliation: "University of Washington",
    role: "Inaugural Chair",
    years: "2020–2022",
    url: "https://evans.uw.edu/profile/crystal-hall/",
    photo: "/members/crystal-hall.jpg",
  },
  {
    name: "Jane Risen",
    affiliation: "University of Chicago Booth",
    role: "Chair Emerita",
    years: "2024–2025",
    url: "https://www.chicagobooth.edu/faculty/directory/r/jane-l-risen",
    photo: "/members/jane-risen.jpg",
  },
  {
    name: "Ashley Angulo",
    affiliation: "University of Arizona",
    years: "2023–2025",
    url: "https://eller.arizona.edu/person/ashley-angulo",
    photo: "/members/ashley-angulo.png",
  },
  {
    name: "Edward Chang",
    affiliation: "Harvard Business School",
    years: "2020–2021",
    url: "https://www.hbs.edu/faculty/Pages/profile.aspx?facId=1284280",
    photo: "/members/edward-chang.jpg",
  },
  {
    name: "Nathan Cheek",
    affiliation: "University of Maryland, College Park",
    years: "2020–2022",
    url: "https://natecheek.com/",
    photo: "/members/nate-cheek.jpg",
  },
  {
    name: "Kristine Cho",
    affiliation: "UC Berkeley (Haas)",
    years: "2024–2026",
    url: "https://kristinecho.com/",
    photo: "/members/kristine-cho.jpg",
  },
  {
    name: "Brandy Edmondson",
    affiliation: "Rice University",
    years: "2021–2022",
    url: "https://business.rice.edu/person/brandy-edmondson",
    photo: "/members/brandy-edmondson.jpg",
  },
  {
    name: "Margaret Echelbarger",
    affiliation: "Stony Brook University",
    years: "2023–2025",
    url: "https://www.mechelbarger.com/",
    photo: "/members/margaret-echelbarger.jpg",
  },
  {
    name: "Fausto González",
    affiliation: "Washington University in St. Louis",
    years: "2023–2025",
    url: "https://olin.washu.edu/faculty/fausto-gonzalez",
    photo: "/members/fausto-gonzalez.jpg",
  },
  {
    name: "Ania Jaroszewicz",
    affiliation: "UC San Diego",
    years: "2023–2025",
    url: "https://www.aniajaroszewicz.com/",
    photo: "/members/ania-jaroszewicz.jpg",
  },
  {
    name: "Kevin Jarbo",
    affiliation: "Carnegie Mellon University",
    years: "2021–2022",
    url: "https://www.cmu.edu/dietrich/sds/people/faculty/kevin-jarbo.html",
    photo: "/members/kevin-jarbo.jpg",
  },
  {
    name: "Ellie Kyung",
    affiliation: "Babson College",
    years: "2024–2026",
    url: "https://www.elliekyung.com/",
    photo: "/members/ellie-kyung.jpg",
  },
  {
    name: "Jennifer Lerner",
    affiliation: "Harvard Kennedy School",
    years: "2020–2022",
    url: "https://www.hks.harvard.edu/faculty/jennifer-lerner",
    photo: "/members/jennifer-lerner-hks.jpg",
  },
  {
    name: "Ye Li",
    affiliation: "UC Riverside",
    years: "2024–2026",
    url: "https://profiles.ucr.edu/app/home/profile/yeliphd",
    photo: "/members/ye-li.jpg",
  },
  {
    name: "Tyler MacDonald",
    affiliation: "Boston University",
    years: "2021–2022",
    url: "https://www.linkedin.com/in/tylerfrasermacdonald/",
    photo: "/members/tyler-macdonald.jpg",
  },
  {
    name: "Molly Moore",
    affiliation: "Washington University in St. Louis",
    years: "2022–2023",
    url: "https://www.mollymooreplz.com/",
    photo: "/members/molly-moore.jpg",
  },
  {
    name: "Elizabeth Perry",
    affiliation: "",
    years: "2021–2023",
  },
  {
    name: "Deidre Popovich",
    affiliation: "Texas Tech University",
    years: "2022–2023",
    url: "http://www.deidrepopovich.com/",
    photo: "/members/deidre-popovich.jpg",
  },
  {
    name: "Todd Rogers",
    affiliation: "Harvard Kennedy School",
    years: "2020–2022",
    url: "https://www.hks.harvard.edu/faculty/todd-rogers",
    photo: "/members/todd-rogers.jpg",
  },
  {
    name: "Aaron Sackett",
    affiliation: "University of St. Thomas",
    years: "2022–2023",
    url: "https://business.stthomas.edu/faculty/directory/aaron-sackett/",
    photo: "/members/aaron-sackett.jpg",
  },
  {
    name: "Ovul Sezer",
    affiliation: "Cornell SC Johnson College of Business",
    years: "2022–2023",
    url: "https://business.cornell.edu/faculty-research/faculty/os244/",
    photo: "/members/ovul-sezer.jpg",
  },
  {
    name: "Eesha Sharma",
    affiliation: "San Diego State University",
    years: "2021–2022",
    url: "https://business.sdsu.edu/directory/esharma",
    photo: "/members/eesha-sharma.jpg",
  },
  {
    name: "Suzanne Shu",
    affiliation: "Cornell SC Johnson College of Business",
    role: "Board Representative",
    years: "2020–2021",
    url: "https://business.cornell.edu/faculty-research/faculty/sbs78/",
    photo: "/members/suzanne-shu.jpg",
  },
  {
    name: "Yiyun Shou",
    affiliation: "National University of Singapore",
    years: "2023–2025",
    url: "https://sph.nus.edu.sg/faculty-directory/shou-yiyun/",
    photo: "/members/yiyun-shou.jpg",
  },
  {
    name: "Stephen Spiller",
    affiliation: "UCLA Anderson",
    role: "Board Representative",
    years: "2022–2023",
    url: "https://www.anderson.ucla.edu/faculty-and-research/marketing/faculty/spiller",
    photo: "/members/stephen-spiller.jpg",
  },
  {
    name: "Eric Van Epps",
    affiliation: "Vanderbilt University",
    years: "2023–2025",
    url: "https://business.vanderbilt.edu/bio/eric-vanepps/",
    photo: "/members/eric-vanepps.png",
  },
]

function MemberCard({ member, showContact = false }: { member: Member; showContact?: boolean }) {
  const initials = member.name.split(" ").map(n => n[0]).join("")

  const avatar = member.photo ? (
    <div className="rounded-full w-16 h-16 overflow-hidden mb-4 ring-2 ring-border group-hover:ring-accent/40 transition-all flex-shrink-0">
      <img
        src={`${BASE}${member.photo}`}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>
  ) : (
    <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
      <span className="text-xl font-serif font-medium text-muted-foreground group-hover:text-accent transition-colors">
        {initials}
      </span>
    </div>
  )

  const id = `member-${member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`

  return (
    <div className="group member-card scroll-mt-28" id={id}>
      {avatar}
      <h3 className="font-semibold text-sm leading-snug">
        {member.url ? (
          <a
            href={member.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            {member.name}
          </a>
        ) : (
          member.name
        )}
      </h3>
      <p className="text-sm text-muted-foreground mt-0.5">{member.affiliation}</p>
      {member.role && (
        <p className="text-xs font-medium text-accent mt-1">{member.role}</p>
      )}
      {member.subcommittee && (
        <p className="text-xs text-muted-foreground mt-0.5">{member.subcommittee} lead</p>
      )}
      <p className="text-xs text-muted-foreground mt-1.5">{member.years}</p>
      {showContact && (member.url || member.email) && (
        <div className="flex items-center gap-2 mt-2">
          {member.url && (
            <a
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-muted-foreground/60 hover:text-primary transition-colors underline underline-offset-2"
            >
              Profile
            </a>
          )}
          {member.url && member.email && (
            <span className="text-muted-foreground/30 text-[10px]">·</span>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-[10px] text-muted-foreground/60 hover:text-primary transition-colors underline underline-offset-2"
            >
              Email
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export function Members() {
  return (
    <section id="members" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Our Team
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Committee Members
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our committee is composed of dedicated SJDM members who volunteer their time
            and expertise to advance diversity and inclusion in our community.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-lg font-semibold mb-8 pb-4 border-b border-border">
            Current Members (2026)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {currentMembers.map((member, index) => (
              <MemberCard key={index} member={member} showContact />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-8 pb-4 border-b border-border">
            Past Members
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {pastMembers.map((member, index) => (
              <MemberCard key={index} member={member} showContact />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            If you&rsquo;re a past member and you&rsquo;d like to be featured on this page, reach out to{" "}
            <a href="mailto:sjdmdichair@gmail.com" className="underline underline-offset-2 hover:text-foreground transition-colors">
              sjdmdichair@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
