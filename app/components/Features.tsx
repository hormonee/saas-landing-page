import React from 'react';

export default function Features() {
    return (
        <section className="py-16 px-4 bg-white dark:bg-background-dark relative">
            {/* Dark mode gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-darker/50 pointer-events-none hidden dark:block"></div>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-primary dark:text-blue-400 font-bold tracking-wide uppercase text-sm mb-3">Features</h2>
                    <h3 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight dark:drop-shadow-md">
                        강력한 AI 기능으로<br />글쓰기를 완성하세요
                    </h3>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {/* AI Assistant */}
                    <div className="group p-4 rounded-xl bg-background-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700/60 hover:border-primary/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] flex flex-col items-start text-left dark:hover:-translate-y-1">
                        <div className="size-8 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-primary dark:text-blue-400 mb-3 dark:border dark:border-blue-500/20 dark:group-hover:bg-blue-500/20 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">magic_button</span>
                        </div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">AI Assistant</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">스마트한 글쓰기 비서</p>
                    </div>
                    {/* Perfect Grammar */}
                    <div className="group p-4 rounded-xl bg-background-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700/60 hover:border-primary/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-start text-left dark:hover:-translate-y-1">
                        <div className="size-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3 dark:border dark:border-emerald-500/20 dark:group-hover:bg-emerald-500/20 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">check_circle</span>
                        </div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Perfect Grammar</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">실시간 문법 교정</p>
                    </div>
                    {/* Brand Voice */}
                    <div className="group p-4 rounded-xl bg-background-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700/60 hover:border-primary/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] flex flex-col items-start text-left dark:hover:-translate-y-1">
                        <div className="size-8 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3 dark:border dark:border-purple-500/20 dark:group-hover:bg-purple-500/20 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">mic</span>
                        </div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Brand Voice</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">톤앤매너 학습</p>
                    </div>
                    {/* 50+ Languages */}
                    <div className="group p-4 rounded-xl bg-background-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700/60 hover:border-primary/50 dark:hover:border-orange-500/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] flex flex-col items-start text-left dark:hover:-translate-y-1">
                        <div className="size-8 rounded-lg bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-3 dark:border dark:border-orange-500/20 dark:group-hover:bg-orange-500/20 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">language</span>
                        </div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">50+ Languages</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">다국어 번역 지원</p>
                    </div>
                    {/* 100+ Templates */}
                    <div className="group p-4 rounded-xl bg-background-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700/60 hover:border-primary/50 dark:hover:border-pink-500/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] flex flex-col items-start text-left dark:hover:-translate-y-1">
                        <div className="size-8 rounded-lg bg-pink-100 dark:bg-pink-500/10 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-3 dark:border dark:border-pink-500/20 dark:group-hover:bg-pink-500/20 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">description</span>
                        </div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">100+ Templates</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">검증된 템플릿</p>
                    </div>
                    {/* Real-time Collab */}
                    <div className="group p-4 rounded-xl bg-background-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700/60 hover:border-primary/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col items-start text-left dark:hover:-translate-y-1">
                        <div className="size-8 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-3 dark:border dark:border-cyan-500/20 dark:group-hover:bg-cyan-500/20 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">groups</span>
                        </div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Real-time Collab</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">팀 실시간 협업</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
