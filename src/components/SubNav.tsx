export default function SubNav() {
  return (
    <header className="mx-auto grid grid-cols-5 w-full text-center py-2 bg-mist-800 border-b border-stone-500">
      <a className="grid-1 text-amber-300 cursor-pointer mx-4 bg-mist-900 hover:bg-mist-950 rounded-md">
        Classic
      </a>
      <a className="grid-2 text-green-500 cursor-pointer mx-4 bg-mist-900 hover:bg-mist-950 rounded-md">
        The Burning Crusade
      </a>
      <a className="grid-3 text-blue-300 cursor-pointer mx-4 bg-mist-900 hover:bg-mist-950 rounded-md">
        Wrath of the Lich King
      </a>
      <a className="grid-4 text-blue-400 cursor-pointer mx-4 bg-mist-900 hover:bg-mist-950 rounded-md">
        Season of Discovery
      </a>
      <a className="grid-5 text-amber-300 cursor-pointer mx-4 bg-mist-900 hover:bg-mist-950 rounded-md">
        Classic+
      </a>
    </header>
  );
}
