"use client";

import { useEffect, useState } from "react";
import { Check, RefreshCw, X } from "lucide-react";
import { INPUT_CLASSES } from "@/components/forms/inputStyles";

interface SimpleCaptchaProps {
  onValidate: (isValid: boolean) => void;
}

const OPERATORS = ["+", "-", "x"] as const;
const MAX_OPERAND = 10;
const ANIMATION_MS = 500;

type Operator = (typeof OPERATORS)[number];

const OPERATOR_WORDS: Record<Operator, string> = { "+": "plus", "-": "minus", x: "times" };

const randomOperand = () => Math.floor(Math.random() * MAX_OPERAND) + 1;

const solve = (left: number, right: number, operator: Operator) => {
  if (operator === "+") return left + right;
  if (operator === "-") return left - right;
  return left * right;
};

export const SimpleCaptcha: React.FC<SimpleCaptchaProps> = ({ onValidate }) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [operator, setOperator] = useState<Operator>("+");
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const generateProblem = () => {
    setIsRefreshing(true);
    setLeft(randomOperand());
    setRight(randomOperand());
    setOperator(OPERATORS[Math.floor(Math.random() * OPERATORS.length)]);
    setAnswer("");
    setIsCorrect(null);
    onValidate(false);
    setTimeout(() => setIsRefreshing(false), ANIMATION_MS);
  };

  useEffect(() => {
    generateProblem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValid = parseInt(value, 10) === solve(left, right, operator);
    setAnswer(value);
    setIsCorrect(value === "" ? null : isValid);
    onValidate(isValid);
  };

  const inputState =
    isCorrect === null ? "border-ink" : isCorrect ? "border-ink bg-grey-50" : "border-2 border-ink";

  return (
    <div className="border border-ink bg-grey-50 p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-ink">Human verification</h3>
        <button
          type="button"
          onClick={generateProblem}
          aria-label="Generate a new problem"
          className="flex h-9 w-9 items-center justify-center border border-ink bg-paper hover:bg-ink hover:text-paper"
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} aria-hidden />
        </button>
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-stretch">
        <p id="captcha-prompt" className="sr-only">
          What is {left} {OPERATOR_WORDS[operator]} {right}?
        </p>
        <div
          aria-hidden
          className="display-wide flex min-w-[180px] items-center justify-center gap-3 border border-ink bg-paper px-5 py-4 font-display text-xl font-bold"
        >
          <span>{left}</span>
          <span>{operator}</span>
          <span>{right}</span>
          <span>=</span>
        </div>

        <div className="relative flex-1">
          <label htmlFor="captcha-answer" className="sr-only">
            Answer to the verification question
          </label>
          <input
            id="captcha-answer"
            type="number"
            inputMode="numeric"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Your answer"
            aria-invalid={isCorrect === false}
            aria-describedby="captcha-prompt"
            className={`${INPUT_CLASSES} ${inputState} pr-10`}
          />
          {isCorrect !== null && (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink">
              {isCorrect ? <Check className="h-5 w-5" aria-hidden /> : <X className="h-5 w-5" aria-hidden />}
            </span>
          )}
        </div>
      </div>

      <p className="mt-3 min-h-5 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-muted" aria-live="polite">
        {isCorrect === false && "Incorrect answer. Please try again."}
        {isCorrect === true && "Verified. You can submit the form."}
      </p>
    </div>
  );
};

export default SimpleCaptcha;
