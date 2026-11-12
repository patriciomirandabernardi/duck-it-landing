export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-600 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-base leading-relaxed font-light text-neutral-600 sm:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}
