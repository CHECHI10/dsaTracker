import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '../Icons/Icons.jsx';

function Header({ isDark, setIsDark, sidebarOpen, setSidebarOpen, secondaryBg, borderClass, hoverBg }) {

  return (
    <header className={`${secondaryBg} border-b ${borderClass} sticky top-0 z-40 transition-colors duration-300`}>
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-2 rounded-lg ${hoverBg} transition-colors`}
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            {sidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">DSA Tracker</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-1 ">Login</button>
          <button>Sign Up</button>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg ${hoverBg} transition-colors`}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header