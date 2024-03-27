"use client"
import Counter from "../../components/Counter";
import { CounterProvider } from "../../context/CounterContext";
import initState from "../../context/CounterContext"

function Home() {
  return (
    <>

      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </>
  );
}


export default Home;