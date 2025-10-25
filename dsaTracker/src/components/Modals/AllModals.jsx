import AddProbModal from "./AddProbModal"
import RandomProbModal from "./RandomProbModal"
import ShortcutModal from "./ShortcutModal"
import DeleteModal from "./DeleteModal"
import UpdateStatusModal from "./UpdateStatusModal"
import EditProblemModal from "./EditProblemModal"

function AllModals({ theme, problemsState, formDataState, modalControls, editState, handlePracticeRandom }) {
  return (
    <>
      <AddProbModal theme={theme} problemsState={problemsState} formDataState={formDataState} modalControls={modalControls} />

      <RandomProbModal theme={theme} problemsState={problemsState} modalControls={modalControls} handlePracticeRandom={handlePracticeRandom} />

      <ShortcutModal theme={theme} modalControls={modalControls} />
      
      <DeleteModal theme={theme} problemsState={problemsState} modalControls={modalControls}  editState={editState}/>

      <UpdateStatusModal theme={theme} problemsState={problemsState} modalControls={modalControls} editState={editState} />

      <EditProblemModal theme={theme} problemsState={problemsState} modalControls={modalControls} formDataState={formDataState} editState={editState}/>
    </>
  )
}

export default AllModals