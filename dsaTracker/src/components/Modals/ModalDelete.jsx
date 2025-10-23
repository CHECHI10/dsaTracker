import { Modal } from "../Icons/Icons";

function ModalDelete({ modalControls, editState, problemsState, theme }) {

  const { MODALS, activeModal, setActiveModal } = modalControls;
  const { problemDelete } = editState;
  const { problems, setProblems } = problemsState;
  const { isDark } = theme;

  const handleConfirmDelete = () => {
    if (problemDelete) {
      setProblems(problems.filter(p => p.id !== problemDelete.id));
      setActiveModal(MODALS.NONE);
    }
  };

  const handleConfirmDeleteAll = () => {
    setProblems([]);
    setActiveModal(MODALS.NONE);

  }

  console.log(problemDelete);

  return (
    <>
      <Modal
        isOpen={activeModal === MODALS.DELETE_SINGLE}
        title="Confirm Deletion" isDark={isDark}
        onClose={() =>
          setActiveModal(MODALS.NONE)
        }
      >
        <p className="text-gray-300 my-4 text-m">
          Are you sure you want to delete the problem "<span className="font-bold text-red-400">{problemDelete?.title}</span>"? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={() => setActiveModal(MODALS.NONE)}
            className="px-6 py-2.5 text-sm font-semibold text-gray-300 hover:text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmDelete}
            className="px-6 py-2.5 text-base font-semibold text-white bg-red-500 hover:bg-red-700 rounded-lg transition-opacity"
          >
            Delete
          </button>
        </div>
      </Modal>

      {/* --- Delete All Confirmation Modal --- */}
      <Modal
        isOpen={activeModal === MODALS.DELETE_ALL}
        title='Confirm Delete All' isDark={isDark}
        onClose={() =>
          setActiveModal(MODALS.NONE)
        }
      >

        <p className="text-gray-300 my-4 text-m">
          Are you sure you want to delete all problems? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={() => setActiveModal(MODALS.NONE)}
            className="px-6 py-2.5 text-sm font-semibold text-gray-300 hover:text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmDeleteAll}
            className="px-6 py-2.5 text-base font-semibold text-white bg-red-500 hover:bg-red-700 rounded-lg transition-opacity"
          >
            Delete All
          </button>
        </div>
      </Modal>
    </>
  )
}

export default ModalDelete