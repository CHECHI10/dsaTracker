import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
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
  const [randomProblem, setRandomProblem] = useState(null)
  const [problemToDelete, setProblemToDelete] = useState(null);
  const [updateStatusProblem, setUpdateStatusProblem] = useState(null); // New state for status dropdown

  const MODALS = {
    NONE: null,
    ADD_PROBLEM: 'addProblem',
    RANDOM_PROBLEM: 'randomProblem',
    NO_PROBLEMS_ERROR: 'noProblemsError',
    UPDATE_STATUS: 'updateStatus',
    // EDIT_PROBLEM: 'editProblem',
    DELETE_SINGLE: 'deleteSingle',
    DELETE_ALL: 'deleteAll',
    HELP: 'help',
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
        theme={{ isDark, hoverBg, setIsDark, secondaryBg,borderClass }}
        sidebar={{ sidebarOpen, setSidebarOpen }}
      />
      
      <div className="flex">
        <Sidebar
          modalControls={{ MODALS, activeModal, setActiveModal }}
          theme={{ secondaryBg, borderClass, hoverBg, isDark }}
          sidebar={{ sidebarOpen }}
        />
        <MainContent
          modalControls={{MODALS, activeModal, setActiveModal}}
          problemsState={{ problems, setProblems, randomProblem, setRandomProblem }}
          editState={{ problemToDelete, setProblemToDelete, updateStatusProblem, setUpdateStatusProblem }}
          theme={{ isDark, hoverBg, setIsDark }}
          sidebar={{ sidebarOpen, setSidebarOpen }}
          formDataState={{ formData, setFormData }}
        />
      </div>

    </div>
  )
}
