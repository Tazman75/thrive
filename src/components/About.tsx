export default function About() {
  return (
    <section id="about" className="tl-about">
      <div className="wrap tl-about-grid">
        <div className="tl-portrait">
          <img src="/simone.jpeg" alt="Simone Shepardson, LCPC" width="319" height="400" />
        </div>
        <div>
          <span className="kicker">About the Therapist</span>
          <h2>
            Simone Shepardson, <em>LCPC</em>
          </h2>
          <p className="cred-line">
            Licensed Clinical Professional Counselor · MSEd, Northern Illinois University
          </p>
          <div className="bio">
            <p className="pull">
              “I treasure the vulnerable, courageous moments I've shared in partnership with
              individuals and families.”
            </p>
            <p>
              Life presents challenging times. Some leave you with awe and peace; others leave you
              gasping for air and searing with pain, confusion, or dread. For more than two decades,
              I have had the joy of meeting with adults and adolescents as a Licensed Clinical
              Professional Counselor — in inpatient care, partial hospitalization programs, and
              outpatient therapy.
            </p>
            <p>
              My approach is warm, trauma-informed, and tailored to you: we partner together to
              build resilience, strengthen relationships, establish peace within yourself, and move
              toward your goals. I hold the time spent with others as sacred.
            </p>
          </div>
          <ul className="tl-chips">
            <li>LCPC</li>
            <li>MSEd</li>
            <li>Trauma-Informed</li>
            <li>Gifted &amp; Neurodivergent</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
