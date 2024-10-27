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
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <RecentProjects />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
