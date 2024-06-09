import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative font-extralight bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
        <Hero />
        {/* We basically called the Hero.tsx component in here */}
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}