import {useEffect} from 'react'

function useKeyboardShortcut({ modalControls, problemsState, theme, sidebar, handlePracticeRandom }) {
  const { MODALS, activeModal, setActiveModal } = modalControls;
  const { problems } = problemsState;
  const { isDark, setIsDark } = theme;
  const { sidebarOpen, setSidebarOpen } = sidebar;

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

      // if (isModalOpen) return;  // Don't allow other shortcuts if modal is open

      // Alt + N: Add Problem
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        setActiveModal(MODALS.ADD_PROBLEM);
      }
      // Alt + R: Random Practice
      else if (e.altKey && e.key === 'p') {
        e.preventDefault();
        handlePracticeRandom();
      }
      // Alt + D: Delete All (with extra confirmation)
      else if (e.altKey && e.key === 'd') {
        e.preventDefault();
        if (problems.length > 0) {
          setActiveModal(MODALS.DELETE_ALL);
        }
      }
      // Alt + T: Toggle Theme
      else if (e.altKey && e.key === 't') {
        e.preventDefault();
        setIsDark(!isDark);
      }
      // Alt + S: Toggle Sidebar
      else if (e.altKey && e.key === 's') {
        e.preventDefault();
        setSidebarOpen(!sidebarOpen);
      }
      // Show keyboard shortcuts 
      else if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        setActiveModal(MODALS.HELP); 
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModal, problems.length, isDark, sidebarOpen]);
}

export default useKeyboardShortcut