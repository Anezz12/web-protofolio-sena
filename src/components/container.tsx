export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1300px] mx-auto bg-zinc-900 dark:bg-white min-h-screen flex flex-col border-l border-r border-zinc-800 dark:border-zinc-100">
      {children}
    </div>
  );
}
