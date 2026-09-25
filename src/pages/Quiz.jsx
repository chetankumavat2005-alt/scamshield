import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Quiz() {
  const questions = [
    {
      question: 'What is phishing?',
      options: [
        'A method of protecting your account',
        'A fake message or website used to steal information',
        'A secure online payment method',
        'A type of antivirus software',
      ],
      answer: 1,
    },
    {
      question: 'What should you do if someone asks for your OTP?',
      options: [
        'Share it if they sound trustworthy',
        'Post it online',
        'Never share it with anyone',
        'Send it to a friend',
      ],
      answer: 2,
    },
    {
      question: 'Which is a common sign of a UPI scam?',
      options: [
        'An unexpected payment request',
        'A normal bank statement',
        'A known contact sending a greeting',
        'A regular online purchase',
      ],
      answer: 0,
    },
    {
      question: 'Why should you be careful with unknown QR codes?',
      options: [
        'They can be used in fraudulent payment requests',
        'They always contain viruses',
        'They make your phone slower',
        'They increase your internet speed',
      ],
      answer: 0,
    },
    {
      question: 'Which could be a warning sign of a fake job offer?',
      options: [
        'A proper interview process',
        'A company email address',
        'A request for a registration fee',
        'A detailed job description',
      ],
      answer: 2,
    },
    {
      question: 'What should you do before clicking an unknown link?',
      options: [
        'Click it immediately',
        'Check the sender and link carefully',
        'Forward it to everyone',
        'Enter your password first',
      ],
      answer: 1,
    },
    {
      question: 'What should you do when a message creates extreme urgency?',
      options: [
        'Act immediately',
        'Share your OTP',
        'Pause and independently verify the request',
        'Send money quickly',
      ],
      answer: 2,
    },
    {
      question: 'Which is a warning sign of an investment scam?',
      options: [
        'Guaranteed high returns with little or no risk',
        'A clear explanation of risks',
        'A regulated investment platform',
        'A normal market fluctuation',
      ],
      answer: 0,
    },
    {
      question: 'Which information should you avoid sharing with unknown people?',
      options: [
        'Your favourite colour',
        'Your OTP, password or CVV',
        'A public website name',
        'The weather',
      ],
      answer: 1,
    },
    {
      question: 'What should you do after receiving a suspicious message?',
      options: [
        'Click the link to investigate',
        'Reply with your personal details',
        'Verify it through an official source',
        'Send money to confirm your account',
      ],
      answer: 2,
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [userAnswers, setUserAnswers] = useState([])

  const handleAnswer = (index) => {
    setSelectedAnswer(index)
  }

  const nextQuestion = () => {
    if (selectedAnswer === null) {
      return
    }

    const isCorrect =
      selectedAnswer === questions[currentQuestion].answer

    const newScore = isCorrect ? score + 1 : score

    setScore(newScore)

    setUserAnswers((previousAnswers) => [
      ...previousAnswers,
      selectedAnswer,
    ])

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setUserAnswers([])
  }

  return (
    <div className="quiz-page-wrapper">

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
          <a href="/#safety">Safety Tips</a>
        </nav>

        <Link
          to="/checker"
          className="nav-button"
        >
          Check Now
        </Link>

      </header>

      {/* QUIZ */}

      <main className="quiz-page">

        <section className="quiz-hero">

          <span className="section-label">
            SCAM AWARENESS QUIZ
          </span>

          <h1>
            Could you
            <span> spot a scam?</span>
          </h1>

          <p>
            Test your knowledge with 10 questions about phishing,
            online fraud and digital safety.
          </p>

        </section>

        {!showResult ? (

          <section className="quiz-container">

            {/* PROGRESS */}

            <div className="quiz-progress">

              <div className="quiz-progress-text">

                <span>
                  Question {currentQuestion + 1} of 10
                </span>

                <span>
                  {Math.round(
                    ((currentQuestion + 1) / 10) * 100
                  )}
                  %
                </span>

              </div>

              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: `${((currentQuestion + 1) / 10) * 100}%`,
                  }}
                ></div>

              </div>

            </div>

            {/* QUESTION CARD */}

            <div className="quiz-card">

              <span className="quiz-question-number">
                QUESTION {currentQuestion + 1}
              </span>

              <h2>
                {questions[currentQuestion].question}
              </h2>

              {/* OPTIONS */}

              <div className="quiz-options">

                {questions[currentQuestion].options.map(
                  (option, index) => (

                    <button
                      key={index}
                      type="button"
                      className={
                        selectedAnswer === index
                          ? 'quiz-option selected'
                          : 'quiz-option'
                      }
                      onClick={() => handleAnswer(index)}
                    >

                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span>
                        {option}
                      </span>

                    </button>

                  )
                )}

              </div>

              {/* NEXT BUTTON */}

              <button
                type="button"
                className="primary-button quiz-next-button"
                onClick={nextQuestion}
              >
                {currentQuestion === 9
                  ? 'Finish Quiz'
                  : 'Next Question'}
                {' →'}
              </button>

            </div>

          </section>

        ) : (

          /* RESULT */

          <section className="quiz-result">

            <div className="result-score">

              <span>
                YOUR SCORE
              </span>

              <strong>
                {score}/10
              </strong>

            </div>

            <h2>
              {score >= 8
                ? 'Excellent awareness!'
                : score >= 5
                ? 'Good start!'
                : 'Keep learning!'}
            </h2>

            <p>
              You answered {score} out of 10 questions correctly.
              {score >= 8
                ? ' You have a strong understanding of common scam warning signs.'
                : score >= 5
                ? ' You understand some important scam warning signs, but there is still more to learn.'
                : ' Review the common scam warning signs and safety tips to improve your awareness.'}
            </p>

            {/* REVIEW ANSWERS */}

            <div className="quiz-review">

              <h3>Review Your Answers</h3>

              {questions.map((question, index) => {

                const userAnswer = userAnswers[index]
                const correctAnswer = question.answer
                const isCorrect = userAnswer === correctAnswer

                return (
                  <div
                    key={index}
                    className={`review-item ${
                      isCorrect
                        ? 'review-correct'
                        : 'review-wrong'
                    }`}
                  >

                    <div className="review-question">

                      <span>
                        {isCorrect ? '✓' : '✕'}
                      </span>

                      <strong>
                        Q{index + 1}. {question.question}
                      </strong>

                    </div>

                    <p>
                      <b>Your answer:</b>{' '}

                      {userAnswer !== undefined
                        ? question.options[userAnswer]
                        : 'Not answered'}
                    </p>

                    {!isCorrect && (
                      <p>
                        <b>Correct answer:</b>{' '}
                        {question.options[correctAnswer]}
                      </p>
                    )}

                  </div>
                )

              })}

            </div>

            {/* RESULT BUTTONS */}

            <div className="quiz-result-actions">

              <button
                type="button"
                className="primary-button"
                onClick={restartQuiz}
              >
                Try Again →
              </button>

              <Link
                to="/learn"
                className="secondary-button"
              >
                Learn More
              </Link>

            </div>

          </section>

        )}

      </main>

    </div>
  )
}

export default Quiz