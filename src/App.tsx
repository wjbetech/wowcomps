import Navbar from "./components/Navbar";
import RaidGrid from "./components/RaidGrid";
import SpecsPanel from "./components/SpecsPanel";
import SubNav from "./components/SubNav";

type Props = {};

export function App({}: Props) {
  return (
    <main className="min-h-screen bg-stone-800 text-stone-100">
      <Navbar />
      <SubNav />
      <SpecsPanel />
      <RaidGrid />
    </main>
  );
}
