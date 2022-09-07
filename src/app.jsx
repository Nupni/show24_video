import { useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import './app.css';
import { Link } from 'preact-router/match';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="h-screen w-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 uppercase text-xl font-bold">
          <h1 className="text-4xl text-center mb-8 col-span-2">test 24 video</h1>
          <Link href="/pure" className="hover:underline">
            pure js
            {/* <img src={preactLogo} class="logo preact" alt="Preact logo" /> */}
          </Link>
          <Link href="/lib" className="hover:underline">
            react library
          </Link>
        </div>
      </section>
    </>
  );
}
