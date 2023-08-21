import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div >
        <h1>QuizImac</h1>
        <Link href="/quiz">
          <button>Commencer le Quiz !</button>
        </Link>
      </div>
    </main>
  );
}
