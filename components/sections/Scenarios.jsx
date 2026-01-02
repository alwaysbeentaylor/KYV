'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Scenarios() {
    const { t } = useLanguage();

    const scenarios = [
        {
            name: t.scenarios.scenario1Name,
            role: t.scenarios.scenario1Role,
            company: t.scenarios.scenario1Company,
            score: t.scenarios.scenario1Score,
            tag: t.scenarios.scenario1Tag,
            tagColor: 'from-[#D4AF37] to-[#F4E4B5]',
            metrics: [
                { value: t.scenarios.scenario1Spend, label: t.scenarios.scenario1SpendLabel },
                { value: t.scenarios.scenario1Reach, label: t.scenarios.scenario1ReachLabel },
            ],
            action: t.scenarios.scenario1Action,
            initials: 'SC',
        },
        {
            name: t.scenarios.scenario2Name,
            role: t.scenarios.scenario2Role,
            company: t.scenarios.scenario2Company,
            score: t.scenarios.scenario2Score,
            tag: t.scenarios.scenario2Tag,
            tagColor: 'from-[#8B5CF6] to-[#A78BFA]',
            metrics: [
                { value: t.scenarios.scenario2Followers, label: t.scenarios.scenario2FollowersLabel },
                { value: t.scenarios.scenario2Engagement, label: t.scenarios.scenario2EngagementLabel },
            ],
            action: t.scenarios.scenario2Action,
            initials: 'MV',
        },
        {
            name: t.scenarios.scenario3Name,
            role: t.scenarios.scenario3Role,
            company: t.scenarios.scenario3Company,
            score: t.scenarios.scenario3Score,
            tag: t.scenarios.scenario3Tag,
            tagColor: 'from-[#EF4444] to-[#DC2626]',
            metrics: [
                { value: t.scenarios.scenario3History, label: t.scenarios.scenario3HistoryLabel },
                { value: t.scenarios.scenario3LastIssue, label: t.scenarios.scenario3LastIssueLabel },
            ],
            action: t.scenarios.scenario3Action,
            initials: 'TB',
        },
    ];

    return (
        <section id="scenarios" className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#1a1a2e]/50 to-[#0A0A0F]" />

            <div className="container relative z-10">
                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="badge">{t.scenarios.badge}</span>
                </div>

                {/* Title */}
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-white mb-16">
                    {t.scenarios.title}
                </h2>

                {/* Scenarios Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {scenarios.map((scenario, index) => (
                        <div
                            key={index}
                            className="card-glass p-6 animate-fade-in-up hover:scale-105 transition-transform duration-300"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="bg-[#0A0A0F] rounded-lg p-6 border border-[#D4AF37]/20">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6 pb-4 border-b border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center border-2 border-[#D4AF37]/30">
                                            <span className="text-white font-bold text-sm">{scenario.initials}</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">{scenario.name}</p>
                                            <p className="text-xs text-gray-400">{scenario.role}</p>
                                            <p className="text-xs text-gray-500">{scenario.company}</p>
                                        </div>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${scenario.tagColor} text-black`}>
                                        {scenario.tag}
                                    </span>
                                </div>

                                {/* Score */}
                                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-[#1E3A8A]/20 to-[#2563EB]/10 border border-[#1E3A8A]/30 mb-4">
                                    <p className="text-4xl font-heading font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4E4B5] bg-clip-text text-transparent">
                                        {scenario.score}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1 font-medium">VIP Score</p>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    {scenario.metrics.map((metric, idx) => (
                                        <div key={idx} className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                                            <p className="text-sm font-semibold text-[#D4AF37]">{metric.value}</p>
                                            <p className="text-xs text-gray-400 mt-1">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Action */}
                                <div className="p-3 rounded-lg border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/5 to-transparent">
                                    <div className="flex items-start gap-2">
                                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-gray-300 leading-relaxed">{scenario.action}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-6">
                        Zie hoe KnowYourVIP jouw team helpt betere beslissingen te nemen
                    </p>
                    <a href="#contact" className="btn btn-primary inline-flex items-center gap-2">
                        <span>{t.hero.ctaPrimary}</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
