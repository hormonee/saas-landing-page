import React from 'react';

export default function CtaSection() {
    return (
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#312e81] dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 text-white text-center dark:border-t dark:border-slate-800/50">
            <div className="absolute inset-0 opacity-20 dark:opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/10 dark:from-blue-500/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-snug drop-shadow-sm dark:drop-shadow-lg">
                    글쓰기를 혁신할<br className="sm:hidden" /> <span className="text-blue-100 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-300 dark:to-indigo-300">준비가 되셨나요?</span>
                </h2>
                <p className="text-blue-100/90 dark:text-slate-300 text-lg sm:text-xl font-medium max-w-lg leading-relaxed">
                    10,000명 이상의 작가와 마케터들이<br className="sm:hidden" /> 이미 HormonicFlow와 함께하고 있습니다.
                </p>
                <div className="mt-4 flex flex-col items-center gap-4 w-full sm:w-auto">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl h-14 px-10 bg-white text-[#1e3a8a] dark:text-slate-900 text-lg font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl dark:hover:shadow-blue-500/20 hover:-translate-y-0.5 transform duration-200">
                        무료 체험 시작
                    </button>
                    <div className="flex items-center gap-1.5 text-blue-200/80 dark:text-blue-200/60 text-xs font-medium tracking-wide">
                        <span className="material-symbols-outlined text-[14px]">credit_card_off</span>
                        신용카드 필요 없음
                    </div>
                </div>
            </div>
        </section>
    );
}
