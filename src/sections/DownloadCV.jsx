import { Download, FileText, Award } from "lucide-react";

export default function DownloadCV() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <a
        href="/Mohammed-Noor-CV.pdf"
        download
        className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out bg-linear-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <span className="absolute inset-0 w-full h-full bg-linear-to-r from-blue-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></span>
        <span className="relative flex items-center gap-3">
          <FileText className="w-5 h-5" />
          <span>Download CV</span>
          <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
        </span>
      </a>
    </div>
  );
}
