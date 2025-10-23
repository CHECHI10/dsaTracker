import {useRef} from 'react'

function Sidebar({ sidebar, theme }) {
  const { sidebarOpen } = sidebar;
  const { secondaryBg, borderClass, hoverBg, isDark } = theme;

  const sidebarRef = useRef(null)

  return (
    <aside ref={sidebarRef} className={`${sidebarOpen ? 'w-64' : 'w-0'} ${secondaryBg} border-r ${borderClass} transition-all duration-300 overflow-hidden`}>
      <nav className="p-6 space-y-6 h-full flex flex-col">
        <div>
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">Navigation</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className={`block px-4 py-2 rounded-lg ${hoverBg} transition-colors`}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className={`block px-4 py-2 rounded-lg ${hoverBg} transition-colors`}>
                Topics
              </a>
            </li>
            <li>
              <a href="#" className={`block px-4 py-2 rounded-lg ${hoverBg} transition-colors`}>
                Statistics
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-auto pt-6 border-t border-slate-700 items-end">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-bold">C</div>
            <div className="text-sm">
              <p className="font-semibold">CHECHI10</p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-xs`}>rohitchechi10@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar