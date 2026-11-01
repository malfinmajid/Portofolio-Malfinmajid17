import { Briefcase, Sparkles } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const experiences = [
    {
        date: 'Apr 2026 – Now',
        role: 'Software Quality Assurance (Intern)',
        company: 'PT Alodokter Teknologi Solusi',
        points: [
            'Performed manual testing on mobile and web applications for both new and existing features, covering functional, regression, integration, and UAT testing.',
            'Designed test cases and test scenarios based on PRDs and acceptance criteria using TestRail, including boundary value analysis and exploratory testing.',
            'Conducted cross-platform testing on Website, Android, and iOS, and inspected network requests with Chucker for debugging.',
            'Performed API and backend validation using Postman, including running cron jobs on staging and cross-checking data against the Alomobile Backoffice and database.',
            'Identified, reproduced, and documented bugs in a structured way using Jira, and retested after fixes by developers.',
            'Collaborated with QA, Backend and Frontend Developers, Product, and UI/UX in sprint planning, daily stand-ups, and reviews to improve product quality.'
        ],
        tools: ['TestRail', 'Jira', 'Postman', 'Chucker'],
        current: true,
    },
    {
        date: 'Nov 2024 – Dec 2024',
        role: 'Freelance Web Developer',
        company: 'PT Dewwi Sarana Indonesia',
        points: [
            'Developed a blog/landing page website and performed manual exploratory (black box) testing before and after the hosting process.',
            'Performed basic functional validation on key features such as page navigation, content display, and the contact form.',
            'Tested key features such as responsive UI.',
            'Conducted independent retesting to ensure the website was stable and easily accessible to users.',
        ],
        tools: ['Exploratory Testing', 'HTML', 'CSS', 'JavaScript'],
        current: false,
    },
];

const ExperienceTimeline = () => {
    return <div id="experience" className="mt-8">
        <FadeIn delay={100}>
            <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">Experience</span>
                    <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-normal text-white">
                    Work Experience
                </h2>
            </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto mb-10">
            {experiences.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === experiences.length - 1;

                return <FadeIn key={item.role} delay={200 + index * 100}>
                    <div className="grid grid-cols-[16px_1fr] md:grid-cols-[150px_16px_1fr] gap-x-4 md:gap-x-6">
                        {/* Date (desktop) */}
                        <div className={`hidden md:block text-right text-sm pt-0.5 ${item.current ? 'text-white font-medium' : 'text-white/50'}`}>
                            {item.date}
                        </div>

                        {/* Rail: line + dot */}
                        <div className="relative">
                            <div
                                className={`absolute left-1/2 -translate-x-1/2 w-px bg-white/15 ${isFirst ? 'top-2' : 'top-0'} ${isLast ? 'h-2' : 'bottom-0'}`}
                            ></div>
                            <div
                                className={`absolute left-1/2 -translate-x-1/2 top-0.5 rounded-full ${item.current ? 'w-3.5 h-3.5 bg-primary ring-4 ring-primary/20' : 'w-3 h-3 bg-white/30'}`}
                            ></div>
                        </div>

                        {/* Card */}
                        <div className={isLast ? '' : 'pb-8'}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                <p className="md:hidden text-xs text-white/50 mb-2">{item.date}</p>
                                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                                <p className="text-sm text-primary mb-4">{item.company}</p>

                                <ul className="flex flex-col gap-2 mb-5">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-white/70 leading-relaxed">
                                            <span className="mt-2 w-1 h-1 shrink-0 rounded-full bg-primary"></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {item.tools.map((tool) => (
                                        <span key={tool} className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>;
            })}
        </div>
    </div>;
};

export default ExperienceTimeline;
