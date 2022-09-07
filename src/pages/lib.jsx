import { useState } from 'preact/hooks';
import Router from 'preact-router';

export default function Lib() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="h-screen w-screen bg-gray-900 text-white">
        lib
      </section>
    </>
  );
}
