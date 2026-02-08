import useApp from "../../customHook/useApp"
import SortDropdown from "../Utils/SortDropdown";
import ProgressBar from "./Progressbar.jsx";

function Actionbar() {
  
  const { isDark, setActiveModal, MODALS, handlePracticeRandom, deleteAllProblems, problems} = useApp();  

  const borderClass = isDark ? 'border-slate-700' : 'border-gray-200';
  
  return (
    <>
      {/* Action Buttons */}
      <div className={`sticky top-0 z-20 ${isDark ? 'bg-slate-900' : 'bg-gray-50'} pb-4 pt-2 -mx-6 px-6 border-b ${borderClass} backdrop-blur-sm bg-opacity-95`}>

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
              onClick={() => deleteAllProblems()}
              disabled={problems.length === 0}
              className={`px-6 py-2.5 text-base font-semibold text-white rounded-lg transition-opacity shadow-md ${problems.length === 0
                ? 'bg-red-300 cursor-not-allowed'
                : 'bg-red-500 hover:bg-red-700'
                }`}
            >
              Delete All
            </button>

            <SortDropdown />
          </div>
        </div>
      </div>

      <ProgressBar />

    </>
  )
}

export default Actionbar