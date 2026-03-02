import React from 'react';

export default function Hero() {
    return (
        <div className="relative w-full overflow-hidden bg-white dark:bg-background-dark">
            {/* Light mode gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-100 to-indigo-200 pointer-events-none opacity-60 dark:hidden"></div>
            {/* Dark mode glow orbs */}
            <div className="absolute inset-0 pointer-events-none hidden dark:block">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[100px]"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[100px]"></div>
            </div>
            <div className="@container">
                <div className="px-4 py-12 flex flex-col items-center justify-center text-center gap-8 relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-surface-dark backdrop-blur-sm border border-blue-200 dark:border-slate-700 text-primary dark:text-blue-400 text-xs font-bold uppercase tracking-wider shadow-sm dark:shadow-lg dark:shadow-blue-900/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-blue-500"></span>
                        </span>
                        New AI Model v2.0
                    </div>
                    {/* Headline */}
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-[1.15] tracking-tight @[480px]:text-5xl dark:drop-shadow-lg">
                            AI와 함께<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">더 빠르게 더 잘 쓰세요</span>
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">
                            복잡한 아이디어를 몇 초 만에 완성된 콘텐츠로 바꿔보세요.<br className="hidden @[480px]:block" /> 블로그, 이메일, 광고 카피까지 한 번에 해결합니다.
                        </p>
                    </div>
                    {/* CTA Buttons */}
                    <div className="flex flex-row gap-3 justify-center">
                        <button className="inline-flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-primary dark:bg-[#3b82f6] hover:bg-primary-dark dark:hover:bg-blue-500 transition-colors text-white text-base font-bold shadow-lg shadow-blue-500/20 dark:shadow-[0_0_20px_rgba(59,130,246,0.4)] whitespace-nowrap dark:border dark:border-blue-400/20">
                            무료 체험
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap dark:hover:border-slate-600">
                            <span className="material-symbols-outlined text-[20px]">play_circle</span>
                            데모 보기
                        </button>
                    </div>
                    <p className="text-slate-500 text-xs font-medium">신용카드 정보가 필요하지 않습니다</p>
                    {/* Dashboard Mock */}
                    <div className="mt-8 w-full max-w-md h-72 relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-black/50 border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark flex flex-col">
                        <div className="h-9 bg-slate-50 dark:bg-surface-darker border-b border-slate-100 dark:border-slate-800 flex items-center px-4 gap-1.5 shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 dark:bg-amber-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 dark:bg-green-500/80"></div>
                            <div className="ml-4 px-3 py-0.5 bg-white dark:bg-surface-dark rounded-md text-[10px] text-slate-400 dark:text-slate-500 font-medium border border-slate-100 dark:border-slate-800 flex-1 text-center">Untitled Draft.txt</div>
                        </div>
                        <div className="p-6 text-left relative overflow-hidden flex-1 dark:bg-gradient-to-b dark:from-surface-dark dark:to-surface-darker">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">The Future of Generative AI</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Artificial Intelligence is rapidly evolving, transforming how we work and create.{' '}
                                <span className="bg-blue-100 dark:bg-blue-500/20 text-slate-800 dark:text-blue-100 px-0.5 rounded">Generative models like GPT-4 are leading this revolution</span> by enabling machines to understand and generate human-like text with unprecedented accuracy.
                            </p>
                            <div className="mt-3 p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-100 dark:border-indigo-500/30 animate-pulse dark:backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="material-symbols-outlined text-primary dark:text-indigo-400 text-[14px]">auto_awesome</span>
                                    <span className="text-xs font-bold text-primary dark:text-indigo-300">AI Suggestion</span>
                                </div>
                                <p className="text-xs text-slate-600 dark:text-indigo-200/80">
                                    &quot;Consider adding a specific example about how AI impacts creative industries to strengthen your argument.&quot;
                                </p>
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white dark:bg-surface-darker pl-2 pr-3 py-1.5 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 z-20">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                            </div>
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Grammar Perfect</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
