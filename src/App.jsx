import ScrollToTop from './ScrollToTop'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Learn from './pages/Learn'
import Checker from './pages/Checker'
import Quiz from './pages/Quiz'
import Safety from './pages/Safety'
import ScamDetails from './pages/ScamDetails'

function Home() {
  return (
    <div className="app">

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

        <Link to="/checker" className="nav-button">
          Check Now
        </Link>

      </header>


      <main>

        {/* HERO */}

        <section className="hero-section" id="home">

          <div className="hero-content">

            <div className="badge">
              🛡️ Online Safety Awareness
            </div>

            <h1>
              Stay One Step Ahead
              <span> of Online Scams.</span>
            </h1>

            <p>
              Learn how to identify phishing, fraud and online scams
              before they put your personal information or money at risk.
            </p>

            <div className="hero-buttons">

              <Link
                to="/checker"
                className="primary-button"
              >
                Check a Suspicious Message →
              </Link>

              <Link
                to="/learn"
                className="secondary-button"
              >
                Learn About Scams
              </Link>

            </div>

            <div className="trust-text">
              🔒 Learn • Detect • Stay Safe
            </div>

          </div>


          <div className="hero-visual">

            <div className="shield-circle">
              🛡️
            </div>

            <div className="floating-card card-one">

              ⚠️

              <div>
                <strong>Scam Alert</strong>
                <small>Stay protected</small>
              </div>

            </div>


            <div className="floating-card card-two">

              ✓

              <div>
                <strong>Safe & Secure</strong>
                <small>Your awareness matters</small>
              </div>

            </div>

          </div>

        </section>


        {/* COMMON THREATS */}

        <section
          className="scam-section"
          id="learn"
        >

          <div className="section-heading">

            <span>COMMON THREATS</span>

            <h2>
              Know the scams. Avoid the risks.
            </h2>

            <p>
              Understanding common scams is the first step toward
              protecting yourself online.
            </p>

          </div>


          <div className="scam-grid">

            <div className="scam-card">

              <div className="card-icon">
                🎣
              </div>

              <h3>
                Phishing Scams
              </h3>

              <p>
                Fake emails, messages and websites designed to steal
                your information.
              </p>

              <Link to="/learn">
                Learn more →
              </Link>

            </div>


            <div className="scam-card">

              <div className="card-icon">
                💳
              </div>

              <h3>
                UPI Scams
              </h3>

              <p>
                Fraudulent payment requests and tricks that target
                digital payment users.
              </p>

              <Link to="/learn">
                Learn more →
              </Link>

            </div>


            <div className="scam-card">

              <div className="card-icon">
                🔐
              </div>

              <h3>
                OTP Scams
              </h3>

              <p>
                Scammers pretending to be trusted organizations to
                obtain your OTP or account details.
              </p>

              <Link to="/learn">
                Learn more →
              </Link>

            </div>


            <div className="scam-card">

              <div className="card-icon">
                💼
              </div>

              <h3>
                Fake Job Scams
              </h3>

              <p>
                Fake job offers that may ask for money or sensitive
                personal information.
              </p>

              <Link to="/learn">
                Learn more →
              </Link>

            </div>

          </div>

        </section>


        {/* HOW SCAMSHIELD HELPS */}

        <section
          className="help-section"
          id="checker"
        >

          <div className="help-content">

            <span>
              HOW SCAMSHIELD HELPS
            </span>

            <h2>
              Think before you
              <span> click.</span>
            </h2>

            <p>
              ScamShield gives you simple information and tools to
              recognize suspicious online activity and make safer
              decisions.
            </p>


            <div className="feature-list">

              <div>
                <b>01</b>
                <span>
                  Identify common scam patterns
                </span>
              </div>

              <div>
                <b>02</b>
                <span>
                  Learn practical online safety habits
                </span>
              </div>

              <div>
                <b>03</b>
                <span>
                  Test your knowledge with our quiz
                </span>
              </div>

            </div>


            <Link
              to="/checker"
              className="primary-button"
            >
              Try Scam Checker →
            </Link>

          </div>


          <div className="checker-card">

            <div className="checker-top">

              <span>
                SCAM CHECKER
              </span>

              <span>
                ● ONLINE
              </span>

            </div>


            <div className="message-box">

              <small>
                Suspicious message
              </small>

              <p>
                "Congratulations! You have won a reward.
                Click this link to claim it now."
              </p>

            </div>


            <div className="warning-result">

              <div className="warning-icon">
                !
              </div>

              <div>

                <strong>
                  Potentially suspicious
                </strong>

                <p>
                  Check the sender and link before taking action.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* QUIZ */}

        <section
          className="quiz-section"
          id="quiz"
        >

          <div>

            <span>
              TEST YOUR KNOWLEDGE
            </span>

            <h2>
              Could you spot a scam?
            </h2>

            <p>
              Take our quick awareness quiz and learn how to identify
              common online fraud attempts.
            </p>

            <Link
              to="/quiz"
              className="primary-button"
            >
              Take the Quiz →
            </Link>

          </div>


          <div className="quiz-number">

            <strong>
              10
            </strong>

            <span>
              Questions
            </span>

          </div>

        </section>


        {/* SAFETY */}

        <section
          className="safety-section"
          id="safety"
        >

          <div className="section-heading">

            <span>
              STAY SAFE
            </span>

            <h2>
              Simple habits. Strong protection.
            </h2>

          </div>


          <div className="safety-grid">

            <div>

              <strong>
                🔒 Protect your passwords
              </strong>

              <p>
                Use strong and unique passwords for important accounts.
              </p>

            </div>


            <div>

              <strong>
                🚫 Never share OTPs
              </strong>

              <p>
                Legitimate organizations do not need your OTP.
              </p>

            </div>


            <div>

              <strong>
                🔗 Check links carefully
              </strong>

              <p>
                Look carefully before opening unknown links.
              </p>

            </div>


            <div>

              <strong>
                📢 Verify urgent requests
              </strong>

              <p>
                Take a moment to verify unexpected requests for money
                or information.
              </p>

            </div>

          </div>


          {/* VIEW ALL SAFETY TIPS */}

          <Link
            to="/safety"
            className="primary-button"
          >
            View All Safety Tips →
          </Link>

        </section>

      </main>


      {/* FOOTER */}

      <footer>

        <div>

          <div className="logo">
            🛡️ <span>ScamShield</span>
          </div>

          <p>
            Phishing, Scam & Fraud Detection Awareness Program
          </p>

        </div>

        <p>
          © 2026 ScamShield • CEP Project
        </p>

      </footer>

    </div>
  )
}


function App() {

  return (

    <BrowserRouter>

    <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/learn"
          element={<Learn />}
        />

        <Route
          path="/checker"
          element={<Checker />}
        />

        <Route
          path="/quiz"
          element={<Quiz />}
        />

        <Route
          path="/safety"
          element={<Safety />}
        />

        <Route
  path="/scam/:type"
  element={<ScamDetails />}
/>

      </Routes>

    </BrowserRouter>

  )
}

export default App