import React from 'react';

export default function Pricing() {
    return (
        <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-4">단순하고 투명한 요금제</h2>
                    <div className="inline-flex items-center p-1 bg-slate-200 dark:bg-slate-800 rounded-lg">
                        <button className="px-4 py-1.5 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold shadow-sm">월간</button>
                        <button className="px-4 py-1.5 rounded-md text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-colors">연간 (20% 할인)</button>
                    </div>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pt-6 pb-8 px-4 -mx-4 md:mx-0 md:grid md:grid-cols-3 md:gap-4 no-scrollbar">
                    {/* Free Tier */}
                    <div className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-auto bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Free</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">$0</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">/월</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">개인 사용자를 위한 기본 기능</p>
                        </div>
                        <ul className="flex-1 space-y-3 mb-6">
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-[18px]">check</span>월 5,000 단어 생성
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-[18px]">check</span>기본 문법 교정
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-[18px]">check</span>10개 템플릿
                            </li>
                        </ul>
                        <button className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">시작하기</button>
                    </div>

                    {/* Pro Tier */}
                    <div className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-auto bg-white dark:bg-slate-800 rounded-2xl p-5 border-2 border-primary relative shadow-xl z-10 flex flex-col md:-mt-4 md:mb-4 md:py-9">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            가장 인기
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-primary">Pro</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">$19</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">/월</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">전문 크리에이터용</p>
                        </div>
                        <ul className="flex-1 space-y-3 mb-6">
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-[18px]">check</span><strong>무제한</strong> 단어 생성
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-[18px]">check</span>고급 문법 및 스타일 교정
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-[18px]">check</span>모든 템플릿 (100+)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-[18px]">check</span>Brand Voice 3개
                            </li>
                        </ul>
                        <button className="w-full py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary-dark shadow-md transition-colors">무료 체험 시작</button>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-auto bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Enterprise</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">$49</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">/월</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">팀 협업 및 보안 강화</p>
                        </div>
                        <ul className="flex-1 space-y-3 mb-6">
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-[18px]">check</span>모든 Pro 기능 포함
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-[18px]">check</span>실시간 팀 협업
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-[18px]">check</span>SSO 및 고급 보안
                            </li>
                        </ul>
                        <button className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">문의하기</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
