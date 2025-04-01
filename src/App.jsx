import { useState } from "react";

const messages = [
  "Learn Web Development",
  "Practice code challenges",
  "Practice React",
  "Make interactive web pages",
  "Apply for jobs",
  "Invest your new income",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((s) => s + 1);
  }

  return (
    <>
      <h1 className="header">Journey To Success!</h1>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((_, i) => (
              <div
                key={i}
                className={step >= i + 1 ? "active" : ""}
                onClick={() => setStep(i + 1)}
                style={{ cursor: "pointer" }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>←</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>→</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
