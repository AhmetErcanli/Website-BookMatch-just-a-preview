import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: 'A' | 'B') => void;
}

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold text-white mb-12 text-center tracking-tight">
        {question.text}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 h-[40vh] min-h-[300px]">
        <button
          onClick={() => onAnswer('A')}
          className="group relative w-full h-full text-left rounded-2xl transition-all duration-300
                   bg-gradient-to-br from-gray-600/10 to-gray-700/10
                   hover:from-gray-600/20 hover:to-gray-700/20
                   border border-gray-400/10 hover:border-gray-400/30
                   backdrop-blur-sm hover:scale-105
                   flex items-center justify-center p-8"
        >
          <div className="absolute inset-0 rounded-2xl bg-gray-500/0 group-hover:bg-gray-500/10 transition-colors duration-300" />
          <span className="block text-white text-3xl text-center">{question.optionA}</span>
        </button>
        <button
          onClick={() => onAnswer('B')}
          className="group relative w-full h-full text-left rounded-2xl transition-all duration-300
                   bg-gradient-to-br from-gray-600/10 to-gray-700/10
                   hover:from-gray-600/20 hover:to-gray-700/20
                   border border-gray-400/10 hover:border-gray-400/30
                   backdrop-blur-sm hover:scale-105
                   flex items-center justify-center p-8"
        >
          <div className="absolute inset-0 rounded-2xl bg-gray-500/0 group-hover:bg-gray-500/10 transition-colors duration-300" />
          <span className="block text-white text-3xl text-center">{question.optionB}</span>
        </button>
      </div>
    </div>
  );
}