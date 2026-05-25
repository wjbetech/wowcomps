// type SpecItem = {
//   id: string;
//   label: string;
//   short: string;
// }

// type ClassGroup = {
//   id: string;
//   label: string;
//   color: string;
//   specs: SpecItem[];
// }

export default function SpecsPanel() {
  return (
    <section className="mx-auto w-full max-w-5xl py-8">
      <div className="rounded-3xl">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold">Raid Composition</h1>
            <p>Classes & Specs</p>
          </div>
          <p>Click & drag to place a specialization</p>
        </div>
      </div>
    </section>
  );
}
