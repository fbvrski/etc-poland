"use client";

function ParkingStalls({
  originX,
  originY,
  count,
  vertical,
  delayStart,
}: {
  originX: number;
  originY: number;
  count: number;
  vertical: boolean;
  delayStart: number;
}) {
  const w = vertical ? 22 : 8;
  const h = vertical ? 8 : 22;
  const step = vertical ? 11 : 11;

  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const x = vertical ? originX : originX + i * step;
        const y = vertical ? originY + i * step : originY;
        return (
          <rect
            key={`${originX}-${originY}-${i}`}
            x={x}
            y={y}
            width={w}
            height={h}
            rx={1}
            className="hero-asm-bay"
            style={{ animationDelay: `${delayStart + i * 0.045}s` }}
          />
        );
      })}
    </>
  );
}

export default function HeroSiteAssembly() {
  return (
    <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end">
      <svg
        viewBox="0 0 420 300"
        className="h-auto w-full max-w-[420px] drop-shadow-[0_0_48px_rgba(46,125,224,0.12)] lg:ml-auto lg:max-w-[440px]"
        aria-hidden
      >
        {/* Site boundary */}
        <path
          d="M 32 36 L 388 36 L 388 264 L 32 264 Z"
          className="hero-asm-stroke hero-asm-draw-site"
          pathLength={100}
        />
        {/* Main access from south */}
        <path
          d="M 210 288 L 210 118"
          className="hero-asm-stroke hero-asm-draw-road hero-asm-delay-a"
          pathLength={100}
        />
        {/* Circulation spine */}
        <path
          d="M 52 118 L 368 118"
          className="hero-asm-stroke hero-asm-draw-road hero-asm-delay-b"
          pathLength={100}
        />
        {/* Service / fire lane */}
        <path
          d="M 268 118 L 268 248"
          className="hero-asm-stroke hero-asm-draw-road hero-asm-delay-c"
          pathLength={100}
        />
        {/* Building footprint */}
        <rect
          x="278"
          y="152"
          width="92"
          height="96"
          rx="3"
          className="hero-asm-building"
        />
        {/* Parking bays — typical retail / logistics car park rhythm */}
        <ParkingStalls originX={58} originY={52} count={5} vertical={false} delayStart={0.75} />
        <ParkingStalls originX={58} originY={152} count={5} vertical={false} delayStart={0.95} />
        <ParkingStalls originX={130} originY={52} count={5} vertical={false} delayStart={0.82} />
        <ParkingStalls originX={130} originY={152} count={5} vertical={false} delayStart={1.02} />
        <ParkingStalls originX={290} originY={52} count={4} vertical={false} delayStart={0.88} />
        {/* HGV / aisle markers (subtle) */}
        <path
          d="M 48 132 L 258 132"
          className="hero-asm-stroke hero-asm-draw-faint hero-asm-delay-d"
          pathLength={100}
        />
      </svg>
      <p className="mt-2 text-right text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
        Site layout — schematic
      </p>
    </div>
  );
}
