import { useEffect } from 'react'
import useApp from './useApp';

function useKeyboardShortcut() {

  const {
    MODALS,
    activeModal,
    setActiveModal,
    problems,
    isDark,
    setIsDark,
    sidebarOpen,
    setSidebarOpen,
    handlePracticeRandom
  } = useApp();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Skip if typing in input fields
      const isTyping = ['INPUT', 'TEXTAREA'].includes(e.target.tagName);
      if (isTyping) return;

      const isModalOpen = activeModal !== MODALS.NONE;

      // Escape: Close any modal
      if (e.key === 'Escape') {
        if (isModalOpen) {
          setActiveModal(MODALS.NONE);
        }
        return;
      }

      // if (isModalOpen) return;  // Does not allow other shortcuts if modal is open

      // Alt + N: Add Problem
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        setActiveModal(MODALS.ADD_PROBLEM);
      }
      // Alt + P: Random Practice
      else if (e.altKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        handlePracticeRandom();
      }
      // Alt + D: Delete All (with extra confirmation)
      else if (e.altKey && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        if (problems.length > 0) {
          setActiveModal(MODALS.DELETE_ALL);
        }
      }
      // Alt + T: Toggle Theme
      else if (e.altKey && e.key.toLowerCase() === 't') {
        e.preventDefault();
        setIsDark(!isDark);
      }
      // Alt + S: Toggle Sidebar
      else if (e.altKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        setSidebarOpen(!sidebarOpen);
      }
      // Show keyboard shortcuts 
      else if (e.ctrlKey && e.key.toLowerCase() === '/') {
        e.preventDefault();
        setActiveModal(MODALS.HELP);
      }

     /*  // THIS IS NOT WORKING CORRECTLY AT THE MOMENT , I WILL CHANGE THIS IN FUTURE
         // Enter key: Trigger action based on current modal
      else if (e.key === 'Enter') {
        e.preventDefault();
        switch (activeModal) {
          case MODALS.ADD_PROBLEM:
            // call your addProblem function
            handleAddProblem?.();
            break;
          case MODALS.EDIT_PROBLEM:
            // call your editProblem function
            handleEditProblem?.();
            break;
          case MODALS.RANDOM_PROBLEM:
            // call your editProblem function
            handlePracticeRandom?.();
            break;
          case MODALS.DELETE_ALL:
            // call your delete function
            // handleDeleteProblem?.();
            if (problems.length > 0) {
              setActiveModal(MODALS.DELETE_ALL);
            }
            break;
          default:
            break;
        }
      } */
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    activeModal,
    problems,
    isDark,
    sidebarOpen,
    handlePracticeRandom,
    setActiveModal,
    setIsDark,
    setSidebarOpen,
    MODALS
  ]);
}

export default useKeyboardShortcut