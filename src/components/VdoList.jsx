import { useEffect, useState, useRef } from 'preact/hooks';

export default function VdoList({ source, name, onChangeVdo }) {
  const vdoRef = useRef(null);

  const setAutoPlay = (boolean) => {
    const v = vdoRef.current;
    if (boolean) {
      v.play();
    } else {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <>
      <div
        className="flex pb-4 cursor-pointer"
        onClick={onChangeVdo}
        onMouseEnter={() => {
          setAutoPlay(true);
        }}
        onMouseLeave={() => {
          setAutoPlay(false);
        }}
      >
        <video
          className="h-[100px] w-[177px]"
          ref={vdoRef}
          muted
          autoPlay={false}
          preload="auto"
        >
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="px-4">
          <span className="capitalize text-sm">test video {name}</span>
        </div>
      </div>
    </>
  );
}
