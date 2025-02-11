export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  tags: string[];
}

export interface Question {
  id: number;
  text: string;
  optionA: string;
  optionB: string;
  tag: string;
}