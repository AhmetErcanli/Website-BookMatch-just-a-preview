import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="group bg-gradient-to-br from-blue-500/10 to-blue-600/10 
                    rounded-2xl overflow-hidden transition-all duration-300 
                    hover:scale-105 backdrop-blur-sm border border-blue-300/10">
      <div className="relative h-72 overflow-hidden">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-xl text-white mb-2">{book.title}</h3>
        <p className="text-blue-200 text-sm mb-3">by {book.author}</p>
        <p className="text-blue-100 text-sm leading-relaxed">{book.description}</p>
      </div>
    </div>
  );
}