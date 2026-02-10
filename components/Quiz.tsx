"use client";

import { useState } from "react";

type PersonalityKey = "bold" | "sweet" | "social" | "indulgent";

interface Personality {
  name: string;
  coffee: string;
  tagline: string;
  color: string;
  emoji: string;
}

interface AnswerOption {
  emoji: string;
  text: string;
  personality: PersonalityKey;
}

interface Question {
  text: string;
  options: AnswerOption[];
}

const personalities: Record<PersonalityKey, Personality> = {
  bold: {
    name: "Bold Adventurer",
    coffee: "Double Espresso",
    tagline: "You live life at full intensity — no half measures!",
    color: "#FF6B6B",
    emoji: "🔥",
  },
  sweet: {
    name: "Sweet Enthusiast",
    coffee: "Vanilla Latte",
    tagline: "Life is better with a little sweetness in every sip.",
    color: "#FFB347",
    emoji: "🍬",
  },
  social: {
    name: "Social Butterfly",
    coffee: "Café au Lait",
    tagline: "Coffee is best when shared — you're everyone's favorite company!",
    color: "#4ECDC4",
    emoji: "🦋",
  },
  indulgent: {
    name: "Indulgent Treat",
    coffee: "Mocha Frappuccino",
    tagline: "Why choose between coffee and dessert when you can have both?",
    color: "#A78BFA",
    emoji: "✨",
  },
};

