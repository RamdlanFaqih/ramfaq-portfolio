import styles from "./Sketch.module.css";

type SketchKind = "idea" | "arrow" | "brainstorm" | "plane" | "pencil" | "folder";

/** Decorative, static SVGs: no image requests, event handlers, or animation loop. */
export default function Sketch({ kind }: { kind: SketchKind }) {
  return (
    <svg
      className={`${styles.sketch} ${styles[kind]}`}
      viewBox="0 0 160 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {kind === "idea" && <>
        <path className={styles.wash} d="M57 38c-15 16-5 37 7 43l29-2c17-13 20-32 7-44-12-13-31-12-43 3Z" />
        <path d="M65 82c-1-11-17-15-17-34 0-17 13-29 30-29 19 0 32 13 31 30-1 17-17 22-18 33M65 84l26-1-1 10-24 2-1-11ZM69 100l18-1M75 106l8-1M74 81l-3-24 8 6 8-7-4 25" />
        <path d="m32 46-12-3m19-22-8-9m44-6 1-9m34 19 8-9m5 34 13-4m-18 35 10 6M37 73l-9 7" />
      </>}
      {kind === "arrow" && <>
        <path d="M19 26c29-15 71-10 76 13 5 25-29 32-36 14-7-20 38-20 61-1 16 13 18 32 13 48" />
        <path d="m119 88 14 14 14-14M23 49l5 5m-1-13 5-2" />
      </>}
      {kind === "brainstorm" && <>
        <path className={styles.wash} d="m13 19 46-4 3 35-46 5-3-36ZM103 65l42 4-2 37-43-4 3-37Z" />
        <path d="m12 16 46-4 4 40-46 4-4-40Zm7 11 27-2m-26 12 18-1M102 64l44 3-3 40-44-4 3-39Zm9 13 23 2m-24 10 17 1" />
        <path d="M70 28c30-14 58-4 54 22m-8-7 8 9 8-8M89 88c-27 16-54 10-57-16m-6 7 6-10 10 5" />
        <path d="m65 65 9-10 10 10-10 10-9-10Zm-8 0h-9m43 0h8" />
      </>}
      {kind === "pencil" && <>
        <path className={styles.wash} d="m51 79 54-55 13 14-55 55-17 5 5-19Z" />
        <path d="m48 78 55-56 16 15-56 56-21 6 6-21Zm0 0 15 15m-12-9 55-55m-9-1 16 16M42 99l10-3-7-7m58-67 7-7c4-4 20 10 16 15l-7 7" />
        <path d="M20 105c20 8 24-3 43 1s25 2 34-4m21-28 4-8m8 16 9-2" />
      </>}
      {kind === "folder" && <>
        <path className={styles.wash} d="m29 49 103 3-13 50-98-4 8-49Z" />
        <path d="m26 52-1-21 36-3 12 13 51 1 3 12M21 97l8-47 106 3-15 49-99-5Zm20-49 3-30 52 5-3 28M54 29l29 3m-30 8 19 2" />
        <path d="m112 18 3 8 9 2-8 4-2 9-4-8-9-2 8-4 3-9Z" />
      </>}
      {kind === "plane" && <>
        <path className={styles.wash} d="m67 43 72-25-29 60-15-23-28-12Z" />
        <path d="m65 42 76-26-30 64-17-25-29-13Zm29 13 47-39M94 55l-1 25 12-10" />
        <path strokeDasharray="4 7" d="M80 85c-12 22-39 22-44 7-6-19 19-20 16-3-3 18-30 22-43 12" />
      </>}
    </svg>
  );
}
