import { useRef } from 'react'

function Sidebar({ sidebar, theme, modalControls }) {
  const { sidebarOpen } = sidebar;
  const { secondaryBg, borderClass, hoverBg, isDark } = theme;
  const { MODALS, setActiveModal } = modalControls;

  const sidebarRef = useRef(null)

  return (
    <aside ref={sidebarRef} className={`${sidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'} ${secondaryBg} border-r ${borderClass} transition-all duration-300 overflow-hidden fixed left-0 top-0 h-screen z-30`}>
      <nav className="p-6 h-full flex flex-col overflow-y-auto justify-between">
        <div className='mt-20'>
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">Navigation</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className={`block px-4 py-2 rounded-lg cursor-not-allowed ${hoverBg} transition-colors`}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className={`block px-4 py-2 rounded-lg cursor-not-allowed ${hoverBg} transition-colors`}>
                Topics
              </a>
            </li>
            <li>
              <a href="#" className={`block px-4 py-2 rounded-lg cursor-not-allowed ${hoverBg} transition-colors`}>
                Statistics
              </a>
            </li>
            <li>
              <button
                onClick={() => setActiveModal(MODALS.HELP)}
                className={`block px-4 py-2 rounded-lg ${hoverBg} transition-colors`}
              >
                {/* ⌨️ */}Keyboard Shortcuts
              </button>     
            </li>
          </ul>
        </div>

        <div className={` border-slate-700 flex items-center border-none rounded-lg ${hoverBg} transition-colors cursor-pointer`}>
          <div className="flex items-center gap-3 p-2">
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