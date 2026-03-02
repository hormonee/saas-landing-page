"use client";

import React, { useRef, useCallback } from 'react';

export default function Pricing() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeftStart = useRef(0);
    const velocity = useRef(0);
    const lastX = useRef(0);
    const lastTime = useRef(0);
    const animationId = useRef<number>(0);

    const applyMomentum = useCallback(() => {
        if (!scrollRef.current || Math.abs(velocity.current) < 0.5) {
            cancelAnimationFrame(animationId.current);
            return;
        }
        scrollRef.current.scrollLeft -= velocity.current;
        velocity.current *= 0.92; // deceleration factor
        animationId.current = requestAnimationFrame(applyMomentum);
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        cancelAnimationFrame(animationId.current);
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeftStart.current = scrollRef.current.scrollLeft;
        lastX.current = e.pageX;
        lastTime.current = Date.now();
        velocity.current = 0;
        scrollRef.current.style.cursor = 'grabbing';
        scrollRef.current.style.scrollSnapType = 'none';
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab';
            // Re-enable snap after momentum settles
            const ref = scrollRef.current;
            setTimeout(() => { ref.style.scrollSnapType = ''; }, 300);
        }
        if (Math.abs(velocity.current) > 1) {
            animationId.current = requestAnimationFrame(applyMomentum);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.2;
        scrollRef.current.scrollLeft = scrollLeftStart.current - walk;

        // Track velocity
        const now = Date.now();
        const dt = now - lastTime.current;
        if (dt > 0) {
            velocity.current = (e.pageX - lastX.current) / dt * 15;
        }
        lastX.current = e.pageX;
        lastTime.current = now;
    };

    return (
        <section className="py-16 px-4 bg-slate-50 dark:bg-background-dark relative dark:border-t dark:border-slate-800">
            {/* Dark mode gradient overlay — same as Features */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-darker/50 pointer-events-none hidden dark:block"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-4">단순하고 투명한 요금제</h2>
                    <div className="inline-flex items-center p-1 bg-slate-200 dark:bg-surface-dark rounded-lg dark:border dark:border-slate-700">
                        <button className="px-4 py-1.5 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold shadow-sm">월간</button>
                        <button className="px-4 py-1.5 rounded-md text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-colors">연간 (20% 할인)</button>
                    </div>
                </div>
                <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 pt-6 pb-8 px-4 -mx-4 md:mx-0 md:grid md:grid-cols-3 md:gap-4 no-scrollbar select-none cursor-grab"
                >
                    {/* Free */}
                    <div className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-auto bg-white dark:bg-surface-dark rounded-2xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col dark:hover:border-slate-600 dark:transition-colors">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Free</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">$0</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">/월</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">개인 사용자를 위한 기본 기능</p>
                        </div>
                        <ul className="flex-1 space-y-3 mb-6">
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><span className="material-symbols-outlined text-green-500 text-[18px]">check</span>월 5,000 단어 생성</li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><span className="material-symbols-outlined text-green-500 text-[18px]">check</span>기본 문법 교정</li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><span className="material-symbols-outlined text-green-500 text-[18px]">check</span>10개 템플릿</li>
                        </ul>
                        <button className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">시작하기</button>
                    </div>
                    {/* Pro */}
                    <div className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-auto bg-white dark:bg-slate-800 rounded-2xl p-5 border-2 border-primary dark:border-[#3b82f6] relative shadow-xl dark:shadow-2xl dark:shadow-blue-900/20 z-10 flex flex-col md:-mt-4 md:mb-4 md:py-9">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary dark:bg-[#3b82f6] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider dark:shadow-lg dark:shadow-blue-600/50">
                            가장 인기
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-primary dark:text-blue-400">Pro</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">$19</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">/월</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">전문 크리에이터용</p>
                        </div>
                        <ul className="flex-1 space-y-3 mb-6">
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><span className="material-symbols-outlined text-primary dark:text-blue-400 text-[18px]">check</span><strong>무제한</strong> 단어 생성</li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><span className="material-symbols-outlined text-primary dark:text-blue-400 text-[18px]">check</span>고급 문법 및 스타일 교정</li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><span className="material-symbols-outlined text-primary dark:text-blue-400 text-[18px]">check</span>모든 템플릿 (100+)</li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><span className="material-symbols-outlined text-primary dark:text-blue-400 text-[18px]">check</span>Brand Voice 3개</li>
                        </ul>
                        <button className="w-full py-2.5 rounded-lg bg-primary dark:bg-[#3b82f6] text-white font-bold text-sm hover:bg-primary-dark dark:hover:bg-[#2563eb] shadow-md dark:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-colors">무료 체험 시작</button>
                    </div>
                    {/* Enterprise */}
                    <div className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-auto bg-white dark:bg-surface-dark rounded-2xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col dark:hover:border-slate-600 dark:transition-colors">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Enterprise</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">$49</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">/월</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">팀 협업 및 보안 강화</p>
                        </div>
                        <ul className="flex-1 space-y-3 mb-6">
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><span className="material-symbols-outlined text-green-500 text-[18px]">check</span>모든 Pro 기능 포함</li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><span className="material-symbols-outlined text-green-500 text-[18px]">check</span>실시간 팀 협업</li>
                            <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><span className="material-symbols-outlined text-green-500 text-[18px]">check</span>SSO 및 고급 보안</li>
                        </ul>
                        <button className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">문의하기</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
