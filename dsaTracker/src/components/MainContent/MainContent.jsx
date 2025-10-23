import ProblemTable from "./ProblemTable.jsx";
import AddProbModal from "../Modals/AddProbModal.jsx"
import RandomProbModal from "../Modals/RandomProbModal.jsx"
import Actionbar from "./Actionbar.jsx";

function MainContent({ modalControls, problemsState, editState, theme, formDataState }) {

  const { MODALS, activeModal, setActiveModal } = modalControls;
  const { randomProblem } = problemsState;
  const { isDark } = theme;

  return (
    <>
      <AddProbModal
        theme={theme}
        problemsState={problemsState}
        formDataState={formDataState}
        modalControls={modalControls}
      />

      <RandomProbModal
        isDark={isDark}
        randomProblem={randomProblem}
        modalControls={{ MODALS, activeModal, setActiveModal }}
      />

      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">

          <Actionbar
            theme={theme}
            problemsState={problemsState}
            modalControls={modalControls}
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