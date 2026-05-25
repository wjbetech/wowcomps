import Navbar from "./components/Navbar";
import SubNav from "./components/SubNav";

type Props = {};

export function App({}: Props) {
  return (
    <main className="min-h-screen bg-stone-800 text-stone-100">
      <Navbar />
      <SubNav />
    </main>
  );
}
