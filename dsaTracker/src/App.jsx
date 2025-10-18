import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'

// Icons
/* const SunIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 00-1.414 0l-.707.707a1 1 0 000 1.414l2.12 2.12a1 1 0 001.414 0l.707-.707a1 1 0 000-1.414zM2.05 6.464a1 1 0 000-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zm12.12 5.656a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 18a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm0-14a1 1 0 011 1v2a1 1 0 11-2 0V5a1 1 0 011-1zM3 10a1 1 0 011-1h2a1 1 0 110 2H4a1 1 0 01-1-1zm14 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
)

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
)

const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
) */

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
)

const AttemptedCircleIcon = () => (
  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      clipRule="evenodd"
    />
  </svg>
)

const UnsolvedCircleIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
  </svg>
)

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'Solved':
      return <CheckCircleIcon />
    case 'Attempted':
      return <AttemptedCircleIcon />
    case 'Unsolved':
    default:
      return <UnsolvedCircleIcon />
  }
}

const DifficultyBadge = ({ difficulty, isDark }) => {
  const bgColor =
    difficulty === 'Easy'
      ? isDark
        ? 'bg-green-900'
        : 'bg-green-100'
      : difficulty === 'Medium'
      ? isDark
        ? 'bg-yellow-900'
        : 'bg-yellow-100'
      : isDark
      ? 'bg-red-900'
      : 'bg-red-100'

  const textColor =
    difficulty === 'Easy'
      ? isDark
        ? 'text-green-300'
        : 'text-green-700'
      : difficulty === 'Medium'
      ? isDark
        ? 'text-yellow-300'
        : 'text-yellow-700'
      : isDark
      ? 'text-red-300'
      : 'text-red-700'

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor}`}>
      {difficulty}
    </span>
  )
}

const Modal = ({ isOpen, title, children, isDark, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className={`rounded-lg shadow-xl p-6 w-full max-w-md backdrop-blur-md border ${isDark ? 'bg-slate-800 bg-opacity-50 border-slate-700' : 'bg-white bg-opacity-50 border-white'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
          <button onClick={onClose} className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [problems, setProblems] = useState([
    { id: 1, title: 'Two Sum', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '2 days ago' },
    { id: 2, title: 'Binary Tree Level Order Traversal', platform: 'LeetCode', status: 'Attempted', difficulty: 'Medium', lastUpdate: '1 week ago' },
    { id: 3, title: 'Longest Increasing Subsequence', platform: 'CodeForces', status: 'Unsolved', difficulty: 'Hard', lastUpdate: '3 weeks ago' },
    { id: 4, title: 'Valid Parentheses', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago' },
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [showRandomModal, setShowRandomModal] = useState(false)
  const [randomProblem, setRandomProblem] = useState(null)
  // const sidebarRef = useRef(null)

  const [formData, setFormData] = useState({ title: '', platform: 'LeetCode', status: 'Unsolved', difficulty: 'Medium' })

  const handleAddProblem = () => {
    if (formData.title.trim()) {
      const newProblem = {
        id: Math.max(...problems.map((p) => p.id), 0) + 1,
        title: formData.title,
        platform: formData.platform,
        status: formData.status,
        difficulty: formData.difficulty,
        lastUpdate: 'Just now',
      }

      setProblems([newProblem, ...problems])
      setFormData({ title: '', platform: 'LeetCode', status: 'Unsolved', difficulty: 'Medium' })
      setShowAddModal(false)
    }
  }

  const handlePracticeRandom = () => {
    if (problems.length > 0) {
      const random = problems[Math.floor(Math.random() * problems.length)]
      setRandomProblem(random)
      setShowRandomModal(true)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(true)
      else setSidebarOpen(false)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const bgClass = isDark ? 'bg-slate-900' : 'bg-gray-50'
  const textClass = isDark ? 'text-white' : 'text-gray-900'
  const secondaryBg = isDark ? 'bg-slate-800' : 'bg-white'
  const borderClass = isDark ? 'border-slate-700' : 'border-gray-200'
  const hoverBg = isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'

  return (
    <div className={`${bgClass} ${textClass} min-h-screen font-sans transition-colors duration-300`}>
      {/* Header */}
      {/* <header className={`${secondaryBg} border-b ${borderClass} sticky top-0 z-40 transition-colors duration-300`}>
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`lg:hidden p-2 rounded-lg ${hoverBg} transition-colors`}>
              {sidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">DSA Tracker</h1>
          </div>
          <div>
            <button>Login</button>
            <button>Sign Up</button>
            <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-lg ${hoverBg} transition-colors`}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </header> */}
      <Header 
        isDark={isDark}
        setIsDark={setIsDark}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        secondaryBg={secondaryBg}
        borderClass={borderClass}
        hoverBg={hoverBg} 
      />

      {<div className="flex">
        {/* Sidebar */}
        {/* <aside ref={sidebarRef} className={`${sidebarOpen ? 'w-64' : 'w-0'} ${secondaryBg} border-r ${borderClass} transition-all duration-300 overflow-hidden lg:w-64`}>
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
            <div className="mt-auto pt-6 border-t border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-bold">U</div>
                <div className="text-sm">
                  <p className="font-semibold">User</p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-xs`}>user@example.com</p>
                </div>
              </div>
            </div>
          </nav>
        </aside> */}
        <Sidebar
        isDark={isDark}
        sidebarOpen={sidebarOpen}
        secondaryBg={secondaryBg}
        borderClass={borderClass}
        hoverBg={hoverBg}
      />

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-end">
              <button onClick={() => setShowAddModal(true)} className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">+ Add Problem</button>
              <button onClick={handlePracticeRandom} className={`px-6 py-2 ${isDark ? 'bg-slate-700' : 'bg-gray-200'} rounded-lg font-semibold ${isDark ? 'hover:bg-slate-600' : 'hover:bg-gray-300'} transition-colors`}>🎲 Practice Random</button>
            </div>

            {/* Problems Table */}
            <div className={`rounded-lg backdrop-blur-md border ${isDark ? 'bg-slate-800 bg-opacity-30 border-slate-700' : 'bg-white bg-opacity-30 border-white'} overflow-hidden shadow-xl transition-colors duration-300`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className={`${isDark ? 'bg-slate-700 bg-opacity-50' : 'bg-gray-100 bg-opacity-50'}`}>
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Difficulty</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Platform</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Last Update</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {problems.map((problem, idx) => (
                      <tr key={problem.id} className={`${idx % 2 === 0 ? (isDark ? 'bg-slate-800 bg-opacity-20' : 'bg-white bg-opacity-20') : ''} ${hoverBg} transition-colors hover:cursor-pointer`}>
                        <td className="px-6 py-4">
                          <StatusIcon status={problem.status} />
                        </td>
                        <td className="px-6 py-4 font-medium">{problem.title}</td>
                        <td className="px-6 py-4">
                          <DifficultyBadge difficulty={problem.difficulty} isDark={isDark} />
                        </td>
                        <td className="px-6 py-4 text-sm">{problem.platform}</td>
                        <td className={`px-6 py-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{problem.lastUpdate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>} 

      {/* Add Problem Modal */}
      <Modal isOpen={showAddModal} title="Add New Problem" isDark={isDark} onClose={() => setShowAddModal(false)}>
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Title</label>
            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`} placeholder="Problem title" />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Platform</label>
            <select value={formData.platform} onChange={(e) => setFormData({ ...formData, platform: e.target.value })} className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}>
              <option>LeetCode</option>
              <option>GeekForGeeks</option>
              <option>CodeForces</option>
              <option>HackerRank</option>
              <option>InterviewBit</option>
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Status</label>
            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}>
              <option>Unsolved</option>
              <option>Attempted</option>
              <option>Solved</option>
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Difficulty</label>
            <select value={formData.difficulty} onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })} className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <button onClick={handleAddProblem} className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">Add Problem</button>
        </div>
      </Modal>

      {/* Random Practice Modal */}
      <Modal isOpen={showRandomModal} title="Random Problem" isDark={isDark} onClose={() => setShowRandomModal(false)}>
        {randomProblem && (
          <div className="space-y-4">
            <div>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Title</p>
              <p className="text-lg font-bold text-cyan-400">{randomProblem.title}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Difficulty</p>
                <DifficultyBadge difficulty={randomProblem.difficulty} isDark={isDark} />
              </div>
              <div>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Platform</p>
                <p className="font-semibold">{randomProblem.platform}</p>
              </div>
            </div>
            <div>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Current Status</p>
              <p className="font-semibold">{randomProblem.status}</p>
            </div>
            <button onClick={() => setShowRandomModal(false)} className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">Start Practicing</button>
          </div>
        )}
      </Modal>
    </div>
  )
}
 