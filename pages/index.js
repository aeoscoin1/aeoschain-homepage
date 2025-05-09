import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <Head>
        <title>AeosChain</title>
      </Head>
      <h1 className="text-5xl font-bold mb-4">AeosChain</h1>
      <h2 className="text-xl mb-8">A New Era of Metaphase Blockchain</h2>
      <div className="flex space-x-4">
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">Get Started</button>
        <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition">Read Whitepaper</button>
      </div>
    </div>
  );
}