import { useState } from 'preact/hooks';

export default function VdoBox({ source, setRef }) {
  return (
    <>
      <video className="object-fill h-full w-full" autoplay="autoplay" controls muted ref={setRef}>
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
