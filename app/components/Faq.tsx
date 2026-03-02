import React from 'react';

export default function Faq() {
    return (
        <section className="py-16 px-4 bg-white dark:bg-background-dark">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-10 text-center">자주 묻는 질문</h2>
                <div className="space-y-3">
                    {/* Expanded Item */}
                    <div className="rounded-xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/10 overflow-hidden">
                        <button className="flex w-full items-center justify-between text-left p-4 dark:hover:bg-blue-900/20 dark:transition-colors">
                            <span className="text-base font-bold text-primary dark:text-blue-300">무료 체험 기간은 얼마인가요?</span>
                            <span className="material-symbols-outlined text-primary dark:text-blue-400">remove</span>
                        </button>
                        <div className="px-4 pb-4">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                                모든 신규 가입자는 Pro 플랜의 모든 기능을 14일 동안 무료로 체험하실 수 있습니다. 체험 기간이 끝나기 전에 알림을 보내드립니다.
                            </p>
                        </div>
                    </div>
                    {/* Collapsed Items */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden dark:hover:border-slate-700 dark:transition-colors">
                        <button className="flex w-full items-center justify-between text-left p-4 group">
                            <span className="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">언제든지 취소할 수 있나요?</span>
                            <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">add</span>
                        </button>
                    </div>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden dark:hover:border-slate-700 dark:transition-colors">
                        <button className="flex w-full items-center justify-between text-left p-4 group">
                            <span className="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">데이터 보안은 어떻게 되나요?</span>
                            <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">add</span>
                        </button>
                    </div>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden dark:hover:border-slate-700 dark:transition-colors">
                        <button className="flex w-full items-center justify-between text-left p-4 group">
                            <span className="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">환불 정책이 있나요?</span>
                            <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">add</span>
                        </button>
                    </div>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden dark:hover:border-slate-700 dark:transition-colors">
                        <button className="flex w-full items-center justify-between text-left p-4 group">
                            <span className="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">어떤 결제 수단을 지원하나요?</span>
                            <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">add</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
