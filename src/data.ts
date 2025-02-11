import { Book, Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "What type of books do you usually read?",
    optionA: "World classics",
    optionB: "Contemporary books",
    tag: "era"
  },
  {
    id: 2,
    text: "Do you prefer books with a happy ending?",
    optionA: "Must have a happy ending",
    optionB: "Any ending is fine",
    tag: "ending"
  },
  {
    id: 3,
    text: "Which do you prefer?",
    optionA: "Character-driven stories",
    optionB: "Plot-driven stories",
    tag: "focus"
  },
  {
    id: 4,
    text: "What's your ideal book length?",
    optionA: "Under 400 pages",
    optionB: "Over 400 pages",
    tag: "length"
  },
  {
    id: 5,
    text: "Do you prefer?",
    optionA: "Single perspective",
    optionB: "Multiple perspectives",
    tag: "perspective"
  },
  {
    id: 6,
    text: "Which setting interests you more?",
    optionA: "Real world",
    optionB: "Fantasy world",
    tag: "setting"
  },
  {
    id: 7,
    text: "What pace do you prefer?",
    optionA: "Fast-paced",
    optionB: "Slow-burning",
    tag: "pace"
  }
];

// Sample books data - in a real app, this would be much larger
export const books: Book[] = [
  {
    id: "1",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/4/4b/Crimeandpunishmentcover.png",
    description: "A poor ex-student commits murder, struggles with guilt, and seeks redemption through suffering and confession.",
    tags: ["era:classic", "ending:happy", "focus:character", "length:long", "perspective:single", "setting:real", "pace:slow"]
  },
  {
    id: "2",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pickering_-_Greatbatch_-_Jane_Austen_-_Pride_and_Prejudice_-_She_then_told_him_what_Mr._Darcy_had_voluntarily_done_for_Lydia.jpg/330px-Pickering_-_Greatbatch_-_Jane_Austen_-_Pride_and_Prejudice_-_She_then_told_him_what_Mr._Darcy_had_voluntarily_done_for_Lydia.jpg",
    description: "Elizabeth Bennet navigates love, class, and misunderstandings while overcoming her prejudice and Darcy’s pride.",
    tags: ["era:contemporary", "ending:happy", "focus:plot", "length:long", "perspective:single", "setting:real", "pace:fast"]
  },
  {
    id: "3",
    title: "War and Peace",
    author: "Leo Tolstoy",
    coverUrl: "https://m.media-amazon.com/images/I/81W6BFaJJWL._SY466_.jpg",
    description: " Russian aristocrats during the Napoleonic Wars, exploring love, fate, and history.",
    tags: ["era:contemporary", "ending:any", "focus:character", "length:long", "perspective:multiple", "setting:fantasy", "pace:slow"]
  }
];