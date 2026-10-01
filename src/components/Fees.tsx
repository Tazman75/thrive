export default function Fees() {
  return (
    <section id="fees" className="tl-fees">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Fees &amp; Insurance</span>
          <h2>
            Clear costs, <em>no surprises</em>.
          </h2>
          <p>Using insurance? Book online and your coverage is confirmed before your first appointment.</p>
        </div>
        <div className="tl-fees-grid">
          <div className="tl-card">
            <h3>In-network insurance</h3>
            <ul>
              <li>Aetna</li>
              <li>Blue Cross Blue Shield of Illinois</li>
            </ul>
            <p>Insurance sessions are billed through Headway, which checks your eligibility in seconds when you book.</p>
          </div>
          <div className="tl-card">
            <h3>Self-pay</h3>
            <span className="big">$130</span>
            <p>Per session for self-pay clients. HSA and FSA funds welcome.</p>
          </div>
          <div className="tl-card">
            <h3>Out-of-network</h3>
            <p>For other insurance plans, I can provide a superbill so you can request out-of-network reimbursement from your insurer.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
