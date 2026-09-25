import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Checker() {
  const [mode, setMode] = useState('message')
  const [message, setMessage] = useState('')
  const [result, setResult] = useState(null)

  const checkMessage = () => {
    if (!message.trim()) {
      setResult({
        type: 'empty',
        title: 'Enter something first',
        text:
          mode === 'url'
            ? 'Paste a website URL to check for common warning signs.'
            : 'Paste a suspicious message, email or text to check for common warning signs.',
        signs: [],
      })
      return
    }

    const text = message.toLowerCase().trim()

    /* =========================
       URL CHECK
    ========================= */

    if (mode === 'url') {
      const detectedSigns = []

      // HTTP instead of HTTPS
      if (text.startsWith('http://')) {
        detectedSigns.push(
          'The website is using HTTP instead of HTTPS'
        )
      }

      // Shortened or unusual links
      if (
        text.includes('@') ||
        text.includes('bit.ly') ||
        text.includes('tinyurl') ||
        text.includes('t.co/') ||
        text.includes('shorturl')
      ) {
        detectedSigns.push(
          'The URL may contain a shortened or unusual link'
        )
      }

      // Suspicious security/account words
      if (
        text.includes('login') ||
        text.includes('verify') ||
        text.includes('verification') ||
        text.includes('secure') ||
        text.includes('account') ||
        text.includes('signin') ||
        text.includes('sign-in')
      ) {
        detectedSigns.push(
          'The URL contains words commonly used in suspicious links'
        )
      }

      // Urgency words
      if (
        text.includes('urgent') ||
        text.includes('immediately') ||
        text.includes('act-now') ||
        text.includes('actnow') ||
        text.includes('suspended') ||
        text.includes('blocked')
      ) {
        detectedSigns.push(
          'The URL contains urgency or account-warning language'
        )
      }

      // Sensitive information words
      if (
        text.includes('otp') ||
        text.includes('password') ||
        text.includes('cvv') ||
        text.includes('card') ||
        text.includes('bank') ||
        text.includes('pin')
      ) {
        detectedSigns.push(
          'The URL contains words related to sensitive account or payment information'
        )
      }

      // Promotional/reward words
      if (
        text.includes('free') ||
        text.includes('prize') ||
        text.includes('winner') ||
        text.includes('reward') ||
        text.includes('offer') ||
        text.includes('bonus')
      ) {
        detectedSigns.push(
          'The URL contains promotional or reward-related words'
        )
      }

      // Long URL
      if (text.length > 100) {
        detectedSigns.push(
          'The URL is unusually long'
        )
      }

      // Query parameters
      const questionMarkCount = (text.match(/\?/g) || []).length
      const equalsCount = (text.match(/=/g) || []).length
      const ampersandCount = (text.match(/&/g) || []).length

      if (
        questionMarkCount > 0 &&
        (equalsCount >= 2 || ampersandCount >= 1)
      ) {
        detectedSigns.push(
          'The URL contains multiple tracking or query parameters'
        )
      }

      // IP address instead of normal domain
      if (
        /^\d{1,3}(\.\d{1,3}){3}/.test(
          text.replace(/^https?:\/\//, '')
        )
      ) {
        detectedSigns.push(
          'The website uses an IP address instead of a normal domain name'
        )
      }

      // Suspicious URL structure
      if (
        text.includes('//') &&
        text.replace(/^https?:\/\//, '').includes('//')
      ) {
        detectedSigns.push(
          'The URL contains an unusual URL structure'
        )
      }

      // Multiple hyphens in domain/path
      const domainPart = text
        .replace(/^https?:\/\//, '')
        .split('/')[0]

      const hyphenCount = (domainPart.match(/-/g) || []).length

      if (hyphenCount >= 2) {
        detectedSigns.push(
          'The domain contains multiple hyphens and may imitate a trusted website'
        )
      }

      /* =========================
         REMOVE DUPLICATES
      ========================= */

      const uniqueSigns = [...new Set(detectedSigns)]

      /* =========================
         URL RESULT
      ========================= */

      if (uniqueSigns.length >= 3) {
        setResult({
          type: 'high',
          title: 'Multiple URL warning signs detected',
          text:
            'This URL contains several patterns commonly associated with suspicious links. Avoid opening it or entering personal information until you independently verify the website.',
          signs: uniqueSigns,
        })
      } else if (uniqueSigns.length > 0) {
        setResult({
          type: 'medium',
          title: 'Some URL warning signs detected',
          text:
            'This URL contains one or more patterns that may require caution. Verify the website address before entering personal or financial information.',
          signs: uniqueSigns,
        })
      } else {
        setResult({
          type: 'safe',
          title: 'No obvious URL warning signs found',
          text:
            'No common warning patterns were detected in this URL. This does not guarantee that the website is safe. Always verify the domain before entering sensitive information.',
          signs: [],
        })
      }

      return
    }

    /* =========================
       MESSAGE CHECK
    ========================= */

    const warningPatterns = [
      {
        keywords: ['otp', 'one time password'],
        sign: 'Requests for an OTP or verification code',
      },
      {
        keywords: [
          'urgent',
          'immediately',
          'act now',
          'last chance',
          'within 30 minutes',
        ],
        sign: 'Creates urgency or pressure',
      },
      {
        keywords: [
          'click here',
          'click the link',
          'verify now',
          'click this link',
        ],
        sign: 'Asks you to click a link or verify immediately',
      },
      {
        keywords: [
          'upi',
          'qr code',
          'scan qr',
        ],
        sign: 'Mentions a UPI payment or QR code',
      },
      {
        keywords: [
          'prize',
          'winner',
          'won',
          'lottery',
          'reward',
        ],
        sign: 'Promises a prize, reward or unexpected money',
      },
      {
        keywords: [
          'job offer',
          'work from home',
          'registration fee',
        ],
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

  const changeMode = (newMode) => {
    setMode(newMode)
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

      {/* MAIN */}

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
            Check a suspicious message or website URL for
            common warning signs that may indicate a scam.
          </p>

        </section>

        {/* CHECKER */}

        <section className="checker-container">

          <div className="checker-card">

            <div className="checker-card-header">

              <div>
                <h2>
                  {mode === 'message'
                    ? 'Check a suspicious message'
                    : 'Check a suspicious URL'}
                </h2>
              </div>

              <div className="checker-icon">
                🔍
              </div>

            </div>

            {/* MODE BUTTONS */}

            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '20px',
              }}
            >

              <button
                type="button"
                onClick={() => changeMode('message')}
                className={
                  mode === 'message'
                    ? 'check-button'
                    : 'clear-button'
                }
              >
                📝 Message
              </button>

              <button
                type="button"
                onClick={() => changeMode('url')}
                className={
                  mode === 'url'
                    ? 'check-button'
                    : 'clear-button'
                }
              >
                🔗 URL
              </button>

            </div>

            {/* INPUT */}

            <textarea
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder={
                mode === 'message'
                  ? 'Example: Congratulations! You have won a prize. Click here to claim your reward...'
                  : 'Example: https://example.com'
              }
              className="checker-textarea"
              rows={mode === 'url' ? 3 : 8}
            />

            {/* ACTIONS */}

            <div className="checker-actions">

              <button
                type="button"
                className="check-button"
                onClick={checkMessage}
              >

                <span>
                  {mode === 'url'
                    ? 'Check URL'
                    : 'Check for scam signs'}
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
              Scam messages and websites can change their
              appearance and wording. Always verify the sender
              and website through an official source before
              sharing sensitive information or making payments.
            </p>

          </div>

        </section>

      </main>

    </div>
  )
}

export default Checker