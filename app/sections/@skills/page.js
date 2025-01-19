import SectionSkills from "@/components/section-skills";
import classes from './page.module.css';

export default function Skills() {
    return (
        <div className={classes.skillsBox}>
            <section id="skills">
                <h1>Skills</h1>
                <SectionSkills />
            </section>
        </div>
    );
}
