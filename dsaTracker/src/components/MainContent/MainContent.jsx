import ProblemTable from "./ProblemTable.jsx";
import Actionbar from "./Actionbar.jsx";
import useKeyboardShortcut from "../../customHook/useKeyboardShortcut.js";
import AllModals from "../Modals/AllModals.jsx";

function MainContent({ modalControls, problemsState, editState, theme, formDataState, sidebar }) {
  const { problems, setRandomProblem } = problemsState;
  const { MODALS, setActiveModal } = modalControls;
  const { sidebarOpen } = sidebar;

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

  // function to update time ago format 
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

  useKeyboardShortcut({ modalControls, problemsState, theme, sidebar, handlePracticeRandom });

  return (
    <>
      <AllModals editState={editState} theme={theme} modalControls={modalControls} problemsState={problemsState} formDataState={formDataState} handlePracticeRandom={handlePracticeRandom} formatTimeAgo={formatTimeAgo}/>

      <main className={`flex-1 p-6 lg:p-8 ${sidebarOpen ? 'ml-64' : 'ml-0'}  transition-all duration-300`}>
        <div className="max-w-7xl mx-auto space-y-6">

          <Actionbar
            theme={theme}
            problemsState={problemsState}
            modalControls={modalControls}
            handlePracticeRandom={handlePracticeRandom}
          />

          <ProblemTable
            editState={editState}
            theme={theme}
            modalControls={modalControls}
            problemsState={problemsState}
            formDataState={formDataState}
            formatTimeAgo={formatTimeAgo}
          />

        </div>
      </main>
    </>
  )
}

export default MainContent