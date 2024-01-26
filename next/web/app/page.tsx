import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{ fontSize: '50px' }}>
      <div className="z-10 max-w-5xl w-full flex items-center justify-center font-merriweather lg:flex">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <p className="pl-2">SuspectSoftware</p>
      </div>
    </main>
  );
}