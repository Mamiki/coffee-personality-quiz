import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "linear-gradient(135deg, #FF6B6B, #FFE66D, #4ECDC4)",
      }}
    >
      <Quiz />
    </main>
  );
}
