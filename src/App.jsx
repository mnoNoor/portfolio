import Header from "./components/Header";
import Projects from "./sections/Projects";
import Info from "./sections/Info";
import Footer from "./components/Footer";
import DownloadCV from "./sections/DownloadCV";
import Email from "./sections/Email";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header className="p-0 w-auto" />

        <main className="py-8 md:py-12">
          <div className="gap-8 lg:gap-12 items-start">
            <div className="space-y-6 lg:top-8">
              <Info />
              <div className="flex justify-center lg:justify-start">
                <DownloadCV />
              </div>
            </div>

            <div className="lg:col-span-1">
              <Projects />
            </div>
            <div className="lg:col-span-1">
              <Email />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
