import type { ComponentType } from 'react';

import Container from '@/components/ui/Container';
import { useLanguage } from '@/i18n/useLanguage';

import Reveal from '@/components/ui/Reveal';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import Hero from './components/Hero';
import HomeSection from './components/HomeSection';
import LanguagesSection from './components/LanguagesSection';
import SectionIndex from './components/SectionIndex';
import SkillsSection from './components/SkillsSection';
import { getSectionNumber, homeSections, type HomeSectionId } from './homeSections';

/**
 * Content component for each section. Typed against HomeSectionId, so a new
 * section id without a component does not compile.
 */
const sectionContent: Record<HomeSectionId, ComponentType> = {
    skills: SkillsSection,
    experience: ExperienceSection,
    education: EducationSection,
    languages: LanguagesSection,
};

/**
 * Home page: hero, then the numbered sections with a sticky side index.
 */
function HomePage() {
    const { text } = useLanguage();

    return (
        <Container className="py-12">
            <Hero />

            <div className="mt-16 grid gap-12 lg:grid-cols-[11rem_1fr]">
                <SectionIndex />

                <div className="space-y-20">
                    {homeSections.map((id, index) => {
                        const Content = sectionContent[id];

                        return (
                            <Reveal key={id}>
                                <HomeSection
                                    id={id}
                                    number={getSectionNumber(index)}
                                    title={text.home[id]}
                                >
                                    <Content />
                                </HomeSection>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
}

export default HomePage;
