interface SGLogoProps {
  className?: string;
  size?: number;
}

export default function SGLogo({ className = 'w-8 h-8', size = 32 }: SGLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform transition-transform duration-300 group-hover:scale-105"
      >
        {/* Subtle background container with rounded squircle */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="12"
          className="fill-slate-900/90 dark:fill-slate-900/90 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="1.5"
        />

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="sgGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.55" stopColor="#0ea5e9" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="sgAccent" x1="14" y1="14" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7dd3fc" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        {/* Interlocking Monogram Path combining 'S' and 'G' */}
        {/* The Outer 'G' arc wrapping from top-right around bottom to center crossbar */}
        <path
          d="M 33 16
             C 30 12.5 25 11 20 12
             C 14 13.5 10 18.5 10 25
             C 10 32 15 37 22 37
             C 28 37 34 33.5 35 27
             H 23"
          stroke="url(#sgGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* The Intersecting 'S' curve woven through the core of G */}
        <path
          d="M 28 15.5
             C 25 14 20 14 17 17
             C 14.5 19.5 15.5 22.5 19 24
             C 24 26 27 28 26 31.5
             C 24.8 35 20 35.5 16 33.5"
          stroke="url(#sgAccent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Core precision node */}
        <circle cx="23" cy="27" r="1.5" className="fill-sky-400" />
      </svg>
    </div>
  );
}
