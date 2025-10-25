
function Actionbar({ problemsState, modalControls, theme, handlePracticeRandom }) {
  const { problems } = problemsState;
  const { MODALS, setActiveModal } = modalControls;
  const { isDark } = theme;

  const deleteAllProblems = () => {
    // Open a confirmation modal instead of deleting immediately
    setActiveModal(MODALS.DELETE_ALL);
  }

  return (
    <>
      {/* Action Buttons */}
      <div className="flex flex-wrap justify-between items-center gap-4"> 
          <p className={`text-2xl font-bold ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
            My DSA Progress
          </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActiveModal(MODALS.ADD_PROBLEM)}
            className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            Add Problem
          </button>

          <button
            onClick={() => handlePracticeRandom()}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors shadow-md ${isDark
              ? 'bg-slate-700 hover:bg-slate-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
          >
            🎲 Practice Random
          </button>

          <button
            onClick={deleteAllProblems}
            disabled={problems.length === 0}
            className={`px-6 py-2.5 text-base font-semibold text-white rounded-lg transition-opacity shadow-md ${problems.length === 0
              ? 'bg-red-300 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-700'
              }`}
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  )
}

export default Actionbar