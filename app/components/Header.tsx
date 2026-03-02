import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-2">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-[#3b82f6]/20 text-primary dark:text-[#3b82f6] dark:border dark:border-[#3b82f6]/20 dark:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <span className="material-symbols-outlined text-[24px]">auto_fix_high</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">HormonicFlow</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-slate-600 dark:text-slate-400 dark:hover:text-white transition-colors font-bold text-sm">로그인</button>
        <ThemeToggle />
        <div className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center dark:hover:bg-white/5 dark:rounded-lg dark:transition-colors dark:cursor-pointer">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </header>
  );
}
