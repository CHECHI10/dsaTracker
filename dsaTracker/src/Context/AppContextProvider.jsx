import { useState, useEffect } from 'react';
import AppContext from './AppContext';
import MODALS from '../constants/modals';

const InitialProblems = [  
  { id: 1, title: 'Two Sum', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '2 days ago', link: 'hsh' },
  { id: 2, title: 'Binary Tree Level Order Traversal', platform: 'LeetCode', status: 'Attempted', difficulty: 'Medium', lastUpdate: '1 week ago', link: 'hsh' },
  { id: 3, title: 'Longest Increasing Subsequence', platform: 'CodeForces', status: 'Unsolved', difficulty: 'Hard', lastUpdate: '3 weeks ago', link: 'hsh' },
  { id: 4, title: 'Valid Parentheses 4', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },
  { id: 5, title: 'Valid Parentheses 5', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },
  { id: 6, title: 'Valid Parentheses 6', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },
  { id: 7, title: 'Valid Parentheses 7', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },
  { id: 8, title: 'Valid Parentheses 8', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },
  { id: 9, title: 'Valid Parentheses 9', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },
  { id: 10, title: 'Valid Parentheses 10', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },
  { id: 11, title: 'Valid Parentheses 11', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },
  { id: 12, title: 'Valid Parentheses 12', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },               
  { id: 13, title: 'Valid Parentheses 13', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },
  { id: 14, title: 'Valid Parentheses 14', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' },
  { id: 15, title: 'Valid Parentheses 15', platform: 'LeetCode', status: 'Solved', difficulty: 'Easy', lastUpdate: '1 month ago', link: 'hsh' }
];

// provider component
const AppContextProvider = ({ children }) => {

  // state management
  const [isDark, setIsDark] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [problems, setProblems] = useState(InitialProblems)
  const [formData, setFormData] = useState({ title: '', platform: 'LeetCode', status: 'Unsolved', difficulty: 'Medium', link: '', /* lastUpdateTime: new Date() */ lastUpdate: new Date() })

  // modal states
  const [activeModal, setActiveModal] = useState(MODALS.NONE);
  const [randomProblem, setRandomProblem] = useState(null) // for random practice modal
  const [problemToDelete, setProblemToDelete] = useState(null); // single delete state
  const [updateStatusProblem, setUpdateStatusProblem] = useState(null); // New state for status dropdown
  const [problemToEdit, setProblemToEdit] = useState(null); // edit problem state

  // theme switchers
  const bgClass = isDark ? 'bg-slate-900' : 'bg-gray-50'
  const textClass = isDark ? 'text-white' : 'text-gray-900'
  const secondaryBg = isDark ? 'bg-slate-800' : 'bg-white'          
  const borderClass = isDark ? 'border-slate-700' : 'border-gray-200'
  const hoverBg = isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'

  // Sort state
  const [sortBy, setSortBy] = useState('lastUpdate'); // Default sort
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'      

  // Sort problems function
  const getSortedProblems = () => {
    const sorted = [...problems].sort((a, b) => {
      switch (sortBy) {
        case 'status': {
          const statusOrder = { 'Solved': 1, 'Attempted': 2, 'Unsolved': 3 };
          return sortOrder === 'asc'
            ? statusOrder[a.status] - statusOrder[b.status]
            : statusOrder[b.status] - statusOrder[a.status];
        }

        case 'difficulty': {
          const diffOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
          return sortOrder === 'asc'
            ? diffOrder[a.difficulty] - diffOrder[b.difficulty]
            : diffOrder[b.difficulty] - diffOrder[a.difficulty];
        }

        case 'lastUpdate':
          return sortOrder === 'asc'
            ? new Date(a.lastUpdate) - new Date(b.lastUpdate)
            : new Date(b.lastUpdate) - new Date(a.lastUpdate);

        case 'title':
          return sortOrder === 'asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);

        case 'platform':
          return sortOrder === 'asc'
            ? a.platform.localeCompare(b.platform)
            : b.platform.localeCompare(a.platform);

        default:
          return 0;
      }
    });
    return sorted;
  };

  // pagination states

  const [currentPage, setCurrentPage] = useState(1);
  const [probPerPage, setProbPerPage] = useState(5);

  const lastProbIndex = currentPage * probPerPage;
  const firstprobIndex = lastProbIndex - probPerPage;

  const sortedProblems = getSortedProblems();
  // directly use sortedproblems instead of problems.
  const currentProblems = sortedProblems.slice(firstprobIndex, lastProbIndex);  

  // function to handle last update time 
  const formatTimeAgo = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (minutes < 1) return 'Just now';
    if (hours < 1) return `${minutes} minutes${minutes === 1 ? '' : 's'} ago`;
    if (days < 1) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    if (months < 1) return `${days} day${days === 1 ? '' : 's'} ago`;

    return `${months} month${months === 1 ? '' : 's'} ago`;
  }

  // to handle practice random problem
  const handlePracticeRandom = () => {
    if (problems.length === 0) {
      setActiveModal(MODALS.NO_PROBLEMS_ERROR);
      return;
    }

    // to pick a random problem
    const random = problems[Math.floor(Math.random() * problems.length)]
    setRandomProblem(random);
    setActiveModal(MODALS.RANDOM_PROBLEM);
  }

  // to add new problem
  const handleAddProblem = () => {
    if (formData.title.trim()) {
      const newProblem = {
        id: Math.max(...problems.map((p) => p.id), 0) + 1,
        title: formData.title,
        platform: formData.platform,
        status: formData.status,
        difficulty: formData.difficulty,
        // lastUpdateTime: new Date(),
        lastUpdate: new Date(),
        link: formData.link || '',
      }

      setProblems([newProblem, ...problems])
      setActiveModal(MODALS.NONE)
      setFormData({ title: '', platform: 'LeetCode', status: 'Unsolved', difficulty: 'Medium', link: '' })
    }
  }

  // to update problem status
  const handleUpdateStatus = (newStatus) => {
    if (updateStatusProblem) {
      setProblems(problems.map(p =>
        p.id === updateStatusProblem.id ? { ...p, status: newStatus } : p
      ))
    }

    setActiveModal(MODALS.NONE);
  };

  // to open modal for edit problem
  const handleOpenEdit = (problem) => {
    setProblemToEdit(problem);
    setFormData({
      title: problem.title,
      platform: problem.platform,
      status: problem.status,
      difficulty: problem.difficulty,
      link: problem.link
    });
    setActiveModal(MODALS.EDIT_PROBLEM);
  }

  // to confirm edit problem
  const handleConfirmEdit = () => {
    if (problemToEdit && formData.title.trim()) {
      setProblems(problems.map(p => p.id === problemToEdit.id ? {
        ...p,
        title: formData.title,
        platform: formData.platform,
        difficulty: formData.difficulty,
        status: formData.status,
        link: formData.link,
        // lastUpdateTime: formData.status !== p.status ? new Date() : p.lastUpdate // only change lastUpdateTime if PROBLEM STATUS is changed
        lastUpdate: formData.status !== p.status ? new Date() : p.lastUpdate // only change lastUpdateTime if PROBLEM STATUS is changed
      }
        : p
      ));
    }
    setFormData({ title: '', platform: 'LeetCode', status: 'Unsolved', difficulty: 'Medium', link: '' });
    setActiveModal(MODALS.NONE);
  };

  // to confirm delete for single problem
  const handleConfirmDelete = () => {
    if (problemToDelete) {
      setProblems(problems.filter(p => p.id !== problemToDelete.id));
      setActiveModal(MODALS.NONE);
    }
  };

  // to confirm delete for All problem
  const handleConfirmDeleteAll = () => {
    setProblems([]);
    setActiveModal(MODALS.NONE);
  }

  // to open modal for delete single problem
  const handleDeleteProblem = (problem) => {
    setProblemToDelete(problem);
    setActiveModal(MODALS.DELETE_SINGLE);
  };

  // to open modal for delete all problems
  const deleteAllProblems = () => {
    // Open a confirmation modal instead of deleting immediately
    setActiveModal(MODALS.DELETE_ALL);
  }

  // responsive sidebar handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(true)
      else setSidebarOpen(false)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const value = {
    // theme
    isDark, setIsDark, secondaryBg,

    // sorting
    sortBy, setSortBy, sortOrder, setSortOrder, getSortedProblems, sortedProblems,

    // sidebar
    sidebarOpen, setSidebarOpen,

    // problems
    problems, setProblems, randomProblem, setRandomProblem, bgClass, textClass, borderClass, hoverBg,

    // pagination
    currentProblems, currentPage, setCurrentPage, setProbPerPage, probPerPage, 

    // delete
    problemToDelete, setProblemToDelete,

    // edit
    problemToEdit, setProblemToEdit,

    // update status
    updateStatusProblem, setUpdateStatusProblem,

    // form
    formData, setFormData,

    // MODALS
    MODALS, activeModal, setActiveModal,

    // functions
    handleAddProblem, handlePracticeRandom,
    handleOpenEdit, handleConfirmEdit,
    handleUpdateStatus, formatTimeAgo,
    handleConfirmDelete, handleDeleteProblem, deleteAllProblems, handleConfirmDeleteAll,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );

}

export default AppContextProvider;