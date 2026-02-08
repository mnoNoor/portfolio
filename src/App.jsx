import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Info from "./components/Info";
import Footer from "./components/Footer";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      <Sidebar open={sidebarOpen} />

      <div className="flex-1 flex flex-col transition-all duration-300">
        <Header onToggle={() => setSidebarOpen((v) => !v)} />

        <main className="flex-1 p-6 bg-slate-100">
          <Info />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}
