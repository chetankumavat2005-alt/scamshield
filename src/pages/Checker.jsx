import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Checker() {
  const [message, setMessage] = useState('')
  const [result, setResult] = useState(null)

  const checkMessage = () => {
    if (!message.trim()) {
      setResult({
        type: 'empty',
        title: 'Enter a message first',
        text: 'Paste a suspicious message, email or link to check for common warning signs.',
        signs: [],
      })
      return
    }

    const text = message.toLowerCase()

    const warningPatterns = [
      {
        keywords: ['otp', 'one time password'],
        sign: 'Requests for an OTP or verification code',
      },
      {
        keywords: ['urgent', 'immediately', 'act now', 'last chance'],
        sign: 'Creates urgency or pressure',
      },
      {
        keywords: ['click here', 'click the link', 'verify now'],
        sign: 'Asks you to click a link or verify immediately',
      },
      {
        keywords: ['upi', 'qr code', 'scan qr'],
        sign: 'Mentions a UPI payment or QR code',
      },
      {
        keywords: ['prize', 'winner', 'won', 'lottery', 'reward'],
        sign: 'Promises a prize, reward or unexpected money',
      },
      {
        keywords: ['job offer', 'work from home', 'registration fee'],
        sign: 'Contains possible fake-job indicators',
      },
      {
        keywords: [
          'investment',
          'guaranteed return',
          'double your money',
        ],
        sign: 'Promises unusually high or guaranteed returns',
      },
      {
        keywords: [
          'password',
          'bank details',
          'card number',
          'cvv',
        ],
        sign: 'Requests sensitive financial or account information',
      },
    ]

    const detectedSigns = warningPatterns
      .filter((pattern) =>
        pattern.keywords.some((keyword) =>
          text.includes(keyword)
        )
      )
      .map((pattern) => pattern.sign)

    if (detectedSigns.length >= 3) {
      setResult({
        type: 'high',
        title: 'Multiple warning signs detected',
        text:
          'This message contains several common scam indicators. Do not share sensitive information or make a payment until you independently verify the sender.',
        signs: detectedSigns,
      })
    } else if (detectedSigns.length > 0) {
      setResult({
        type: 'medium',
        title: 'Some warning signs detected',
        text:
          'This message contains one or more indicators commonly associated with scams. Verify the sender and information before taking action.',
        signs: detectedSigns,
      })
    } else {
      setResult({
        type: 'safe',
        title: 'No obvious warning signs found',
        text:
          'No common warning patterns were detected in the text you entered. This does not guarantee that the message is safe, so verify the sender before sharing information or making payments.',
        signs: [],
      })
    }
  }

  const clearChecker = () => {
    setMessage('')
    setResult(null)
  }

  return (
    <div className="checker-page-wrapper">

      {/* NAVIGATION */}
      <header className="navbar">

        <div className="logo">
          🛡️ <span>ScamShield</span>
        </div>

        <nav>
          <Link to="/">Home</Link>

          <Link to="/learn">Learn</Link>

          <Link to="/checker">Scam Checker</Link>

          <a href="/#quiz">Quiz</a>

          <a href="/#safety">Safety Tips</a>
        </nav>

        <Link
          to="/checker"
          className="nav-button"
        >
          Check Now
        </Link>

      </header>

      {/* MAIN CONTENT */}
      <main className="checker-page">

        {/* HERO */}
        <section className="checker-hero">

          <span className="section-label">
            SCAM CHECKER
          </span>

          <h1>
            Not sure?
            <span> Check before you click.</span>
          </h1>

          <p>
            Paste a suspicious message, email or link below.
            ScamShield will look for common warning signs that
            may indicate a scam.
          </p>

        </section>

        {/* CHECKER */}
        <section className="checker-container">

          <div className="checker-card">

            <div className="checker-card-header">

              <div>
                <h2>
                  Paste the suspicious message
                </h2>
              </div>

              <div className="checker-icon">
                🔍
              </div>

            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Example: Congratulations! You have won a prize. Click here to claim your reward..."
              className="checker-textarea"
            />

            <div className="checker-actions">

              <button
                type="button"
                className="check-button"
                onClick={checkMessage}
              >
                <span>
                  Check for scam signs
                </span>

                <span className="arrow">
                  →
                </span>
              </button>

              <button
                type="button"
                className="clear-button"
                onClick={clearChecker}
              >
                Clear
              </button>

            </div>

          </div>

          {/* RESULT */}
          {result && (
            <div
              className={`checker-result ${result.type}`}
            >

              <div className="result-icon">

                {result.type === 'high' && '⚠️'}

                {result.type === 'medium' && '🔎'}

                {result.type === 'safe' && '✓'}

                {result.type === 'empty' && '💬'}

              </div>

              <div className="result-content">

                <span className="result-label">
                  CHECK RESULT
                </span>

                <h2>
                  {result.title}
                </h2>

                <p>
                  {result.text}
                </p>

                {result.signs.length > 0 && (
                  <div className="detected-signs">

                    <h3>
                      Warning signs found
                    </h3>

                    <div className="result-sign-list">

                      {result.signs.map(
                        (sign, index) => (
                          <div
                            className="result-sign"
                            key={index}
                          >

                            <span>
                              !
                            </span>

                            {sign}

                          </div>
                        )
                      )}

                    </div>

                  </div>
                )}

              </div>

            </div>
          )}

        </section>

        {/* IMPORTANT TIP */}
        <section className="checker-tip">

          <div className="checker-tip-icon">
            🛡️
          </div>

          <div>

            <span className="section-label">
              IMPORTANT
            </span>

            <h2>
              A checker is not a guarantee.
            </h2>

            <p>
              Scam messages can change their wording and may not
              always contain obvious warning signs. Always verify
              the sender through an official source before sharing
              sensitive information or making payments.
            </p>

          </div>

        </section>

      </main>

    </div>
  )
}

export default Checker