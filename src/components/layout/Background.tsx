"use client";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[600px] rounded-full bg-accent/3 blur-[100px]" />
      <div className="scanlines" />
    </div>
  );
}
