import Navbar from "./components/Navbar";
import RaidGrid from "./components/RaidGrid";
import RightSideBar from "./components/RightSideBar";
import SpecsPanel from "./components/SpecsPanel";
import SubNav from "./components/SubNav";

export function App() {
  return (
    <main className="min-h-screen bg-stone-800 text-stone-100">
      <Navbar />
      <SubNav />

      <div className="mx-auto grid w-full gap-8 px-4 py-8 lg:grid-cols-5 lg:px-6">
        <div className="lg:col-span-1"></div>
        <div className="lg:col-span-3">
          <SpecsPanel />
          <RaidGrid />
        </div>
        <div className="lg:col-span-1">
          <RightSideBar>{/* Add your raid notes content here */}</RightSideBar>
        </div>
      </div>
    </main>
  );
}
