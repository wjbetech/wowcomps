type ExpansionGlowProps = {
  glow: string;
};

export default function ExpansionGlow({ glow }: ExpansionGlowProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 transition-[background,box-shadow] duration-500"
      style={{
        background: `
          linear-gradient(to bottom, rgb(${glow} / 0.12), transparent 7%),
          linear-gradient(to right, rgb(${glow} / 0.08), transparent 6%),
          linear-gradient(to left, rgb(${glow} / 0.08), transparent 6%),
          radial-gradient(circle at top left, rgb(${glow} / 0.1), transparent 10%),
          radial-gradient(circle at top right, rgb(${glow} / 0.1), transparent 10%),
          radial-gradient(circle at bottom left, rgb(${glow} / 0.1), transparent 10%),
          radial-gradient(circle at bottom right, rgb(${glow} / 0.1), transparent 10%)
        `,
        boxShadow: `
          inset 0 0 18px rgb(${glow} / 0.1),
          inset 0 0 36px rgb(${glow} / 0.1),
          inset 0 0 64px rgb(${glow} / 0.1)
        `,
      }}
    />
  );
}
