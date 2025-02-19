"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/bgstadium.jpg"
        className="absolute top-0 left-0 w-screen -z-10 h-screen"
        width={1920}
        height={1080}
      />
      <p></p>
      <Link href="/login" className="btn btn-link">
        Go To Dashboard
      </Link>
    </div>
  );
}
