import {
  Experience,
  Footer,
  Grid,
  Hero,
  Process,
  RecentProjects,
} from "@/components";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
