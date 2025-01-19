import skills from "@/data-skills";
import CategorySkills from "./section-skills-category";

export default function SectionSkills() {
    const groupedSkills = groupByCategory(skills);

    function groupByCategory(skills) {
        return skills.reduce((groups, skill) => {
            if (!groups[skill.category]) {
                groups[skill.category] = [];
            }
            groups[skill.category].push(skill);
            return groups;
        }, {});
    }

    return (
        <>
            {Object.entries(groupedSkills).map(([category, skills]) => (
                <CategorySkills key={category} category={category} skills={skills} />
            ))}
        </>
    );
}
