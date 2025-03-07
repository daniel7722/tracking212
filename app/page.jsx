import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          Tracking 212
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          Tracking 212 is a platform for keeping track of your trading journal.
        </p>
        <p className="text-lg text-gray-400 mb-8">
          You can use it to track your trades, your profits, and your losses.
        </p>
        <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105">
          Start Tracking
        </button>
      </div>
    </div>
  );
}
