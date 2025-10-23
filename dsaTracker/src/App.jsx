import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import ModalContent from './components/MainContent/ModalContent.jsx'
import ModalAddProb from './components/Modals/ModalAddProb.jsx'
import ModalRandomProb from './components/Modals/ModalRandomProb.jsx'
// import useLocalStorage from './customHook/useLocalStorage.js'
import './App.css'

const InitialProblems = [
  { id: 1, title: 'Two Sum', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '2 days ago', link: 'hsh' },
  { id: 2, title: 'Binary Tree Level Order Traversal', platform: 'LeetCode', status: 'Attempted', difficulty: 'Medium', lastUpdate: '1 week ago', link: 'hsh' },
  { id: 3, title: 'Longest Increasing Subsequence', platform: 'CodeForces', status: 'Unsolved', difficulty: 'Hard', lastUpdate: '3 weeks ago', link: 'hsh' },
  { id: 4, title: 'Valid Parentheses', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },
];

export default function App() {
  // state management
  const [isDark, setIsDark] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [problems, setProblems] = useState(InitialProblems)

  // modal states
  // const [showAddModal, setShowAddModal] = useState(false)
  const [randomProblem, setRandomProblem] = useState(null)
  const [problemDelete, setProblemDelete] = useState(null);
  const [editingStatusProblemId, setEditingStatusProblemId] = useState(null); // New state for status dropdown

  const MODALS = {
    NONE: null,
    ADD_PROBLEM: 'addProblem',
    RANDOM_PROBLEM: 'randomProblem',
    NO_PROBLEMS_ERROR: 'noProblemsError',
    // EDIT_PROBLEM: 'editProblem',
    DELETE_SINGLE: 'deleteSingle',
    DELETE_ALL: 'deleteAll',
  };

  const [activeModal, setActiveModal] = useState(MODALS.NONE);
  
  const [formData, setFormData] = useState({ title: '', platform: 'LeetCode', status: 'Unsolved', difficulty: 'Medium', link: '' })

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

        {/* <ModalAddProb
          isDark={isDark}
          problems={problems}
          setProblems={setProblems}
          formData={formData}
          setFormData={setFormData}
          // showAddModal={showAddModal}
          // setShowAddModal={setShowAddModal}
          MODALS={MODALS}
          setActiveModal={setActiveModal}
          activeModal={activeModal}
        /> */}

        <ModalRandomProb
          isDark={isDark}
          randomProblem={randomProblem}
          modalControls={{MODALS, activeModal, setActiveModal}}
        />
        <ModalContent
          modalControls={{MODALS, activeModal, setActiveModal}}
          problemsState={{ problems, setProblems, setRandomProblem }}
          editState={{ problemDelete, setProblemDelete,editingStatusProblemId, setEditingStatusProblemId }}
          theme={{ isDark, hoverBg }}
          formDataState={{ formData, setFormData }}
        />

      </div>


    </div>
  )
}
