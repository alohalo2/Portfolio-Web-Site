import { Suspense } from "react";
import AboutMe from "./sections/@aboutme/page";
import Skills from "./sections/@skills/page";
import Archiving from "./sections/@archiving/page";
import Project from "./sections/@project/page";
import Career from "./sections/@career/page";
import Introduction from "./sections/@introduction/page";
import classes from './page.module.css';

export default function Home() {
  return (
    <main className={classes.totalMain}>
      <Suspense>
        <Introduction />
      </Suspense>
      <Suspense>
        <AboutMe />
      </Suspense>
      <Suspense>
        <Skills />
      </Suspense>
      <Suspense>
        <Archiving />
      </Suspense>
      <Suspense>
        <Project />
      </Suspense>
      <Suspense>
        <Career />
      </Suspense>
    </main>
  );
}
