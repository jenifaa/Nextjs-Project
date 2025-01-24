"use client"
import Link from "next/link";


export default function Home() {
  return (
  <div>
   
     <h2 className="text-3xl font-bold">Hello World</h2>
     <button className="text-2xl btn btn-primary">Heloo</button>
     <Link href="/profile">hel</Link>
     
  </div>
  );
}
