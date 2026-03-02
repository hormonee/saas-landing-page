import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-2">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-[24px]">auto_fix_high</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">HormonicFlow</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-slate-600 dark:text-slate-400 font-bold text-sm">로그인</button>
        <div className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </header>
  );
}
