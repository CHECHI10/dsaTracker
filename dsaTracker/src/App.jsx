import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import ModalContent from './components/MainContent/ModalContent.jsx'
import ModalAdd from './components/MainContent/ModalAdd.jsx'
import ModalRandom from './components/MainContent/ModalRandom.jsx'
import './App.css'

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

  const [formData, setFormData] = useState({ title: '', platform: 'LeetCode', status: 'Unsolved', difficulty: 'Medium' })

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

      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        secondaryBg={secondaryBg}
        borderClass={borderClass}
        hoverBg={hoverBg}
      />

      <div className="flex">
        <Sidebar
          isDark={isDark}
          sidebarOpen={sidebarOpen}
          secondaryBg={secondaryBg}
          borderClass={borderClass}
          hoverBg={hoverBg}
        />

        <ModalContent
          setShowAddModal={setShowAddModal}
          problems={problems}
          isDark={isDark}
          setRandomProblem={setRandomProblem}
          setShowRandomModal={setShowRandomModal}
          hoverBg={hoverBg}
        />
      </div>

      <ModalAdd
        isDark={isDark}
        problems={problems}
        setProblems={setProblems}
        formData={formData}
        setFormData={setFormData}
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
      />

      <ModalRandom
        setShowRandomModal={setShowRandomModal}
        showRandomModal={showRandomModal}
        isDark={isDark}
        randomProblem={randomProblem}
      />

    </div>
  )
}
