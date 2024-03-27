"use client"

import { useState, useEffect, useCallback, useMemo, MouseEvent, KeyboardEvent, useRef } from 'react'

interface User{
  id: number,
  username: string,
}

type fibFun = (n: number) => number

const fib: fibFun = (n) =>{
  if(n < 2) return n
  return fib(n - 1) + fib(n - 2)

}

const myNum: number = 37

function Home() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() =>{
    console.log('mounting')
    console.log('Users: ', users)

    return() => console.log('unmounting')

  },[users])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2),[])

  const result = useMemo(() => fib(myNum),[myNum])

  return (
    <>
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(prev => prev + 1)} >add </button>
        <h2>{result}</h2>
        <input ref={inputRef} type='text'></input>
    </div>
    </>
  )
}

export default Home