import { Cpu, Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900/70 backdrop-blur-md sticky top-0 z-50 border-b border-purple-600/30">
      {/* Left side - logo */}
      <div className="flex items-center gap-2">
        <Cpu className="text-purple-400" size={24} />
        <h1 className="font-bold text-xl text-white tracking-wide">
          Quantum Vision
        </h1>
      </div>

      {/* Right side - GitHub link */}
      <a
        href="https://github.com/YOUR_GITHUB_USERNAME/quantum-vision"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
      >
        <Github size={18} /> GitHub
      </a>
    </nav>
  );
}
