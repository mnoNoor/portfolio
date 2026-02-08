export default function Header({ onToggle }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        <button
          onClick={onToggle}
          className="p-2 rounded-md hover:bg-gray-100 transition"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <h1 className="text-2xl font-bold text-gray-900">mnoNoor</h1>
      </div>
    </header>
  );
}
