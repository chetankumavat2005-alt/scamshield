import { Link } from 'react-router-dom'
import '../App.css'

function Learn() {
const scams = [
{
icon: '🎣',
title: 'Phishing Scams',
level: 'HIGH RISK',
description:
'Fake emails, messages and websites designed to steal passwords, banking details or personal information.',
signs: [
'Unknown sender',
'Suspicious links',
'Urgent messages',
'Requests for personal information',
],
type: 'phishing',
},
{
icon: '💳',
title: 'UPI Scams',
level: 'HIGH RISK',
description:
'Fraudulent payment requests and tricks that target people using digital payment services.',
signs: [
'Unexpected payment request',
'Fake customer support',
'Unknown QR codes',
'Pressure to pay quickly',
],
type: 'upi',
},
{
icon: '🔐',
title: 'OTP Scams',
level: 'CRITICAL',
description:
'Scammers pretend to be trusted organizations and try to obtain your OTP or account details.',
signs: [
'Someone asks for OTP',
'Fake bank representative',
'Unexpected verification',
'Account blocking threats',
],
type: 'otp',
},
{
icon: '💼',
title: 'Fake Job Scams',
level: 'MEDIUM RISK',
description:
'Fake job offers designed to collect money, personal information or sensitive documents from job seekers.',
signs: [
'No proper interview',
'Registration fees',
'Unprofessional communication',
'Unrealistic salary',
],
type: 'fake-job',
},
{
icon: '📈',
title: 'Investment Scams',
level: 'HIGH RISK',
description:
'Fraudulent investment opportunities that promise unusually high returns with little or no risk.',
signs: [
'Guaranteed returns',
'Pressure to invest',
'Unknown platform',
'Withdrawal problems',
],
type: 'investment',
},
]

return ( <div className="learn-page-wrapper">

```
  <header className="navbar">

    <div className="logo">
      🛡️ <span>ScamShield</span>
    </div>

    <nav>
      <Link to="/">Home</Link>
      <Link to="/learn">Learn</Link>
      <Link to="/checker">Scam Checker</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/safety">Safety Tips</Link>
    </nav>

    <Link to="/checker" className="nav-button">
      Check Now
    </Link>

  </header>

  <main className="learn-page">

    <section className="learn-hero">

      <div className="learn-hero-content">

        <span className="section-label">
          LEARN ABOUT SCAMS
        </span>

        <h1>
          Understand the threat.
          <span> Stay one step ahead.</span>
        </h1>

        <p>
          Explore common online scams, understand how they work,
          recognize warning signs and learn how to protect yourself.
        </p>

      </div>

      <div className="hero-security-badge">

        <div className="security-circle">
          🛡️
        </div>

        <div>
          <strong>Stay Alert</strong>
          <small>Think before you click</small>
        </div>

      </div>

    </section>

    <section className="scam-learning-section">

      <div className="learn-section-heading">

        <div>

          <span className="section-label">
            COMMON THREATS
          </span>

          <h2>
            Know what you're
            <span> dealing with.</span>
          </h2>

        </div>

        <p>
          Scammers use different techniques to trick people.
          Learn the most common patterns below.
        </p>

      </div>

      <div className="modern-scam-grid">

        {scams.map((scam, index) => (

          <article
            className="modern-scam-card"
            key={scam.type}
          >

            <div className="modern-card-top">

              <div className="modern-card-icon">
                {scam.icon}
              </div>

              <span className="risk-badge">
                {scam.level}
              </span>

            </div>

            <div className="modern-card-content">

              <span className="card-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>
                {scam.title}
              </h3>

              <p>
                {scam.description}
              </p>

              <div className="warning-heading">
                <span>⚠</span>
                Warning signs
              </div>

              <div className="warning-chips">

                {scam.signs.map((sign) => (
                  <span key={sign}>
                    {sign}
                  </span>
                ))}

              </div>

              <Link
                to={'/scam/' + scam.type}
                className="modern-learn-button"
              >
                <span>Explore scam</span>
                <span className="arrow">→</span>
              </Link>

            </div>

          </article>

        ))}

      </div>

    </section>

    <section className="learn-tip modern-tip">

      <div className="tip-content">

        <span className="section-label">
          REMEMBER
        </span>

        <h2>
          Stop. Check.
          <span> Verify.</span>
        </h2>

        <p>
          When a message creates urgency or asks for money,
          passwords or personal information, take a moment to
          verify it before taking action.
        </p>

      </div>

      <div className="tip-security">

        <div className="tip-glow">
          🛡️
        </div>

        <span>
          YOUR AWARENESS
        </span>

        <strong>
          IS YOUR FIRST DEFENSE
        </strong>

      </div>

    </section>

  </main>

</div>


)
}

export default Learn
