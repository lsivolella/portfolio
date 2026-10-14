import Tag from '@/components/ui/Tag';
import { skillGroups } from '@/data/skills';
import { useLanguage } from '@/i18n/useLanguage';

/**
 * Skill groups with one tag per technology, plus years when known.
 */
function SkillsSection() {
    const { language } = useLanguage();

    const yearsFormat = new Intl.NumberFormat(language, {
        style: 'unit',
        unit: 'year',
        unitDisplay: 'short',
    });

    return (
        <div className="space-y-6">
            {skillGroups.map((group) => (
                <div key={group.id}>
                    <h3 className="mb-2 font-label uppercase tracking-wide text-muted">
                        {group.title[language]}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                            <li
                                key={skill.name}
                            >
                                <Tag>
                                    {skill.name}
                                </Tag>
                                {skill.years !== undefined && (
                                    <span className="ml-2 text-muted">
                                        {yearsFormat.format(skill.years)}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default SkillsSection;
