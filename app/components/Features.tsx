import React from 'react';

const features = [
    {
        name: 'AI Assistant',
        description: '스마트한 글쓰기 비서',
        icon: 'magic_button',
        colorClass: 'text-primary bg-blue-100 dark:bg-blue-900/30'
    },
    {
        name: 'Perfect Grammar',
        description: '실시간 문법 교정',
        icon: 'check_circle',
        colorClass: 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30'
    },
    {
        name: 'Brand Voice',
        description: '톤앤매너 학습',
        icon: 'mic',
        colorClass: 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30'
    },
    {
        name: '50+ Languages',
        description: '다국어 번역 지원',
        icon: 'language',
        colorClass: 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30'
    },
    {
        name: '100+ Templates',
        description: '검증된 템플릿',
        icon: 'description',
        colorClass: 'text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30'
    },
    {
        name: 'Real-time Collab',
        description: '팀 실시간 협업',
        icon: 'groups',
        colorClass: 'text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30'
    },
];

export default function Features() {
    return (
        <section className="py-16 px-4 bg-white dark:bg-background-dark">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Features</h2>
                    <h3 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">
                        강력한 AI 기능으로<br />글쓰기를 완성하세요
                    </h3>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group p-4 rounded-xl bg-background-light dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-md flex flex-col items-start text-left">
                            <div className={`size-8 rounded-lg flex items-center justify-center mb-3 ${feature.colorClass}`}>
                                <span className="material-symbols-outlined text-[20px]">{feature.icon}</span>
                            </div>
                            <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">{feature.name}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
