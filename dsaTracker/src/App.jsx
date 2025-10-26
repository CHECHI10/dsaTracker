import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import useApp from './customHook/useApp.js'
import useKeyboardShortcut from './customHook/useKeyboardShortcut.js'

export default function App() {
  const { bgClass, textClass } = useApp();

  useKeyboardShortcut();

  return (
    <div className={`${bgClass} ${textClass} min-h-screen font-sans transition-colors duration-300 overflow-x-hidden`}>
      
      <Header />
      
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>

    </div>
  )
}
