import { Link, useParams } from 'react-router-dom'
import '../App.css'

function ScamDetails() {
  const { type } = useParams()

  const scamDetails = {
    phishing: {
      icon: '🎣',
      title: 'Phishing Scams',
      level: 'HIGH RISK',
      description:
        'Phishing uses fake emails, messages and websites to trick people into sharing passwords, banking information, OTPs or other personal details.',
      howItWorks: [
        'A scammer sends a fake email, SMS or social media message.',
        'The message pretends to come from a trusted organization.',
        'It may contain a suspicious link or request for information.',
        'The scammer creates urgency to make you act quickly.',
        'The information may then be used for fraud or account theft.',
      ],
      warningSigns: [
        'Unknown or suspicious sender',
        'Urgent or threatening language',
        'Suspicious website links',
        'Requests for passwords or OTPs',
        'Unexpected verification requests',
      ],
      protection: [
        'Check the sender before responding.',
        'Do not click suspicious links.',
        'Open the official website yourself.',
        'Never share your OTP, password or CVV.',
        'Verify unexpected requests through official channels.',
      ],
    },

    upi: {
      icon: '💳',
      title: 'UPI Scams',
      level: 'HIGH RISK',
      description:
        'UPI scams use fraudulent payment requests, fake support messages and QR codes to trick people into sending money or sharing sensitive information.',
      howItWorks: [
        'The scammer contacts you through a call or message.',
        'They may pretend to be a customer or support representative.',
        'They may send a fake payment request or QR code.',
        'They create pressure to make you act quickly.',
        'Money can be transferred if you approve the fraudulent transaction.',
      ],
      warningSigns: [
        'Unexpected UPI payment request',
        'Unknown QR code',
        'Fake customer support',
        'Pressure to pay quickly',
        'Someone asking for your UPI PIN',
      ],
      protection: [
        'Check the receiver name before paying.',
        'Never approve an unknown payment request.',
        'Never share your UPI PIN.',
        'Avoid scanning unknown QR codes.',
        'Use official support channels.',
      ],
    },

    otp: {
      icon: '🔐',
      title: 'OTP Scams',
      level: 'CRITICAL',
      description:
        'OTP scams try to convince people to reveal a one-time password or verification code that can be used to authorize an account or transaction.',
      howItWorks: [
        'The scammer pretends to be from a trusted organization.',
        'They claim that your account needs verification.',
        'You receive an OTP on your phone.',
        'The scammer asks you to share the OTP.',
        'The code may be used for an unauthorized action.',
      ],
      warningSigns: [
        'Someone asks you to share an OTP',
        'Unexpected verification messages',
        'Fake bank or support calls',
        'Threats about account blocking',
        'Requests to read a verification code',
      ],
      protection: [
        'Never share an OTP with anyone.',
        'Do not read verification codes to callers.',
        'End suspicious calls.',
        'Contact the organization yourself.',
        'Never share your PIN, CVV or password.',
      ],
    },

    'fake-job': {
      icon: '💼',
      title: 'Fake Job Scams',
      level: 'MEDIUM RISK',
      description:
        'Fake job scams use attractive but fraudulent job offers to collect money, personal information or sensitive documents from job seekers.',
      howItWorks: [
        'A scammer sends an attractive job opportunity.',
        'The job may promise a very high salary.',
        'You may be asked to pay a registration fee.',
        'The scammer may request personal documents.',
        'After receiving money or information, the scammer may disappear.',
      ],
      warningSigns: [
        'Registration or processing fees',
        'Unrealistic salary promises',
        'No proper interview',
        'Unprofessional communication',
        'Early requests for sensitive documents',
      ],
      protection: [
        'Research the company before applying.',
        'Check the job on the official company website.',
        'Never pay money to receive a job.',
        'Be careful when sharing identity documents.',
        'Verify job offers through official channels.',
      ],
    },

    investment: {
      icon: '📈',
      title: 'Investment Scams',
      level: 'HIGH RISK',
      description:
        'Investment scams promote fraudulent opportunities that promise unusually high or guaranteed returns while hiding the risks.',
      howItWorks: [
        'The scammer promotes an investment opportunity.',
        'They may show fake profits or testimonials.',
        'They promise unusually high or guaranteed returns.',
        'They pressure you to invest more money.',
        'Withdrawal may become difficult or require additional payments.',
      ],
      warningSigns: [
        'Guaranteed high returns',
        'Little mention of risk',
        'Pressure to invest quickly',
        'Unknown investment platform',
        'Problems withdrawing money',
      ],
      protection: [
        'Research the investment platform.',
        'Be cautious of guaranteed returns.',
        'Do not invest because someone pressures you.',
        'Understand the risks before investing.',
        'Use trusted investment channels.',
      ],
    },
  }

  const scam = scamDetails[type]

  if (!scam) {
    return (
      <div className="scam-details-page">
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

        <main className="scam-details-content">
          <h1>Scam information not found</h1>

          <Link to="/learn" className="primary-button">
            Back to Learn →
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="scam-details-page">
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

      <main className="scam-details-content">
        <Link to="/learn" className="back-link">
          ← Back to Learn
        </Link>

        <section className="scam-details-hero">
          <div className="details-icon">
            {scam.icon}
          </div>

          <div>
            <span className="section-label">
              {scam.level}
            </span>

            <h1>{scam.title}</h1>

            <p>{scam.description}</p>
          </div>
        </section>

        <section className="details-section">
          <span className="section-label">
            UNDERSTAND THE SCAM
          </span>

          <h2>How does it work?</h2>

          <div className="details-list">
            {scam.howItWorks.map((item, index) => (
              <div className="details-list-item" key={index}>
                <span className="details-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="details-section warning-section">
          <span className="section-label">
            WARNING SIGNS
          </span>

          <h2>What should you look for?</h2>

          <div className="details-warning-grid">
            {scam.warningSigns.map((sign, index) => (
              <div className="details-warning-card" key={index}>
                <span>!</span>
                <p>{sign}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="details-section protection-section">
          <span className="section-label">
            STAY PROTECTED
          </span>

          <h2>How can you protect yourself?</h2>

          <div className="protection-list">
            {scam.protection.map((tip, index) => (
              <div className="protection-item" key={index}>
                <span>✓</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="details-cta">
          <div>
            <span className="section-label">
              STAY ALERT
            </span>

            <h2>Think before you click.</h2>

            <p>
              If a message creates pressure or asks for sensitive
              information, stop and verify it independently.
            </p>
          </div>

          <Link to="/checker" className="primary-button">
            Check a Message →
          </Link>
        </section>
      </main>
    </div>
  )
}

export default ScamDetails