const questions: Question[] = [
  {
    text: "How do you start your morning?",
    options: [
      { emoji: "⚡", text: "Jump out of bed ready to conquer the day", personality: "bold" },
      { emoji: "🌸", text: "Ease in slowly with a cozy ritual", personality: "sweet" },
      { emoji: "📱", text: "Check messages and catch up with friends", personality: "social" },
      { emoji: "🛁", text: "Treat myself to a luxurious routine", personality: "indulgent" },
    ],
  },
  {
    text: "Pick your ideal weekend activity:",
    options: [
      { emoji: "🧗", text: "Rock climbing or extreme sports", personality: "bold" },
      { emoji: "🍰", text: "Baking and trying new recipes", personality: "sweet" },
      { emoji: "🎉", text: "Brunch with a big group of friends", personality: "social" },
      { emoji: "🛍️", text: "Spa day and shopping", personality: "indulgent" },
    ],
  },
  {
    text: "Your go-to comfort when stressed?",
    options: [
      { emoji: "🏃", text: "Intense workout to burn it off", personality: "bold" },
      { emoji: "🍫", text: "Something sweet and warm", personality: "sweet" },
      { emoji: "💬", text: "Vent to your best friend", personality: "social" },
      { emoji: "🛋️", text: "Curl up with Netflix and snacks", personality: "indulgent" },
    ],
  },
  {
    text: "How would your friends describe you?",
    options: [
      { emoji: "💪", text: "Fearless and driven", personality: "bold" },
      { emoji: "🤗", text: "Warm and nurturing", personality: "sweet" },
      { emoji: "😄", text: "The life of the party", personality: "social" },
      { emoji: "👑", text: "Glamorous and fun-loving", personality: "indulgent" },
    ],
  },
  {
    text: "What's your ideal vacation?",
    options: [
      { emoji: "🏔️", text: "Backpacking through rugged mountains", personality: "bold" },
      { emoji: "🌻", text: "Quaint countryside with local food tours", personality: "sweet" },
      { emoji: "🏖️", text: "Beach resort with a huge group", personality: "social" },
      { emoji: "🏰", text: "Luxury hotel with all the amenities", personality: "indulgent" },
    ],
  },
  {
    text: "Pick your coffee shop vibe:",
    options: [
      { emoji: "☕", text: "Standing espresso bar — quick and powerful", personality: "bold" },
      { emoji: "🌷", text: "Cute café with flower arrangements", personality: "sweet" },
      { emoji: "🗣️", text: "Lively spot with communal tables", personality: "social" },
      { emoji: "🥂", text: "Upscale lounge with fancy pastries", personality: "indulgent" },
    ],
  },
];

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityKey[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<PersonalityKey | null>(null);

  const handleStart = () => setStarted(true);

  const handleAnswer = (personality: PersonalityKey) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(personality);

    setTimeout(() => {
      const newAnswers = [...answers, personality];
      setAnswers(newAnswers);
      setSelectedAnswer(null);

      if (currentQuestion + 1 >= questions.length) {
        setShowResults(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 600);
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const calculateResults = () => {
    const counts: Record<PersonalityKey, number> = { bold: 0, sweet: 0, social: 0, indulgent: 0 };
    answers.forEach((a) => counts[a]++);
    const total = answers.length;
    return (Object.keys(counts) as PersonalityKey[])
      .map((key) => ({
        key,
        ...personalities[key],
        count: counts[key],
        percentage: Math.round((counts[key] / total) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage);
  };

  // Intro screen
  if (!started) {
    return (
      <div style={styles.card}>
        <div style={styles.introEmoji}>☕</div>
        <h1 style={styles.title}>What&apos;s Your Coffee Personality?</h1>
        <p style={styles.subtitle}>
          Answer 6 quick questions to discover which coffee drink matches your soul.
        </p>
        <button style={styles.startButton} onClick={handleStart}>
          Start the Quiz ✨
        </button>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    const results = calculateResults();
    const top = results[0];
    return (
      <div style={styles.card}>
        <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{top.emoji}</div>
        <h2 style={{ ...styles.title, fontSize: "1.6rem", marginBottom: "0.25rem" }}>
          You are a...
        </h2>
        <h1 style={{ ...styles.title, fontSize: "2.2rem", color: top.color, marginBottom: "0.5rem" }}>
          {top.name}
        </h1>
        <p style={{ ...styles.subtitle, marginBottom: "0.25rem" }}>
          ☕ Your drink: <strong>{top.coffee}</strong>
        </p>
        <p style={{ ...styles.subtitle, fontStyle: "italic", marginBottom: "2rem" }}>
          &ldquo;{top.tagline}&rdquo;
        </p>

        <div style={styles.resultsContainer}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem", color: "#555" }}>
            YOUR FULL BREAKDOWN
          </h3>
          {results.map((r, i) => (
            <div key={r.key} style={styles.resultRow}>
              <div style={styles.resultLabel}>
                <span style={{ marginRight: "0.4rem" }}>{r.emoji}</span>
                <span style={{ fontWeight: 700, color: "#333" }}>{r.name}</span>
                {i === 0 && (
                  <span style={{ ...styles.badge, backgroundColor: r.color }}>Top Match</span>
                )}
              </div>
              <div style={styles.barContainer}>
                <div
                  style={{
                    ...styles.barFill,
                    width: `${r.percentage}%`,
                    backgroundColor: r.color,
                  }}
                />
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: r.color, minWidth: "3rem", textAlign: "right" }}>
                {r.percentage}%
              </div>
            </div>
          ))}
        </div>

        <button style={styles.restartButton} onClick={handleRestart}>
          Take it again 🔄
        </button>
      </div>
    );
  }

  // Question screen
  const q = questions[currentQuestion];
  const progress = (currentQuestion / questions.length) * 100;

  return (
    <div style={styles.card}>
      <div style={styles.progressContainer}>
        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>
        <span style={styles.progressLabel}>
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      <h2 style={styles.questionText}>{q.text}</h2>

      <div style={styles.optionsGrid}>
        {q.options.map((option) => {
          const isSelected = selectedAnswer === option.personality;
          return (
            <button
              key={option.personality}
              style={{
                ...styles.optionButton,
                ...(isSelected ? styles.optionSelected : {}),
              }}
              onClick={() => handleAnswer(option.personality)}
              disabled={selectedAnswer !== null}
            >
              <span style={styles.optionEmoji}>{option.emoji}</span>
              <span style={styles.optionText}>{option.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "#fff",
    borderRadius: "32px",
    boxShadow: "8px 8px 0px #FF6B6B",
    padding: "2.5rem",
    maxWidth: "560px",
    width: "100%",
    textAlign: "center",
    fontFamily: "'Nunito', sans-serif",
  },
  introEmoji: {
    fontSize: "4rem",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "1.9rem",
    fontWeight: 900,
    color: "#333",
    marginBottom: "1rem",
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "2rem",
    lineHeight: 1.6,
  },
  startButton: {
    background: "linear-gradient(135deg, #FF6B6B, #FFE66D)",
    border: "none",
    borderRadius: "50px",
    padding: "0.9rem 2.5rem",
    fontSize: "1.1rem",
    fontWeight: 800,
    color: "#333",
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
    boxShadow: "4px 4px 0px #FF6B6B",
    transition: "transform 0.1s",
  },
  progressContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "2rem",
  },
  progressTrack: {
    flex: 1,
    height: "10px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #FF6B6B, #FFE66D, #4ECDC4)",
    borderRadius: "10px",
    transition: "width 0.4s ease",
  },
  progressLabel: {
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "#999",
    minWidth: "3rem",
    textAlign: "right",
  },
  questionText: {
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "#333",
    marginBottom: "1.5rem",
    lineHeight: 1.4,
  },
  optionsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
  },
  optionButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.4rem",
    padding: "1rem 0.75rem",
    background: "#fafafa",
    border: "2px solid #eee",
    borderRadius: "16px",
    cursor: "pointer",
    transition: "all 0.15s ease",
    fontFamily: "'Nunito', sans-serif",
  },
  optionSelected: {
    background: "linear-gradient(135deg, #FF6B6B22, #FFE66D44)",
    border: "2px solid #FF6B6B",
    transform: "scale(1.03)",
  },
  optionEmoji: {
    fontSize: "1.8rem",
  },
  optionText: {
    fontSize: "0.82rem",
    fontWeight: 700,
    color: "#444",
    lineHeight: 1.3,
  },
  resultsContainer: {
    textAlign: "left",
    marginBottom: "2rem",
  },
  resultRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "0.85rem",
  },
  resultLabel: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    minWidth: "175px",
    fontSize: "0.85rem",
  },
  badge: {
    fontSize: "0.65rem",
    fontWeight: 800,
    color: "#fff",
    padding: "0.1rem 0.4rem",
    borderRadius: "20px",
    marginLeft: "0.25rem",
  },
  barContainer: {
    flex: 1,
    height: "12px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: "10px",
    transition: "width 0.6s ease",
  },
  restartButton: {
    background: "#f5f5f5",
    border: "2px solid #ddd",
    borderRadius: "50px",
    padding: "0.75rem 2rem",
    fontSize: "1rem",
    fontWeight: 800,
    color: "#555",
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
    transition: "all 0.15s",
  },
};
