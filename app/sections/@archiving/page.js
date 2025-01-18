import SectionArchiving from "@/components/section-archiving";
import classes from ".//page.module.css";

export default function Archiving() {
    return (
        <div className={classes.totalBox}>
            <section id="archiving">
                <h1>Archiving</h1>
                <div className={classes.contentsBox}>
                    <SectionArchiving />
                </div>
            </section>
        </div>
    );
}
