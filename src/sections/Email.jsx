import { Mail, Copy, Check, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export default function Email() {
  const [copied, setCopied] = useState(false);
  const email = "mohammednoor.dev0@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="py-8 md:py-12 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Let's Connect
          </h3>

          {/* البريد الإلكتروني مع أيقونة وزر النسخ */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow duration-300">
              <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700 text-sm md:text-base font-medium">
                {email}
              </span>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Copy email to clipboard"
                title="Copy email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />
                )}
              </button>
            </div>
          </div>

          {/* روابط التواصل الاجتماعي */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:mohammednoor.dev0@gmail.com"
              className="p-2 rounded-full bg-white shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-300 group"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/mohammed-noor" // استبدل بالرابط الصحيح
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://github.com/mnoNoor" // استبدل بالرابط الصحيح
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </a>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            I usually reply within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
