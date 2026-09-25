import { Link } from 'react-router-dom'
import '../App.css'

function Safety() {
  const safetyTips = [
    {
      icon: '🔐',
      title: 'Protect Your OTP & Passwords',
      tips: [
        'Never share your OTP with anyone.',
        'Use strong and unique passwords.',
        'Never share your CVV, PIN or banking password.',
        'Enable two-factor authentication whenever possible.',
      ],
    },
    {
      icon: '💳',
      title: 'Stay Safe with UPI',
      tips: [
        'Never approve an unknown UPI payment request.',
        'Remember that receiving money does not require your UPI PIN.',
        'Check the receiver name before making a payment.',
        'Avoid scanning unknown QR codes.',
      ],
    },
    {
      icon: '🔗',
      title: 'Check Links Before Clicking',
      tips: [
        'Check the sender before opening a link.',
        'Look carefully at the website address.',
        'Avoid links that create extreme urgency.',
        'When unsure, open the official website yourself.',
      ],
    },
    {
      icon: '📞',
      title: 'Avoid Fake Customer Support',
      tips: [
        'Use customer support details from the official website or app.',
        'Do not trust random support numbers found online.',
        'Never allow unknown people remote access to your device.',
        'Do not share banking information with support callers.',
      ],
    },
    {
      icon: '💼',
      title: 'Identify Fake Job Offers',
      tips: [
        'Be careful when a job requires an upfront payment.',
        'Research the company before sharing documents.',
        'Be cautious of unrealistic salary promises.',
        'Verify job offers through official company channels.',
      ],
    },
    {
      icon: '📈',
      title: 'Avoid Investment Scams',
      tips: [
        'Be careful of guaranteed high returns.',
        'Research the investment platform before investing.',
        'Do not invest because someone pressures you.',
        'Understand the risks before investing money.',
      ],
    },
  ]

  return (
    <div className="safety-page-wrapper">

      {/* NAVBAR */}

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

        <Link
          to="/checker"
          className="nav-button"
        >
          Check Now
        </Link>

      </header>


      {/* SAFETY PAGE */}

      <main className="safety-page">

        {/* HERO */}

        <section className="safety-hero">

          <span className="section-label">
            STAY SAFE ONLINE
          </span>

          <h1>
            Simple habits.
            <span> Strong protection.</span>
          </h1>

          <p>
            Follow these simple safety practices to protect
            yourself from common online scams and fraud.
          </p>

        </section>


        {/* SAFETY CARDS */}

        <section className="safety-grid">

          {safetyTips.map((item, index) => (

            <article
              className="safety-card"
              key={index}
            >

              <div className="safety-icon">
                {item.icon}
              </div>

              <span className="safety-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h2>
                {item.title}
              </h2>

              <ul>

                {item.tips.map((tip, tipIndex) => (

                  <li key={tipIndex}>
                    <span>✓</span>
                    {tip}
                  </li>

                ))}

              </ul>

            </article>

          ))}

        </section>


        {/* REMEMBER SECTION */}

        <section className="safety-reminder">

          <div className="safety-reminder-icon">
            🛡️
          </div>

          <div>

            <span className="section-label">
              REMEMBER
            </span>

            <h2>
              Stop. Check. Verify.
            </h2>

            <p>
              Scammers often create urgency to make you act
              without thinking. Take a moment, verify the
              information independently and never share
              sensitive information under pressure.
            </p>

          </div>

        </section>

      </main>

    </div>
  )
}

export default Safety