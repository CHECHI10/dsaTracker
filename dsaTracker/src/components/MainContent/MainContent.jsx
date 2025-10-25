import ProblemTable from "./ProblemTable.jsx";
import Actionbar from "./Actionbar.jsx";
import useKeyboardShortcut from "../../customHook/useKeyboardShortcut.js";
import AllModals from "../Modals/AllModals.jsx";

function MainContent({ modalControls, problemsState, editState, theme, formDataState, sidebar }) {
  const { problems, setRandomProblem } = problemsState;
  const { MODALS, setActiveModal } = modalControls;

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

  useKeyboardShortcut({ modalControls, problemsState, theme, sidebar, handlePracticeRandom });

  return (
    <>
      <AllModals editState={editState} theme={theme} modalControls={modalControls} problemsState={problemsState} formDataState={formDataState} handlePracticeRandom={handlePracticeRandom}/>

      <main className="flex-1 p-6 lg:p-8">
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
          />

        </div>
      </main>
    </>
  )
}

export default MainContent