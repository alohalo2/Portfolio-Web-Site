import { Suspense } from "react";
import AboutMe from "./sections/@aboutme/page";
import Skills from "./sections/@skills/page";
import Archiving from "./sections/@archiving/page";
import Project from "./sections/@project/page";
import Career from "./sections/@career/page";
import Introduction from "./sections/@introduction/page";

export default function Home() {
  return (
    <main>
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
