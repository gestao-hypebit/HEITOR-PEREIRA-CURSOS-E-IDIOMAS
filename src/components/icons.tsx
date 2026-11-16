import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export const FlagUS = (p: P) => (
  <svg viewBox="0 0 40 40" aria-hidden {...p}>
    <defs>
      <clipPath id="flag-us-c">
        <circle cx="20" cy="20" r="19" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-us-c)">
      <rect width="40" height="40" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={1 + i * 3} width="40" height="3" fill="#d22f3c" />
      ))}
      <rect width="20" height="19" y="1" fill="#2b4a9b" />
      {[5, 10, 15].flatMap((y) =>
        [5, 10, 15].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.1" fill="#fff" />),
      )}
    </g>
    <circle cx="20" cy="20" r="19" fill="none" stroke="rgb(0 0 0 / .12)" />
  </svg>
);

export const FlagFR = (p: P) => (
  <svg viewBox="0 0 40 40" aria-hidden {...p}>
    <defs>
      <clipPath id="flag-fr-c">
        <circle cx="20" cy="20" r="19" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-fr-c)">
      <rect width="14" height="40" fill="#1e3fa8" />
      <rect x="13" width="14" height="40" fill="#fff" />
      <rect x="26" width="14" height="40" fill="#e3263b" />
    </g>
    <circle cx="20" cy="20" r="19" fill="none" stroke="rgb(0 0 0 / .12)" />
  </svg>
);

export const ChevronDown = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...p}>
    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VideoChat = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M6 3h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9l-4.4 3.3A1 1 0 0 1 3 21.5V7a4 4 0 0 1 3-4Zm1.5 6a1.5 1.5 0 0 0-1.5 1.5v3A1.5 1.5 0 0 0 7.5 15h5a1.5 1.5 0 0 0 1.5-1.5v-.4l2.2 1.3a.5.5 0 0 0 .8-.4V10a.5.5 0 0 0-.8-.4L14 10.9v-.4A1.5 1.5 0 0 0 12.5 9h-5Z" />
  </svg>
);

export const Plane = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
  </svg>
);

export const Smile = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-3.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 18a5.5 5.5 0 0 1-5-3.2.75.75 0 0 1 .7-1.05h8.6a.75.75 0 0 1 .7 1.05A5.5 5.5 0 0 1 12 18Z" />
    <path d="M19 1v2h2v1.5h-2v2h-1.5v-2h-2V3h2V1H19Z" />
  </svg>
);

export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z" />
  </svg>
);

export const QuoteOpen = (p: P) => (
  <svg viewBox="0 0 64 48" fill="currentColor" aria-hidden {...p}>
    <path d="M0 48V28C0 12 8 3 24 0l3 6c-8 3-12 8-12 16h12v26H0Zm37 0V28c0-16 8-25 24-28l3 6c-8 3-12 8-12 16h12v26H37Z" />
  </svg>
);

export const QuoteClose = (p: P) => (
  <svg viewBox="0 0 64 48" fill="currentColor" aria-hidden {...p}>
    <path d="M64 0v20c0 16-8 25-24 28l-3-6c8-3 12-8 12-16H37V0h27ZM27 0v20c0 16-8 25-24 28l-3-6c8-3 12-8 12-16H0V0h27Z" />
  </svg>
);

export const WhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.1-1.3A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .8.8-2.95-.2-.31a8.2 8.2 0 1 1 6.9 3.79Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43l-.75-1.82c-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.76 4.76 0 0 0 1 2.53 10.9 10.9 0 0 0 4.18 3.69c1.55.67 2.16.73 2.94.61.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.11-.22-.17-.47-.29Z" />
  </svg>
);

export const Mic = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-3.1A7 7 0 0 0 19 11h-2Z" />
  </svg>
);

export const Cam = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4Z" />
  </svg>
);

export const HangUp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85a1 1 0 0 1-1.41-.02L.29 13.07a1 1 0 0 1 0-1.41C3.34 8.77 7.46 7 12 7s8.66 1.77 11.71 4.66a1 1 0 0 1 0 1.41l-2.48 2.48a1 1 0 0 1-1.41.02 11.3 11.3 0 0 0-2.67-1.85 1 1 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9Z" />
  </svg>
);

export const Menu = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
  </svg>
);

export const Close = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...p}>
    <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
  </svg>
);
