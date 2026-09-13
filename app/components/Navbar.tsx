export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-lg text-gray-900">
  Tharusi Manchanayake
</a>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </nav>
  );
}