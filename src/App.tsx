import React, { useState } from 'react';
import { Book, Question } from './types';
import { questions, books } from './data';
import { BookCard } from './components/BookCard';
import { QuestionCard } from './components/QuestionCard';
import { BookIcon } from 'lucide-react';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<Book[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnswer = (answer: 'A' | 'B') => {
    setIsAnimating(true);
    setTimeout(() => {
      const newAnswers = [...userAnswers, answer];
      setUserAnswers(newAnswers);

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const filteredBooks = generateRecommendations(newAnswers);
        setRecommendations(filteredBooks);
      }
      setIsAnimating(false);
    }, 500);
  };

  const generateRecommendations = (answers: string[]): Book[] => {
    return books.slice(0, 3);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setRecommendations([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 flex flex-col">
      <div className="flex-1 container mx-auto px-4 flex flex-col">
        {/* Header */}
        <div className={`text-center transition-all duration-500 ease-out ${
          currentQuestion > 0 ? 'pt-8' : 'flex-1 flex flex-col justify-center'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookIcon className="w-10 h-10 text-blue-300" />
            <h1 className="text-5xl font-bold text-white tracking-tight">BookMatch</h1>
          </div>
          <p className="text-blue-200 text-lg">Discover your next favorite book</p>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full">
          {recommendations.length === 0 ? (
            <>
              {currentQuestion === 0 && (
                <div className="text-center animate-fade-in mt-8">
                  <button
                    onClick={() => setCurrentQuestion(1)}
                    className="bg-blue-500 text-white px-12 py-4 rounded-2xl text-xl font-semibold shadow-lg 
                             hover:bg-blue-400 hover:shadow-blue-400/50 hover:scale-105 
                             transition-all duration-300 ease-out
                             border border-blue-400/30 backdrop-blur-sm"
                  >
                    Start Your Journey
                  </button>
                </div>
              )}
              
              {currentQuestion > 0 && (
                <div className={`flex-1 flex flex-col justify-center transition-all duration-500 ${
                  isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}>
                  <QuestionCard
                    question={questions[currentQuestion - 1]}
                    onAnswer={handleAnswer}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="space-y-8 animate-fade-in py-8">
              <h2 className="text-3xl font-semibold text-center text-white mb-12">
                Your Perfect Matches
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {recommendations.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  onClick={resetQuiz}
                  className="bg-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold
                           hover:bg-blue-400 hover:shadow-lg hover:scale-105
                           transition-all duration-300 ease-out
                           border border-blue-400/30 backdrop-blur-sm"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;