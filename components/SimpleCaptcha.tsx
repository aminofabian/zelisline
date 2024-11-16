'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface SimpleCaptchaProps {
  onValidate: (isValid: boolean) => void;
}

export const SimpleCaptcha: React.FC<SimpleCaptchaProps> = ({ onValidate }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [operator, setOperator] = useState('+');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateNewProblem = () => {
    setIsAnimating(true);
    const operators = ['+', '-', 'x'];
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    const newOperator = operators[Math.floor(Math.random() * operators.length)];
    
    setNum1(newNum1);
    setNum2(newNum2);
    setOperator(newOperator);
    setUserAnswer('');
    setIsCorrect(null);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const calculateCorrectAnswer = () => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      default:
        return 0;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserAnswer(value);
    
    const correctAnswer = calculateCorrectAnswer();
    const isValid = parseInt(value) === correctAnswer;
    setIsCorrect(value === '' ? null : isValid);
    onValidate(isValid);
  };

  useEffect(() => {
    generateNewProblem();
  }, []);

  return (
    <div className="relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-100"
      >
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-700 font-semibold">
              Human Verification
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={generateNewProblem}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Generate new problem"
            >
              <RefreshCw className="w-4 h-4 text-gray-500" />
            </motion.button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.div
              animate={{ scale: isAnimating ? 0.95 : 1, opacity: isAnimating ? 0.5 : 1 }}
              className="flex items-center justify-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg p-4 min-w-[180px]"
            >
              <motion.span
                key={`${num1}${operator}${num2}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl font-semibold text-gray-800 flex items-center space-x-3"
              >
                <span>{num1}</span>
                <span className="text-orange-500">{operator}</span>
                <span>{num2}</span>
                <span>=</span>
              </motion.span>
            </motion.div>

            <div className="relative flex-1 min-w-[120px]">
              <input
                type="number"
                value={userAnswer}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors
                  ${isCorrect === null 
                    ? 'border-gray-200 focus:border-orange-500' 
                    : isCorrect 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-red-500 bg-red-50'
                  }`}
                placeholder="Your answer"
              />
              {isCorrect !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 
                    ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
                >
                  {isCorrect ? '✓' : '✗'}
                </motion.div>
              )}
            </div>
          </div>

          <div className="text-sm text-gray-500">
            {isCorrect === false && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500"
              >
                Incorrect answer. Please try again.
              </motion.p>
            )}
            {isCorrect === true && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500"
              >
                Correct! You can now submit the form.
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -left-2 w-20 h-20 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
    </div>
  );
};

export default SimpleCaptcha;
