export default function Footer() {
  return (
    <footer className="bg-slate-100 mt-12 md:mt-20 py-6 md:py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm md:text-base">Follow me on:</p>
        <div className="flex justify-center gap-4 md:gap-6 mt-3 md:mt-4 flex-wrap">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 transition text-sm md:text-base"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 transition text-sm md:text-base"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 transition text-sm md:text-base"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 transition text-sm md:text-base"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
