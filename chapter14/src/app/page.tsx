"use client"
import Counter from "../../components/Counter";
export default function Home() {
  return (
    <main >
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </main>
  );
}
