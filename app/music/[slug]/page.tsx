'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

type BookSection = {
  title: string;
  scripture?: string;
  content: string[];
};

type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  sections: BookSection[];
};

// REPLACE THIS WITH YOUR ACTUAL BOOK DATA
const BOOKS: Record<string, Book> = {
  'genesis': {
    slug: 'genesis',
    title: 'Genesis',
    subtitle: 'In the beginning',
    sections: [
      {
        title: 'Creation',
        scripture: 'Genesis 1:1',
        content: ['In the beginning God created the heavens and the earth.']
      }
    ]
  }
  // Add your other books here
};

export default function BookPage({ params }: { params: { slug: string } }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const book = BOOKS[params.slug];

  if (!book) return notFound();

  // FIXED: TypeScript error on line 47 - added null check + proper typing
  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // FIX: Check that book exists and has title before using it
    if (!book?.title) return;

    const firstSection = book.sections?.[0];
    const text = `${book.title}. ${firstSection?.scripture || ''}. ${firstSection?.content?.[0] || ''}`;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 0.7;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    // Cleanup speech on unmount
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black mb-2">{book.title}</h1>
        {book.subtitle && <p className="text-zinc-400 text-xl mb-8">{book.subtitle}</p>}

        <button
          onClick={handleSpeak}
          className="mb-12 bg-amber-600 hover:bg-amber-500 px-6 py-3 rounded-lg font-bold"
        >
          {isSpeaking? '⏸️ Stop Reading' : '▶️ Read Aloud'}
        </button>

        <div className="space-y-12">
          {book.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-amber-500 mb-2">{section.title}</h2>
              {section.scripture && (
                <p className="text-zinc-500 italic mb-4">{section.scripture}</p>
              )}
              {section.content.map((para, j) => (
                <p key={j} className="text-lg leading-relaxed text-zinc-300 mb-4">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
