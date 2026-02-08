export default function Sidebar({ open }) {
  return (
    <aside
      className={`
        bg-slate-900 text-white
        transition-all duration-300 ease-in-out
        ${open ? "w-64" : "w-0"}
        overflow-hidden
      `}
    >
      <div className="p-4">Sidebar content</div>
    </aside>
  );
}
